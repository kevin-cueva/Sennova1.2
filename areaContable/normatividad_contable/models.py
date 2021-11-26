from django.db import models
from django.contrib.auth.models import User #libreria para crear las tablas relacionales
from django.utils.timezone import now #libreria de fecha
# Create your models here.

class Pregunta(models.Model):
    cuestion = models.TextField(max_length=500, verbose_name='Pregunta')
    created = models.DateTimeField(default=now, editable=False, blank=False) #creacion
    updated = models.DateTimeField(default=now, editable=False, blank=False) #Actualizacion
    class Meta:
        verbose_name = "pregunta"
        verbose_name_plural = "preguntas"

  
    
    def __str__(self) -> str:
        return self.cuestion


class Respuesta(models.Model):
    contenido = models.TextField(max_length=500)
    pregunta = models.ForeignKey(Pregunta, verbose_name='questions', on_delete=models.CASCADE) #Se eliminan las junto con su pregunta """
    right = models.BooleanField(verbose_name='Esta es la respuesta correcta?', default=False) # tipo de respuesta
    created = models.DateTimeField(default=now, editable=False, blank=False) #creacion
    updated = models.DateTimeField(default=now, editable=False, blank=False) #Actualizacion

    class Meta:
        verbose_name = "respuesta"
        verbose_name_plural = "respuestas"
    
    def __str__(self) -> str:
        return (f'{self.contenido} -> {self.pregunta} -> {self.right}')
