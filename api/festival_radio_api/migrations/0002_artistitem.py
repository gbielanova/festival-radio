# Generated by Django 2.2 on 2021-06-03 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('festival_radio_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ArtistItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
            ],
        ),
    ]