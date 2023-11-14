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
    def create(self, validated_data):
        brand_data = validated_data.pop('brand')
        brand = Brand.objects.create(**brand_data)
        validated_data['brand'] = brand
        cigar = Cigar.objects.create(**validated_data)
        return cigar
    

class CigarSerializerPost(serializers.ModelSerializer):

    brand = serializers.PrimaryKeyRelatedField(queryset=Brand.objects.all())
    class Meta:
        model = Cigar
        fields = "__all__"
    
class CigarSerializer2(serializers.ModelSerializer):
    brand = BrandSerializer()
    class Meta:
        model = Cigar
        fields = "__all__"