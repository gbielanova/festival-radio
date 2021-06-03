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
