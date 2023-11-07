from rest_framework import viewsets, generics, mixins
import django_filters.rest_framework
from .serializers import CigarSerializer, BrandSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Cigar, Brand
from rest_framework.filters import SearchFilter, OrderingFilter
# Create your views here.
class CigarViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated,]
    queryset = Cigar.objects.all()
    serializer_class = CigarSerializer
    filterset_fields = ['id','name','strength']
    search_fields = ['name']
    filter_backends = (SearchFilter, OrderingFilter)
    
class BrandViewset(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer