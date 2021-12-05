from sqlite3.dbapi2 import converters
from django.http import request
from django.urls import reverse
from django.shortcuts import redirect, render, HttpResponse
import sqlite3

# Create your views here.


def registro(request):
    con = sqlite3.connect('db.sqlite3') #nombre de la base de datos
    cur = con.cursor()
    if request.method == 'POST':
        print('paso')
        nombre = request.POST.get('nombre')
        apellido = request.POST.get('apl')
        email = request.POST.get('email')
        password = request.POST.get('contra1')
        password_repith = request.POST.get('contra2')
        documeto_identidad = request.POST.get('documento')
        sentencia = f'''SELECT email FROM areaContableApp_alumno WHERE email="{email}"'''
        cur.execute(sentencia)
        dato_email = cur.fetchone()
        print(type(dato_email))
        con.commit()    
        print(dato_email)
        
        if  dato_email == None: #el imail no se encontro pasa...
            if password == password_repith:
                
                sentencia = f'''INSERT INTO areaContableApp_alumno(nombres, apellidos, email, numero_de_identidad, password, nivel )
                                VALUES("{nombre}", "{apellido}", "{email}", "{documeto_identidad}", "{password}", "{0}")'''

                cur.execute(sentencia)
                con.commit()
                a = cur.rowcount
                print(a)
                return(redirect('Login'))    
            else:
                error = {'error':'clave'}
                request.session['error'] = error #mandando el diccionario pasar
                return(redirect(f'Error')) #Cuando el email ya existe
        else:
            error = {'error':'email'}
            request.session['error'] = error #mandando el diccionario pasar
            return(redirect(f'Error')) #Cuando el email ya existe

    return(render(request, 'form_register.html'))

def index(request): #vista para ingresar a la plataforma
    """
    Nota: Esta vista es la encargada de validar en login del usuario y darle entrada al home

    """
    con = sqlite3.connect('db.sqlite3') #nombre de la base de datos y conexion
    cur = con.cursor()  #cursor
    if request.method == 'POST':    # si se envia el formulario
        documento_identidad = request.POST.get('documento') #Captura el numero documento
        password = request.POST.get('contra1')  #Captura la clavr
        sentencia = f'''SELECT *          
                        FROM areaContableApp_alumno 
                        WHERE numero_de_identidad="{documento_identidad}"''' #Busca en la tabla el numero 

        cur.execute(sentencia) #ejecuta la sentencia
        con.commit() #confirma la sentencia
        datos = cur.fetchone() #trae el dato como una tupla si existe

        if datos != None: #Si el dato existe
            dato_numero_de_identidad = str(datos[6]) #la posicion del numero de identidad hasla string
       
            if documento_identidad == dato_numero_de_identidad: #Si los datos son correctos de C.C entonces:
                dato_password = str(datos[5]) #posicion de almacenamiento de la clave
               
                if dato_password == password: #Si lasa contraseñas coinciden

                    nombre = f'{datos[1]} {datos[2]}' #Envia el nombre
                    
                    nivel = datos[4] #Envia el nivel

                    numero = documento_identidad #numero de identidad
                    print(f'Este es el numero : {numero}')

                    estudiante = { #variable con los datos ya validados
                        'nombre': nombre,
                        'nivel': nivel,
                        'numero': numero
                    }
                    request.session['estudiante'] = estudiante #Variable de dicionario disponible
                    print("ESTOY ACA\n")
                    return(redirect(f'Home')) #Paso

                else: #Si la contraseña es incorrecta
                    request.session['error'] = {'error':'login'}
                    return(redirect('Error'))

        else: #Si no existe el dato de usuario 
            request.session['error'] = {'error':'login'}
            return(redirect('Error'))
        
    
    return(render(request, 'index.html'))

def logout(request):
    """Vista ebcargada de hacer logout del usuario"""
    estudiante = { #variable con los datos ya validados
        'nombre': False,
        'nivel': False,
        'numero': False
                    }
    request.session['estudiante'] = estudiante
    return(redirect(f'Home')) #Paso

def home(request):
    estudiante_post = request.session.get('estudiante')
    estudiante_cedula = estudiante_post['numero'] #Numero de cedula para buscar los datos
    print(estudiante_cedula)
    
    if estudiante_cedula == False:
        return(redirect(f'Login')) #Paso

    con = sqlite3.connect('db.sqlite3') #nombre de la base de datos y conexion
    cur = con.cursor()  #cursor

    #Busca el nombre y el nivel actual
    sentencia = f'''SELECT * 
                    FROM areaContableApp_alumno 
                    WHERE numero_de_identidad="{estudiante_cedula}"'''
    cur.execute(sentencia)
    con.commit()
    datos = cur.fetchone() #datos del estudiante

    nombre = f'{datos[1]} {datos[2]}' #Envia el nombre
                    
    nivel = datos[4] #Envia el nivel
    
    estudiante = { #variable con los datos ya validados
                        'nombre': nombre.upper(),
                        'nivel': nivel,
                        
                 }
    return(render(request, 'home.html', estudiante))

def error(request):
    error = request.session.get('error') #tomando diccionario de error
    return(render(request, 'error.html', error))


