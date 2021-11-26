from django.urls import path
from django.urls.resolvers import URLPattern
from .views import error, home, index, registro, login

urlpatterns = [

    path('', index, name='Index'),
    path('home/', home, name='Home'),
    path('registro/', registro, name='Registro'),
    path('login/', login, name='Login'),
    path('error/', error, name='Error'),

]