from .models import Cigar, Brand
from rest_framework import serializers

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"

class CigarSerializer(serializers.ModelSerializer):
    brand = BrandSerializer()
    class Meta:
        model = Cigar
        fields = "__all__"