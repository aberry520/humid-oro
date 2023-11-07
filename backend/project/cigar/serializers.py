from .models import Cigar, Brand
from rest_framework import serializers
class CigarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cigar
        fields = "__all__"

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['name']