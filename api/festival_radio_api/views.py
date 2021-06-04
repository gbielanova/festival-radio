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
        artist_ids = [int(id) for id in self.request.data["artists"].split(",")]
        artists = []

        for artist_id in artist_ids:
            artist_name = models.ArtistItem.objects.filter(id=artist_id).values_list(
                "name", flat=True
            )
            if artist_name.count() > 0:
                artists.append(artist_name[0])

        id = spotify.generate_playlist(
            self.request.data["spotify_token"], self.request.data["name"], artists
        )

        serializer.save(playlist_id=id)
