from urllib import response
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *

# Create your views here.
class productsList(generics.ListAPIView):
  queryset=product.objects.all()
  serializer_class = productsListSerializer
  
  # def get_queryset(self):
  #   return product.objects.all()

class productCreate(generics.CreateAPIView):
  queryset=product.objects.all()
  serializer_class = productsListSerializer
  
  def create(self, request):
    response = super().create(request)  
    return JsonResponse({
            'status': 200,
            'message': 'Created',
            'data': response.data
        })

class backetCreate(generics.CreateAPIView):
  queryset = backet.objects.all()
  serializer_class = backetSerializer
    
  def create(self, request):
    response = super().create(request)  
    return JsonResponse({
            'status': 200,
            'message': 'Created',
            'data': response.data
        })