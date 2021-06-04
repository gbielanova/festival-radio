from rest_framework import viewsets

from festival_radio_api import serializers
from festival_radio_api import models

from festival_radio_api import spotify


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
        token = "BQD2xTqof9ekNesZCcNjE5l0516uBjGr65F2l6rG2KXLRZEOINYpeY0KTVJe7Mo7A05qU_29eYtcc2p4K83eDSZsdj2Q_aK9tTjLJgbFzvQ9nk1oXj3mdy_TdbuUiyomeD3fX43dmw9HOyzlFPZNN2J9Yr7N5j-prlQlVMZM0VIeOxeUpU6evhkPVRX31Ib91dt69u9SOHyeXEcD4mhhQa9nwyLbyhuw8omiZru4CAfWR0jrkgMTHqW9AKt7EAcn9DCLqE1KGKsRtVGxnBKdrw"

        id = spotify.generate_playlist(
            token, "playlist from api", "Offspring", "Nirvana", "TNMK"
        )

        serializer.save(playlist_id=id)
