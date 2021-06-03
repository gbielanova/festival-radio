from rest_framework import serializers

from festival_radio_api import models


class FestivalItemSerializer(serializers.ModelSerializer):
    """Serializes festival item"""

    class Meta:
        model = models.FestivalItem
        fields = ("id", "name", "logo_url")


class ArtistItemSerializer(serializers.ModelSerializer):
    """Serializes artist item"""

    class Meta:
        model = models.ArtistItem
        fields = ("id", "name")


class FerstivalArtistsItemSerializer(serializers.ModelSerializer):
    """Serializes festival artists item"""

    class Meta:
        model = models.FerstivalArtistsItem
        fields = ("id", "festival_id", "artist_id")


class PlaylistItemSerializer(serializers.ModelSerializer):
    """Serializes playlist item"""

    class Meta:
        model = models.PlaylistItem
        fields = ("id", "festival_id", "artists", "playlist_id")
        extra_kwargs = {"playlist_id": {"read_only": True}}
