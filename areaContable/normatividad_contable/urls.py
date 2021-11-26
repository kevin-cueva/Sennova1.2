from django.urls import path
from django.urls.resolvers import URLPattern
from .views import normatividadContable, normatividadContable_Resultados, normatividadContable_Evalua

urlpatterns = [

    path('normatividad/aprende', normatividadContable, name='Norm_Aprende'),
    path('normatividad/evalua', normatividadContable_Evalua, name='Norm_Evalua'),
    path('normatividad/resultado', normatividadContable_Resultados, name='Norm_Resultado'),


]