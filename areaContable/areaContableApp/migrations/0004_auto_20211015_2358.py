# Generated by Django 3.2.8 on 2021-10-15 23:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('areaContableApp', '0003_auto_20211015_0455'),
    ]

    operations = [
        migrations.AddField(
            model_name='alumno',
            name='apellidos',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='alumno',
            name='email',
            field=models.EmailField(default=1, max_length=254, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='alumno',
            name='nivel',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='alumno',
            name='numero_de_indentidad',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='alumno',
            name='password',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='alumno',
            name='nombres',
            field=models.CharField(max_length=50),
        ),
    ]