from django.db import models
from django.conf import settings
# Create your models here.
class Brand(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Cigar(models.Model):
    name = models.CharField()
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    rating_avg = models.FloatField(null=True)
    time_avg = models.IntegerField(null=True)
    origin = models.CharField(null=True)
    wrapper = models.CharField(null=True)
    filler = models.CharField(null=True)
    binder = models.CharField(null=True)
    strength = models.CharField(null=True)
    color = models.CharField(null=True)
    length = models.FloatField(null=True)
    gauge = models.IntegerField(null=True)
    shape = models.CharField(null=True)
    description = models.CharField(max_length=300, null=True)
    image = models.URLField(null=True, default="https://media.istockphoto.com/id/173545983/photo/cigar-with-blank-label.jpg?s=170667a&w=0&k=20&c=ELrSKomP9GR5EsRaDAKgw-j4bwZ1edtz1if1YG5q-JM=")
    thumbnail = models.URLField(null=True, default="https://media.istockphoto.com/id/173545983/photo/cigar-with-blank-label.jpg?s=170667a&w=0&k=20&c=ELrSKomP9GR5EsRaDAKgw-j4bwZ1edtz1if1YG5q-JM=")
    def __str__(self):
        return self.name