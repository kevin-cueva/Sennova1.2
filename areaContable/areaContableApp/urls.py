from django.urls import path
from django.urls.resolvers import URLPattern
from .views import error, home, index, registro

urlpatterns = [

    path('', index, name='Login'),
    path('home/', home, name='Home'),
    path('registro/', registro, name='Registro'),
    path('error/', error, name='Error'),

]