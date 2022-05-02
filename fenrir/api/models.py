from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class product(models.Model):
    name = models.TextField(max_length=150)
    description = models.TextField(max_length=1024, default='SOME STRING')
    price = models.FloatField()
    picture = models.TextField()

    def __str__(self):
        return self.name
    
class backet(models.Model):
    user = models.ForeignKey(User, on_delete=models.RESTRICT)
    product = models.ForeignKey(product, on_delete=models.RESTRICT)
    quantity = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "Backet of " + str(self.user) + " by " + str(self.date)