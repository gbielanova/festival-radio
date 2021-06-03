# Generated by Django 2.2 on 2021-06-03 15:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('festival_radio_api', '0002_artistitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='FerstivalArtistsItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artist_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='festival_radio_api.ArtistItem')),
                ('festival_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='festival_radio_api.FestivalItem')),
            ],
        ),
    ]
