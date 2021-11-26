from django.db import models

# Create your models here.
class Alumno(models.Model):
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    email = models.EmailField(unique=True) #Este Valor no se puede repetir
    password = models.CharField(max_length=100)
    nivel = models.IntegerField()
    numero_de_identidad =models.IntegerField(unique=True) #Este valor no se puede repetir
    
    
    

    class Meta:
        verbose_name = "alumno"  #nombre singular
        verbose_name_plural = "alumnos" #nombre en singular
    def __str__(self) -> str:
        return(f'{self.nombres} {self.apellidos} - Nivel:{self.nivel}')
