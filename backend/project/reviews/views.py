from rest_framework import viewsets, generics, mixins
import django_filters.rest_framework
from .serializers import ReviewSerializer, ReviewSerializerList
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Review
from rest_framework.filters import SearchFilter, OrderingFilter

# Create your views here.
class ReviewViewset(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ['review']

class ReviewViewset(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Review.objects.all()
    serializer_class = ReviewSerializerList
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ['review']