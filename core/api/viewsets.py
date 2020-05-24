from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User, UserManager
from core.api.serializers import users_serializer
from rest_framework.response import Response
from rest_framework.decorators import action
from django.core import serializers
import json



class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = users_serializer
    authentication_classes = [TokenAuthentication,]
    #permission_classes = [IsAuthenticated]



    def list(self, request):
        print("front chegou aqui")
        queryset = User.objects.all()
        serializer = users_serializer(queryset, many=True)
        return Response(serializer.data)


    def create(self, request):
        user = User.objects.create(
            username = request.data['username'],
            email = request.data['email'],
            last_name = request.data['last_name']
        )
        user.set_password(request.data['password'])
        user.save()
        serializer = users_serializer(user)
        return Response({"user_created":serializer.data})
    
    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = users_serializer(user)
        return Response(serializer.data)
    
    def update(self, request, pk=None):
        try:
            user = User.objects.get(pk=pk)
        except:
            return Response({"user":'user_not_found'})
        user.username = request.data['username']
        user.email = request.data['email']
        user.set_password(request.data['password'])
        user.save()
        serializer = users_serializer(user)
        return Response({"user_updated":serializer.data})

    
    def partial_update(self,request, *args, **kwargs):
        pass


        

