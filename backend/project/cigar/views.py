from rest_framework import viewsets
from .serializers import CigarSerializer, BrandSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Cigar, Brand
# Create your views here.
class CigarViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated,]
    queryset = Cigar.objects.all().order_by('name')
    serializer_class = CigarSerializer

class BrandViewset(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer