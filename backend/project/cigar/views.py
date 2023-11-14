from rest_framework import viewsets, generics, mixins
import django_filters.rest_framework
from .serializers import CigarSerializer, BrandSerializer, CigarSerializerPost
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Cigar, Brand
from rest_framework.filters import SearchFilter, OrderingFilter
# Create your views here.
class CigarViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Cigar.objects.all()
    serializer_class = CigarSerializer
    filterset_fields = ['id','name','strength']
    search_fields = ['name']
    filter_backends = (SearchFilter, OrderingFilter)

class AddCigarViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Cigar.objects.all()
    serializer_class = CigarSerializerPost
    # filterset_fields = ['id','name','strength']
    # search_fields = ['name']
    # filter_backends = (SearchFilter, OrderingFilter)
    
class BrandViewset(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ['name']