from rest_framework import serializers

from festival_radio_api import models


class FestivalItemSerializer(serializers.ModelSerializer):
    """Serializes festival item"""

    class Meta:
        model = models.FestivalItem
        fields = ("id", "name", "logo_url")
