# Generated by Django 5.0.1 on 2024-01-24 07:58

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analytics', '0004_alter_job_description_alter_job_employer_and_more'),
        ('users', '0003_alter_employer_user_alter_profile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='country',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='country_job', to='users.country'),
        ),
        migrations.AlterField(
            model_name='job',
            name='experience',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='job',
            name='price',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
        migrations.AlterField(
            model_name='job',
            name='skills',
            field=models.ManyToManyField(blank=True, null=True, to='analytics.skill'),
        ),
    ]
