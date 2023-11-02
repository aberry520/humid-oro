# Generated by Django 4.2.6 on 2023-11-01 17:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Cigar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('rating_avg', models.IntegerField()),
                ('time_avg', models.IntegerField()),
                ('origin', models.CharField(max_length=50)),
                ('wrapper', models.CharField(max_length=50)),
                ('filler', models.CharField(max_length=50)),
                ('binder', models.CharField(max_length=50)),
                ('strength', models.CharField(max_length=50)),
                ('wrapper_color', models.CharField(max_length=50)),
                ('length', models.IntegerField()),
                ('gauge', models.IntegerField()),
                ('shape', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=300)),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cigar.brand')),
            ],
        ),
    ]