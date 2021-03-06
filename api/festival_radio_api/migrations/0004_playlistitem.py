# Generated by Django 2.2 on 2021-06-03 15:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('festival_radio_api', '0003_ferstivalartistsitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlaylistItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artists', models.CharField(max_length=1000)),
                ('playlist_id', models.CharField(max_length=255)),
                ('festival_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='festival_radio_api.FestivalItem')),
            ],
        ),
    ]
