from rest_framework import viewsets, generics
from .models import Profile
from .serializers import ProfileSerializer, UserDetailsSerializer
from django.contrib.auth.models import User
from dj_rest_auth.views import UserDetailsView
from project.reviews import serializers as reviewSerializers
from project.reviews.models import Review
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all().order_by('id')
    users = User.objects.all().select_related('user_id')
    serializer_class = ProfileSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserDetailsSerializer
    

class UserReviewList(viewsets.ModelViewSet):
    serializer_class = reviewSerializers.ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Review.objects.filter(user=user)
    
class UserReviewList2(viewsets.ModelViewSet):
    serializer_class = reviewSerializers.ReviewSerializerList
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Review.objects.filter(user=user)