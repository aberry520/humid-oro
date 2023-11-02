from .models import Cigar, Brand
from rest_framework import serializers
class CigarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cigar
        fields = ['name', 'brand', 'rating_avg', 'time_avg', 'origin', 'wrapper', 'filler', 'binder','strength','wrapper_color','length','gauge','shape','description']

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['name']