from . import views
from django.urls import path

urlpatterns = [
    path('productsList/', views.productsList.as_view()),
    path('productCreate', views.productCreate.as_view()),
    path('productMoveCreate', views.productMoveCreate.as_view()),
]
