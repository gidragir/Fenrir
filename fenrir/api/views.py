from urllib import response
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import generics
from main.models import *
from .serializers import *

# Create your views here.
class productsList(generics.ListAPIView):
  serializer_class = productsListSerializer
  
  def get_queryset(self):
    return product.objects.all()

class productMoveCreate(generics.CreateAPIView):
  queryset = productMove.objects.all()
  serializer_class = productMoveSerializer
    
  def create(self, request):
    response = super().create(request)  
    return JsonResponse({
            'status': 200,
            'message': 'Created',
            'data': response.data
        })