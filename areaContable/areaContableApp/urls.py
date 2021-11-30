from django.urls import path
from django.urls.resolvers import URLPattern
from .views import error, home, index, registro, logout

urlpatterns = [

    path('', index, name='Login'),
    path('logout/', logout, name='Logout'),
    path('home/', home, name='Home'),
    path('registro/', registro, name='Registro'),
    path('error/', error, name='Error'),

]