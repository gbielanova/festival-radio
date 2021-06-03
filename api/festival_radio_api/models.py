from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager
from django.conf import settings


class FestivalItem(models.Model):
    """Database model for festivals in the system"""

    name = models.CharField(max_length=255, unique=True)
    logo_url = models.CharField(max_length=255)

    def __str__(self):
        """Return the model as a atring"""
        return self.name


class ArtistItem(models.Model):
    """Database model for artists in the system"""

    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        """Return the model as a atring"""
        return self.name


class FerstivalArtistsItem(models.Model):
    """Database model for artists on festival"""

    festival_id = models.ForeignKey(FestivalItem, on_delete=models.CASCADE)
    artist_id = models.ForeignKey(ArtistItem, on_delete=models.CASCADE)

    def __str__(self):
        """Return the model as a atring"""
        return f"{self.festival_id} - {self.artist_id}"


class PlaylistItem(models.Model):
    """Database model for paylist"""

    festival_id = models.ForeignKey(FestivalItem, on_delete=models.CASCADE)
    artists = models.CharField(max_length=1000)
    playlist_id = models.CharField(max_length=255)

    def __str__(self):
        """Return the model as a atring"""
        return self.playlist_id
