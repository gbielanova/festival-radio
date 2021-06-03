from rest_framework import viewsets

from festival_radio_api import serializers
from festival_radio_api import models


class FestivalItemViewSet(viewsets.ModelViewSet):
    """Handle creating, reading and updating festival items"""

    serializer_class = serializers.FestivalItemSerializer
    queryset = models.FestivalItem.objects.all()


class ArtistItemViewSet(viewsets.ModelViewSet):
    """Handle creating, reading and updating festival items"""

    serializer_class = serializers.ArtistItemSerializer
    queryset = models.ArtistItem.objects.all()


class FerstivalArtistsItemViewSet(viewsets.ModelViewSet):
    """Handle creating, reading and updating festival items"""

    serializer_class = serializers.FerstivalArtistsItemSerializer
    queryset = models.FerstivalArtistsItem.objects.all()


class PlaylistItemViewSet(viewsets.ModelViewSet):
    """Handle creating, reading and updating playlist items"""

    serializer_class = serializers.PlaylistItemSerializer
    queryset = models.PlaylistItem.objects.all()

    def perform_create(self, serializer):
        """Set playlist_id to generated playlist"""
        serializer.save(playlist_id=1)
