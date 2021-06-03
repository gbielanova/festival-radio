from django.urls import path, include

from rest_framework.routers import DefaultRouter

from festival_radio_api import views


router = DefaultRouter()
router.register("festival", views.FestivalItemViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
