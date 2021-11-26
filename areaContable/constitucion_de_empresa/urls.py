from django.urls import path
from django.urls.resolvers import URLPattern
from .views import constitucionEmpresas, constitucionEmpresas_Evalua, constitucionEmpresas_Resultados

urlpatterns = [

    path('constitucion/aprende', constitucionEmpresas, name='Cons_Aprende'),
    path('constitucion/evalua', constitucionEmpresas_Evalua, name='Cons_Evalua'),
    path('constitucion/resultado', constitucionEmpresas_Resultados, name='Cons_Resultado'),


]