from django.urls import path, include

from rest_framework.routers import DefaultRouter

from festival_radio_api import views


router = DefaultRouter()
router.register("festival", views.FestivalItemViewSet)
router.register("artist", views.ArtistItemViewSet)
router.register("festival-artists", views.FerstivalArtistsItemViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
