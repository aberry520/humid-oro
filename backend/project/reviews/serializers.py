from .models import Review
from rest_framework import serializers
from project.cigar.models import Cigar
from project.cigar.serializers import CigarSerializer
class ReviewSerializer(serializers.ModelSerializer):
    cigar = CigarSerializer()
    class Meta:
        model = Review
        fields = '__all__'

