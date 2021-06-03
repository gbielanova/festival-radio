from django.contrib import admin
from django.db import models
from festival_radio_api import models

admin.site.register(models.FestivalItem)
admin.site.register(models.ArtistItem)
admin.site.register(models.FerstivalArtistsItem)
admin.site.register(models.PlaylistItem)
