from django.db import models
from django.conf import settings
# Create your models here.
class Brand(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Cigar(models.Model):
    name = models.CharField(max_length=50)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    rating_avg = models.IntegerField()
    time_avg = models.IntegerField()
    origin = models.CharField(max_length=50)
    wrapper = models.CharField(max_length=50)
    filler = models.CharField(max_length=50)
    binder = models.CharField(max_length=50)
    strength = models.CharField(max_length=50)
    wrapper_color = models.CharField(max_length=50)
    length = models.IntegerField()
    gauge = models.IntegerField()
    shape = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    def __str__(self):
        return self.name