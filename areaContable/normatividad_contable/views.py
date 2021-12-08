from django.shortcuts import render, HttpResponse
import sqlite3
from normatividad_contable.models import Pregunta, Respuesta
from random import sample #Para generar datos aleatorios

# Create your views here.
def normatividadContable(request):
    return render(request, 'normatividadContable/normatividad_contable.html')

def normatividadContable_Evalua(request): #Examen del tema constitucion de empresas
    CATIDAD_DE_PREGUNTAS = 5 #Cnatidad de preguntas que se van a mostrar
    con = sqlite3.connect('db.sqlite3') #nombre de la base de datos y conexion
    cur = con.cursor()  #cursor
    preguntas = Pregunta.objects.all() #Trae la tabla Pregunta
    respuestas = Respuesta.objects.all()

    #Sentencia que dice cuantas preguntas hay en total
    sentecia = f'''SELECT COUNT(*) 
                   FROM normatividad_contable_pregunta ''' 
    cur.execute(sentecia) #Ejecuta la sentencia
    con.commit()
    size_of_question = int(cur.fetchone()[0]) #Almacena la cantidad de preguntas
    print(f'Cuantas preguntas hay: {size_of_question}\n')


    #Preguntas aleatorias del banco de preguntas
    preguntas_aleatorias = (sample([x for x in preguntas],CATIDAD_DE_PREGUNTAS))
    print(f'Preguntas aleatorias: {preguntas_aleatorias}\n')
    datos_evalua = { #Los datos que seran enviados al frontend
        'preguntas': preguntas_aleatorias, 
        'respuestas':respuestas,
    }


    lista_id = [] #almacena los id de las pegungtas

    #Recorre los ids de las preguntas aleatorias
    for id in preguntas_aleatorias:
        lista_id.append(id.id)
    
    request.session["normatividad_ids"] = lista_id #Envia los ids de las preguntas de normatividad contable   


    return render(request,'normatividadContable/normatividad_evalua.html', datos_evalua)

def normatividadContable_Resultados(request):
    estudiante = request.session.get('estudiante')
    cedula = estudiante['numero'] #cedula del estudiante
    
    con = sqlite3.connect('db.sqlite3') #nombre de la base de datos y conexion
    cur = con.cursor()  #cursor

    #Busca el nivel actual
    sentencia = f'''SELECT nivel 
                    FROM areaContableApp_alumno 
                    WHERE numero_de_identidad="{cedula}"'''
    cur.execute(sentencia)
    con.commit()
    nivel = cur.fetchone()[0]

    if request.method == 'POST': #Si llego el formulario
        respuetas_correstas = [] #variable que almacena las respuestas correctas
        resultado_examen = 0
        ids = request.session.get("normatividad_ids") #Trae los ids de las preguntas
        for id in ids: # recorre los ids
            res = request.POST.get(f'{id}') #Trae la respuesta elegida
            print(res)
        
            #Busca si la pregunta es correcta o no en la lista
            sentencia = f'''SELECT right 
                            FROM normatividad_contable_respuesta 
                            WHERE contenido="{res}"'''
            cur.execute(sentencia)
            con.commit()

            respuesta_elegidas = cur.fetchone()[0] #Extrae si es correcta o no
            if respuesta_elegidas:
                resultado_examen += 20
            #respuetas_correstas.append(respuesta_elegidas)# guardalo en la lista
        #print(respuetas_correstas)

        #Si es mayor de 40 pasa el examen
        if resultado_examen >= 60:
            if nivel == 1:
                #Si el nivel es el 0 subelo a 1
                sentencia = f'''UPDATE areaContableApp_alumno
                                SET nivel="{int(2)}"
                                WHERE numero_de_identidad="{cedula}"'''
                cur.execute(sentencia)
                con.commit()

                
            return render(request, 'qcorrecto.html') #Paso y cambia el nivel
        else: 
            return render(request, 'qfallo.html') #Paso pero no cambia el nivel
    
    
    return HttpResponse('hola') 
            
        
        


