# Generated by Django 2.1.8 on 2020-04-25 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.TextField(blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.IntegerField(max_length=10, primary_key=True, serialize=False),
        ),
    ]