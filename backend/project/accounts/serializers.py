from rest_framework import serializers
from .models import Profile
from django.contrib.auth.models import User
from dj_rest_auth.serializers import UserDetailsSerializer


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"



class UserDetailsSerializer(UserDetailsSerializer):
    profile = ProfileSerializer()
    class Meta(UserDetailsSerializer.Meta):
        model = User
        fields = ('id', 'username', 'email', 'is_staff','groups', 'profile')