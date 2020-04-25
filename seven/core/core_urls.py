from django.urls import include, path
from rest_framework import routers
from core.api.viewsets import UserViewSet
from rest_framework.authtoken.views import obtain_auth_token


router = routers.DefaultRouter()
router.register(r'', UserViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('api-token-auth',obtain_auth_token)
]
