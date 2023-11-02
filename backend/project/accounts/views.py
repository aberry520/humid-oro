from rest_framework import viewsets
from .models import Profile
from .serializers import ProfileSerializer, UserDetailsSerializer
from django.contrib.auth.models import User
from dj_rest_auth.views import UserDetailsView

# Create your views here.
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all().order_by('id')
    users = User.objects.all().select_related('user_id')
    serializer_class = ProfileSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserDetailsSerializer
    