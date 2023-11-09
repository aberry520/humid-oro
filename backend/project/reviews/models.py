from django.db import models
from project.cigar.models import Cigar
from django.contrib.auth.models import User

# Create your models here.
class Review(models.Model):
    cigar = models.ForeignKey(Cigar, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    review = models.CharField(max_length=300)
    time = models.IntegerField()
    rating = models.IntegerField()
    def __str__(self):
        return self.user.username