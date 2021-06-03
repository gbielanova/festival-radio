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
