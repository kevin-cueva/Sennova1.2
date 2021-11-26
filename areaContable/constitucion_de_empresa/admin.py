from django.contrib import admin
from django.db import models
from .models import Pregunta, Respuesta

# Register your models here.
# super user :kevin 1236789 

class Respuesta_Inline(admin.TabularInline): #Para mostrat los datos de llave foranea
    model = Respuesta
    max_num = 3 #Maximo te items para agregar
    min_num = 3 #Minimo de items para agregar

class PreguntaAdmin(admin.ModelAdmin):
    inlines = [
        Respuesta_Inline, #trae el tabulador inline
    ]



class RespuestaAdmin(admin.ModelAdmin):
    readline_field = ["created", "update"]  # Solo lectura


#REGISTRAR
admin.site.register(Pregunta, PreguntaAdmin)
admin.site.register(Respuesta, RespuestaAdmin)