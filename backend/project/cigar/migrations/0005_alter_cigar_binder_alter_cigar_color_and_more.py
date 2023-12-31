# Generated by Django 4.2.6 on 2023-11-14 01:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cigar', '0004_alter_cigar_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cigar',
            name='binder',
            field=models.CharField(null=True),
        ),
        migrations.AlterField(
            model_name='cigar',
            name='color',
            field=models.CharField(null=True),
        ),
        migrations.AlterField(
            model_name='cigar',
            name='filler',
            field=models.CharField(null=True),
        ),
        migrations.AlterField(
            model_name='cigar',
            name='name',
            field=models.CharField(),
        ),
        migrations.AlterField(
            model_name='cigar',
            name='origin',
            field=models.CharField(null=True),
        ),
        migrations.AlterField(
            model_name='cigar',
            name='shape',
            field=models.CharField(null=True),
        ),
        migrations.AlterField(
            model_name='cigar',
            name='strength',
            field=models.CharField(null=True),
        ),
        migrations.AlterField(
            model_name='cigar',
            name='wrapper',
            field=models.CharField(null=True),
        ),
    ]
