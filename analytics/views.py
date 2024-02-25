from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect

from analytics.models import Job


def about(request):
    return render(request, 'analytics/about.html')


def index(request):
    user = request.user
    ava_url = ''
    default = ''

    if user.is_authenticated:
        if user.user_type == 'applicant':
            try:
                ava_url = user.profile.avatar.url
            except:
                capitalized_first_name = user.first_name.capitalize()
                capitalized_last_name = user.last_name.capitalize()

                default = capitalized_first_name[0] + capitalized_last_name[0]
        elif user.user_type == 'employer':
            ava_url = user.employer.logo.url

    if ava_url:
        context = {'ava_url': ava_url}
    else:
        context = {'default': default}

    return render(request, 'analytics/index.html', context)


def get_job_data(request, job_id):
    try:
        job = Job.objects.get(pk=job_id)
        job_data = {
            'title': job.title,
            'description': job.description,
            'location': job.location,
            'price': job.price,
            'time_create': job.time_create,
            'experience': job.experience,
            'form': job.form.form if job.form else '',
            # Retrieve employer data
            'employer': {
                'company': job.employer.company,
                'description': job.employer.description,
                'url': job.employer.get_absolute_url()
            },
            # Add more fields you want to pass
        }
        return JsonResponse(job_data)
    except Job.DoesNotExist:
        return JsonResponse({'error': 'Job not found'}, status=404)


def jobs(request):
    if 'title' in request.GET:
        title = request.GET['title']
        posts = Job.objects.filter(title__icontains=title)
    else:
        posts = Job.objects.all().order_by("-time_create")

    last_job = Job.objects.last()
    page = Paginator(posts, 10)
    page_list = request.GET.get('page')
    page = page.get_page(page_list)
    context = {'posts': page, 'last_job': last_job}
    return render(request, 'analytics/jobs.html', context=context)


@login_required
def apply_for_job(request, post_id):
    job = get_object_or_404(Job, pk=post_id)

    if request.user.user_type == 'applicant':
        profile = request.user.profile
        job.applicant.add(profile)
        profile.vacancy.add(job)
        profile_slug = profile.slug
        return redirect('users:profile', profile_slug=profile_slug)

    return redirect('post', post_id=post_id)


def post(request, post_id):
    hire = get_object_or_404(Job, pk=post_id)
    context = {'post': hire}
    return render(request, 'analytics/post.html', context=context)


def company(request, company_id):
    return render(request, 'analytics/company.html')


def resume_builder(request):
    return render(request, 'analytics/resume-builder.html')