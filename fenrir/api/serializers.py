from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from main.models import *


class productsListSerializer(serializers.ModelSerializer):
  name = serializers.ReadOnlyField()
  description = serializers.ReadOnlyField()
  price = serializers.ReadOnlyField()
  picture = serializers.ReadOnlyField()
  
  class Meta:
    model = product
    fields = ['id','name','description','price','picture']
    
class productMoveSerializer(serializers.ModelSerializer):
  date = serializers.ReadOnlyField()
  
  class Meta:
    model = productMove
    fields = ['id', 'product', 'user', 'quantity', 'date']
