from django.db import models
from django.contrib.auth.models import User


class User(models.Model):
    id = models.IntegerField(max_length=10,primary_key=True)
    nome = models.CharField(max_length=150, blank=True, null=True)
    sobrenome = models.TextField(max_length=500)
    senha = models.TextField(max_length=500, blank = True)
    senha = models.TextField(max_length=500, blank = True)
