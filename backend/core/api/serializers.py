from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User


class users_serializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','last_name','email']
