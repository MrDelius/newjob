# Generated by Django 4.2.1 on 2023-08-28 06:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employer',
            name='city',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='city_employer', to='users.city'),
        ),
        migrations.AlterField(
            model_name='employer',
            name='company_name',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='employer',
            name='country',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='country_employer', to='users.country'),
        ),
        migrations.AlterField(
            model_name='employer',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='employer',
            name='link',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='employer',
            name='logo',
            field=models.ImageField(null=True, upload_to='images/logos/'),
        ),
        migrations.AlterField(
            model_name='employer',
            name='phone_number',
            field=phonenumber_field.modelfields.PhoneNumberField(max_length=128, null=True, region=None),
        ),
        migrations.AlterField(
            model_name='employer',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='profile',
            name='birthday',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='city',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='city_profiles', to='users.city'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='country',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='country_profiles', to='users.country'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='phone',
            field=phonenumber_field.modelfields.PhoneNumberField(max_length=128, null=True, region=None),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
