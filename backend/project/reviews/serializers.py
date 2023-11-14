from .models import Review
from rest_framework import serializers
from project.cigar.models import Cigar
from project.cigar.serializers import CigarSerializer2
class ReviewSerializer(serializers.ModelSerializer):
    # cigar = CigarSerializer2()
    class Meta:
        model = Review
        fields = '__all__'

class ReviewSerializerList(serializers.ModelSerializer):
    cigar = CigarSerializer2()
    class Meta:
        model = Review
        fields = '__all__'
