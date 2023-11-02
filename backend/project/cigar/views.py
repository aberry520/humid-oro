from rest_framework import viewsets
from .serializers import CigarSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Cigar
# Create your views here.
class CigarViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated,]
    queryset = Cigar.objects.all().order_by('name')
    serializer_class = CigarSerializer