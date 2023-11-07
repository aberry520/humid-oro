from django.db import models
from django.conf import settings
# Create your models here.
class Brand(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Cigar(models.Model):
    name = models.CharField(max_length=50)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, null=True)
    rating_avg = models.FloatField(null=True)
    time_avg = models.IntegerField(null=True)
    origin = models.CharField(max_length=50,null=True)
    wrapper = models.CharField(max_length=50,null=True)
    filler = models.CharField(max_length=50,null=True)
    binder = models.CharField(max_length=50,null=True)
    strength = models.CharField(max_length=50,null=True)
    color = models.CharField(max_length=50,null=True)
    length = models.FloatField(null=True)
    gauge = models.IntegerField(null=True)
    shape = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=True)
    image = models.URLField(null=True)
    thumbnail = models.URLField(null=True)
    def __str__(self):
        return self.name