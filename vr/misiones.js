AFRAME.registerComponent('misiones', {


    init: function () {

      let estado = 0;
      let Stat = 0;
      
        /*    VARIABLES QUE LLAMAN AL SONIDO */

      var iconState = document.getElementById('icon-state');
      var iconState2 = document.getElementById('icon-state2');
      var botonReset = document.getElementById('boton-reset');
      var elem = document.getElementById('cameraRig');
      var bienvenida = document.getElementById('sound1');
      var introduccion = document.getElementById('sound2');
      var misionbanco = document.getElementById('sound3');
      var misioncumplidabanco = document.getElementById('sound4');
      var misioncumplidabanco2 = document.getElementById('sound5');
      var recordatorioBanco = document.getElementById('sound6');
      var impresoraActa = document.getElementById('sound7');
      var impresoraCompletado = document.getElementById('sound8');
      var impresoraNoMision = document.getElementById('sound9');
      var actaPosesion = document.getElementById('sound10');
      var actaRadicada = document.getElementById('sound11');
      var actaNoImpresa = document.getElementById('sound12');
      var cComercioNoMision = document.getElementById('sound13');
      var entregaActa = document.getElementById('sound14');
      var recordatorioActa = document.getElementById('sound15');
      var bancariaPosesion = document.getElementById('sound16');
      var bancoNomision = document.getElementById('sound17');
      var misionDian = document.getElementById('sound18');
      var recordatorioDian = document.getElementById('sound19');
      var facturaPos = document.getElementById('sound20');
      var dianNoMision = document.getElementById('sound21');
      var misionComercio = document.getElementById('sound22');
      var dianPosec = document.getElementById('sound23');
      var computadoraNombreDIgital = document.getElementById('sound24');
      var computadoraNombreImpreso = document.getElementById('sound25');
      var computadoraNombreCreado = document.getElementById('sound26');
      var computadoraLogoDigital = document.getElementById('sound27');
      var computadoraLogoImpreso = document.getElementById('sound28');
      var computadoraLogoCreado = document.getElementById('sound29');
      var computadoraNoMision = document.getElementById('sound30');
      var impresoraNombreImpreso = document.getElementById('sound31');
      var impresoraNombreCreado = document.getElementById('sound32');
      var impresoraNombreDigital = document.getElementById('sound33');
      var impresoraLogoImpreso = document.getElementById('sound34');
      var impresoraLogoCreado = document.getElementById('sound35');
      var impresoraLogoDigital = document.getElementById('sound36');
      var jefeMision1Completa = document.getElementById('sound37');
      var jefeMision2Completa = document.getElementById('sound38');
      var jefeMision3Completa = document.getElementById('sound39');
      var jefeMision4Completa = document.getElementById('sound40');
      var jefeNoEntrega = document.getElementById('sound41');
      var recordatorioMision1 = document.getElementById('sound42');
      var recordatorioMision2 = document.getElementById('sound43');
      var recordatorioMision3 = document.getElementById('sound44');
      var recordatorioMision4 = document.getElementById('sound45');
      var respuestaCorrectaMision1 = document.getElementById('sound46');
      var respuestaIncorrectaMision1Opcion1 = document.getElementById('sound47');
      var respuestaIncorrectaMision1Opcion2 = document.getElementById('sound48');
      var requerimientoMision1 = document.getElementById('sound49');
      var requerimientoMision2 = document.getElementById('sound50');
      var requerimientoMision3 = document.getElementById('sound51');
      var requerimientoMision4 = document.getElementById('sound52');
      var respuestaIncorrectaMision4 = document.getElementById('sound53');
      var respuestaCorrectaMision4 = document.getElementById('sound54');
      var computerSound = document.getElementById('sound55');
      var impresoraSound = document.getElementById('sound56');
      var cheerSound = document.getElementById('sound57');




      var iniciar = document.getElementById('iniciar');

      var factura = document.getElementById('factura-dian');
      var cbancario = document.getElementById('certificado-banco');
      var radicado = document.getElementById('radicado');
      var ccomercio = document.getElementById('ccomercio');
      var logoEmpresa = document.getElementById('logo');
      var logoEmpresaDigital = document.getElementById('logo-digital');
      var logoEmpresaImpreso = document.getElementById('logo-impreso');
      var nombreEmpresa = document.getElementById('nombre');
      var nombreEmpresaDigital = document.getElementById('nombre-digital');
      var nombreEmpresaImpreso = document.getElementById('nombre-impreso');
      var ActividadEconomica = document.getElementById('banner-1');
      var ActividadEconomica1 = document.getElementById('b-1');
      var ActividadEconomica2 = document.getElementById('b-2');
      var ActividadEconomica3 = document.getElementById('b-3');
      var reporteEconomica = document.getElementById('reporte-economica');
      var ClasificacionEmpresa = document.getElementById('banner-2');
      var ClasificacionEmpresa1 = document.getElementById('a-1');
      var ClasificacionEmpresa2 = document.getElementById('a-2');
      var ClasificacionEmpresa3 = document.getElementById('a-3');
      var reporteClasificacion = document.getElementById('reporte-clasificacion');

      var reporteEconomicaMesa =document.getElementById('reporte-economica-R');

      var nombreMesa = document.getElementById('nombre-R');
      var nombreImpresaMesa  = document.getElementById('nombre-impreso-R');

      var logoMesa  = document.getElementById('logo-R');
      var logoImpresaMesa  = document.getElementById('logo-impreso-R');

      var ClasificacionMesa  = document.getElementById('reporte-clasificacion-R');

      var ccomercioMesa  = document.getElementById('ccomercio-R');
      var radicadoMesa  = document.getElementById('radicado-R');

      var certificadoBancoMesa  = document.getElementById('certificado-banco-R');

      var facturaDianMesa  = document.getElementById('factura-dian-R');






     /*  FUNCIONES DE ANIMACION */


     let cajaComputador = document.getElementById('box-computador');
     let cajaImpresora = document.getElementById('box-impresora');

     function cajaActivaComputador() {
      
      cajaComputador.setAttribute('animation__scale', `property: scale; to: 0.193 0.193 0.193; dur: 500`)
      cajaComputador.setAttribute('animation__rotation', `property: rotation;from: 0 0 0; to: 0 0 360; dur: 500;loop:true;easing:linear`)
      
      
        
      
      setTimeout(function cajaFinAnimacionComputador2() {
        cajaComputador.setAttribute('animation__scale', `property: scale; to: 0 0 0; dur: 500`)
        
      },'4000')


      setTimeout(function cajaFinAnimacionComputador3() {
        cajaComputador.removeAttribute('animation__scale')
        
        cajaComputador.removeAttribute('animation__rotation')
        
         
      },'7000')
      
     }


     function cajaActivaImpresora() {
      
      cajaImpresora.setAttribute('animation__scale2', `property: scale; to: 0.193 0.193 0.193; dur: 500`)
      cajaImpresora.setAttribute('animation__rotation2', `property: rotation;from: 0 0 0; to: 0 0 360; dur: 500;loop:true;easing:linear`)
      
      
        
      
      setTimeout(function cajaFinAnimacionImpresora2() {
        cajaImpresora.setAttribute('animation__scale2', `property: scale; to: 0 0 0; dur: 500`)
        
      },'4000')


      setTimeout(function cajaFinAnimacionImpresora3() {
        cajaImpresora.removeAttribute('animation__scale2')
        
        cajaImpresora.removeAttribute('animation__rotation2')
        
         
      },'7000')
      
     }



      /* FUNCIONES DE LOS REPORTES EN LA MESA */
      
      function reporteActividadEconomicaMesa() {
      
        reporteEconomicaMesa.setAttribute('visible',true)
      }

      function reporteNombreMesa() {

        nombreMesa.setAttribute('visible',true)
        nombreImpresaMesa.setAttribute('visible',true)
      }

      function reporteLogo() {

        logoMesa.setAttribute('visible',true)
        logoImpresaMesa.setAttribute('visible',true)
      }

      function reporteClasificacionMesa() {

        ClasificacionMesa.setAttribute('visible',true)
      }

      function reporteComercioMesa() {
        
        ccomercioMesa.setAttribute('visible',true)
        radicadoMesa.setAttribute('visible',true)
      }

      function reporteBancoMesa() {

        certificadoBancoMesa.setAttribute('visible',true)
      }

      function reporteFacturaDianMesa() {

        facturaDianMesa.setAttribute('visible',true)
      }

      
        /* FUNCIONES DE SONIDO */

        function playsonidobienvenida() {
          bienvenida.components.sound.playSound();
          
        }

        function playsonidointroduccion() {
          introduccion.components.sound.playSound();
          
        }

        function playMisionActividad() {
          requerimientoMision1.components.sound.playSound();
          
        }

        function playMisionNombre() {
          requerimientoMision2.components.sound.playSound();
          
        }

        function playMisionLogo() {
          requerimientoMision3.components.sound.playSound();
          
        }


        function playMisionClasificacion() {
          requerimientoMision4.components.sound.playSound();
          
        }
  

        function playsonidomisionbanco() {
          misionbanco.components.sound.playSound();
          
        }

        function playMisionDian() {
          misionDian.components.sound.playSound();
          
        }

        function playMisionComercio() {
          misionComercio.components.sound.playSound();
          
        }
        



        /* FUNCIONES SONIDO RECORDATORIO DE MISIONES */

        function playRecordatorioMision1() {
         recordatorioMision1.components.sound.playSound();
          
        }

        function playRecordatorioMision2() {
         recordatorioMision2.components.sound.playSound();
          
        }

        function playRecordatorioMision3() {
          recordatorioMision3.components.sound.playSound();
          
        }

        function playRecordatorioMision4() {
          recordatorioMision4.components.sound.playSound();
          
        }

        function playRecordatorioMision5() {
          recordatorioActa.components.sound.playSound();
          
        }

        function playRecordatorioMision6() {
          recordatorioBanco.components.sound.playSound();
          
        }

        function playRecordatorioMision7() {
          recordatorioDian.components.sound.playSound();
          
        }
        /* FUNCION POSICION ALEATORIA */

        const lista =['-0.6','0','0.6']

        
       function tresAleatorios(lista) {

          return[...lista]
            .sort(()  => Math.random()>0.5?1:-1 )
            .slice(0,3)
          
        }
        var arraylista = tresAleatorios(lista)
        var random1= arraylista[0];
        var random2= arraylista[1];
        var random3= arraylista[2];

        function objectToPos1b() {
     
          return (random1) + " " + ('0') + " "  + ('0')

        }
        var posicionCartel1= objectToPos1b(ActividadEconomica1.getAttribute('position'))
        var posicionCartel1a= objectToPos1b(ClasificacionEmpresa1.getAttribute('position'))

        function objectToPos2b() {
     
          return (random2) + " " + ('0') + " "  + ('0')

        }
        var posicionCartel2= objectToPos2b(ActividadEconomica2.getAttribute('position'))
        var posicionCartel2a= objectToPos1b(ClasificacionEmpresa2.getAttribute('position'))
        function objectToPos3b() {
     
          return (random3) + " " + ('0') + " "  + ('0')

        }
        var posicionCartel3= objectToPos3b(ActividadEconomica3.getAttribute('position'))
        var posicionCartel3a= objectToPos1b(ClasificacionEmpresa3.getAttribute('position'))
        /* FUNCION APARECER BANNER1 ACTIVIDAD ECONOMICA  */

        function actividadEconomicaApear() {

          ActividadEconomica.setAttribute('visible',true)
          ActividadEconomica.setAttribute('scale', '0.760 0.671 1')
        }

        /* FUNCION APARECER BANNER2 CLASIFICACION EMPRESA  */

        function clasificacionEmpresaApear() {

          ClasificacionEmpresa.setAttribute('visible',true)
          ClasificacionEmpresa.setAttribute('scale','0.760 0.671 1')
          
        }

        /* FUNCIONES DE CAMBIO DE ESTADO */

        function mision1() {
          estado=1
          ActividadEconomica.setAttribute('visible',true)   
        }

        function mision2() {
          estado=2
          
        }

        function mision3() {
          estado=3
          
        }

        function mision4() {
          estado=4
          
        }
        function mision5() {
          estado=5
          
        }

        function mision6() {
          estado=6
          
        }

        function mision7() {
          estado=7
          
        }


        /* FUNCIONES DE HABLA ACTIVA */
        
        function hablar() {

          Stat=0

          
          iconState2.setAttribute('animation__scale4', `property: scale; to: 0 0 0; dur: 500`)
          iconState.setAttribute('animation__scale3', `property: scale; to: 4 4 4; dur: 500`)
      
          setTimeout(function iconStateanimation1() {
            iconState.setAttribute('animation__scale3', `property: scale; to: 0 0 0; dur: 500`)
        
          },'4000')


          setTimeout(function iconStateanimation1fin() {
            iconState.removeAttribute('animation__scale3')
            iconState2.removeAttribute('animation__scale4')
         
          },'3000')

          


          console.log('habla activa')

          
        }

        /* FUNCIONES DE HABLA INACTIVA */

        function nohablar() {

          Stat=1
         
          iconState2.setAttribute('animation__scale4', `property: scale; to: 4 4 4; dur: 500`)
          iconState.setAttribute('animation__scale3', `property: scale; to: 0 0 0; dur: 500`)
      
         


          setTimeout(function iconStateanimation1fin() {
            iconState2.removeAttribute('animation__scale4')
            iconState.removeAttribute('animation__scale3')
         
          },'1000')
          console.log('habla Inactiva')
          
          
        }
        /* FUNCION DESVANECIDO DEL BOTON */
        
        function botondesvanecido() {

          iniciar.setAttribute('visible',false)
          iniciar.setAttribute('scale','0 0 0')
          
        }

        /* FUNCION FIN SIMULADOR */

        var animation= document.getElementById('blackintro')
        const newLocal = `property:material.opacity;from:1; to: 0; dur: 1400;`;
        const newLocal2 = `property:material.opacity;from:0; to: 1; dur: 1400;`;


        function animacioniniciada() { 
        
          
          animation.setAttribute('animation', newLocal)
              
        }
  
        function animacioniniciada2() { 
            
            
            animation.setAttribute('animation__1', newLocal2)
            
                
        }


        
        
        function goTOEnd() {


          elem.setAttribute('position',{x: -8.614, y: 0.400, z: -10.103})
          setTimeout(function() {
           cheerSound.components.sound.playSound();
          }
            ,1400
  
          ); 
          
        }

       /*  function botonresetplay() {


          estado=0;
          iniciar.setAttribute('visible',true)
          iniciar.setAttribute('scale','1.1 0.8 0.800')
          


          setTimeout(function blackintrofinal() {
            animation.setAttribute('visible', 'true')
            setTimeout(animacioniniciada2,'0')
            setTimeout(animacioniniciada,'1400')
            animation.removeAttribute('animation__1')
            animation.removeAttribute('animation')
          }
            ,0
  
          ); 



          setTimeout(function() {
            
            elem.setAttribute('position',{x: 52.409, y: 0.400, z: 12.502})

          }
            ,1400

          );


        } */





        /* FUNCIONES CAMBIOS DE IMAGEN JEFE */
        let jefeTalk = document.getElementById('jefe-talk');
        let jefeNormal = document.getElementById('jefe-normal');
        let jefeFeliz = document.getElementById('jefe-feliz');
        let jefeEnojado = document.getElementById('jefe-enojado')
        function setjefetalkface() {
          
          jefe.setAttribute('material','src',jefeTalk)
          
          
        }

        function setjefeNormalface() {
          
          jefe.setAttribute('material','src',jefeNormal)
          
          
        }

        function setjefeFelizface() {
          
          jefe.setAttribute('material','src',jefeFeliz)
          
          
        }
        
        function setjefeEnojadoface() {
          
          jefe.setAttribute('material','src',jefeEnojado)
          
          
        }


        /* FUNCIONES CAMBIOS DE IMAGEN BANQUERO */
        let banqueroFeliz = document.getElementById('banquero-feliz');
        let banqueroPreocupado = document.getElementById('banquero-preocupado');
        let banqueroNormal = document.getElementById('banquero-normal');
        let banqueroSorprendido = document.getElementById('banquero-sorprendido');

        
        function setbanqueroFelizFace() {
          
          banquero.setAttribute('material','src',banqueroFeliz)
          
          
        }

        function setbanqueroPreocupadoFace() {
          
          banquero.setAttribute('material','src',banqueroPreocupado)
          
          
        }

        function setbanqueroNormalface() {
          
          banquero.setAttribute('material','src',banqueroNormal)
          
          
        }

        function setbanqueroSorprendidoface() {
          
          banquero.setAttribute('material','src',banqueroSorprendido)
          
          
        }
        

        /* FUNCIONES CAMBIOS DE IMAGEN ASESOR */
        let asesorFeliz = document.getElementById('asesor-feliz');
        let asesorPreocupado = document.getElementById('asesor-preocupado');
        let asesorNormal = document.getElementById('asesor-normal');
        let asesorSorprendido = document.getElementById('asesor-sorprendido');

        
        function setasesorFelizFace() {
          
          asesor.setAttribute('material','src',asesorFeliz)
          
          
        }

        function setasesorPreocupadoFace() {
          
          asesor.setAttribute('material','src',asesorPreocupado)
          
          
        }

        function setasesorNormalface() {
          
          asesor.setAttribute('material','src',asesorNormal)
          
          
        }

        function setasesorSorprendidoface() {
          
          asesor.setAttribute('material','src',asesorSorprendido)
          
          
        }


        /* FUNCIONES CAMBIOS DE IMAGEN FUNCIONARIO */
        let funcionarioFeliz = document.getElementById('funcionario-feliz');
        let funcionarioPreocupado = document.getElementById('funcionario-preocupado');
        let funcionarioNormal = document.getElementById('funcionario-normal');
        let funcionarioSorprendido = document.getElementById('funcionario-sorprendido');

        
        function setfuncionarioFelizFace() {
          
          funcionario.setAttribute('material','src',funcionarioFeliz)
          
          
        }

        function setfuncionarioPreocupadoFace() {
          
          funcionario.setAttribute('material','src',funcionarioPreocupado)
          
          
        }

        function setfuncionarioNormalface() {
          
          funcionario.setAttribute('material','src',funcionarioNormal)
          
          
        }

        function setfuncionarioSorprendidoface() {
          
          funcionario.setAttribute('material','src',funcionarioSorprendido)
          
          
        }




        iniciar.addEventListener('click', function() {
 
          
            setTimeout(nohablar,'0');
            

            setTimeout(botondesvanecido,'1400');
      
            setTimeout(playsonidobienvenida,'3500');

            setTimeout(playsonidointroduccion,'7500');
            

            setTimeout(playMisionActividad,'13000');
            setTimeout(setjefetalkface,'13000')
          
            setTimeout( mision1,'25000');
            setTimeout(setjefeNormalface,'25000')

            setTimeout(function() {
              console.log('pasas a la mision 1');

            }
              ,25000

            );

            setTimeout(hablar,'25000');
            
/*          console.log(arraylista)
            console.log(random1)
            console.log(random2)
            console.log(random3)
            console.log(posicionCartel1) 
            console.log(posicionCartel2) 
            console.log(posicionCartel3)  */
           ActividadEconomica1.setAttribute('position',objectToPos1b(posicionCartel1))
           ActividadEconomica2.setAttribute('position',objectToPos2b(posicionCartel2))
           ActividadEconomica3.setAttribute('position',objectToPos3b(posicionCartel3))
           setTimeout(actividadEconomicaApear,'25000')
          

        }); 

      /*  ITERACCION BANNER-1 */

      
      ActividadEconomica1 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          setTimeout(nohablar,'0');
          setTimeout(hablar,'6400')
          
          
          if (estado==1) {

            console.log('No es la respuesta correcta, la actividad economica de esta empresa no es de SERVICIOS')
            respuestaIncorrectaMision1Opcion1.components.sound.playSound();
            setTimeout(function() {
              console.log('vuelve a intentarlo');
  
            }
              ,6400
  
            );

          }
        
        }

      })

      ActividadEconomica2 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          setTimeout(nohablar,'0');
          setTimeout(hablar,'6400')
          
          if (estado==1) {

            console.log('No es la respuesta correcta, la actividad economica de esta empresa no es INDUSTRIAL')
            respuestaIncorrectaMision1Opcion2.components.sound.playSound();
            setTimeout(function() {
              console.log('vuelve a intentarlo');
  
            }
              ,6400
  
            );
          }
        
        }

      })


      ActividadEconomica3 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          setTimeout(nohablar,'0');
          setTimeout(hablar,'8000')
          
          if (estado==1) {

            console.log('Felicidades, encontraste la actividad economica de la empresa, efectivamente es de tipo COMERCIAL, enseñale tu reporte a tu jefe')
            respuestaCorrectaMision1.components.sound.playSound();
            setTimeout(function() {
              console.log('vuelve con tu jefe');
  
            }
              ,8000
  
            );

            ActividadEconomica.setAttribute('scale','0 0 0')
            reporteEconomica.setAttribute('visible',true)

          }
        
        }

      })


      /*  ITERACCION BANNER-2 */

      
      ClasificacionEmpresa1 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          setTimeout(nohablar,'0');
          setTimeout(hablar,'5500')
          
          if (estado==4) {

            console.log('No es la respuesta correcta, ESTA NO ES LA  CLASIFIFACION DE LA EMPRESA')
            respuestaIncorrectaMision4.components.sound.playSound();
          }
        
        }

      })

     ClasificacionEmpresa2 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          setTimeout(nohablar,'0');
          setTimeout(hablar,'5500')
          
          if (estado==4) {

            console.log('No es la respuesta correcta, ESTA NO ES LA  CLASIFIFACION DE LA EMPRESA')
            respuestaIncorrectaMision4.components.sound.playSound();
          }
        
        }

      })


      ClasificacionEmpresa3 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          setTimeout(nohablar,'0');
          setTimeout(hablar,'5500')
          
          if (estado==4) {

            console.log('Felicidades, encontraste la CLASIFIFACION DE LA EMPRESA, enseñale tu reporte a tu jefe')
            respuestaCorrectaMision4.components.sound.playSound();

            ClasificacionEmpresa.setAttribute('scale','0 0 0')
            reporteClasificacion.setAttribute('visible',true)

          }
        
        }

      })







      /*  ITERACCION IMPRESORA */

      var impresora = document.getElementById('impresora');
     
      
      impresora.addEventListener('click', function() {
        console.log(estado)
        console.log('Usaste la impresora');
        if (Stat==0) {
          setTimeout(nohablar,'0');
          
          if (estado==2) {
            
            if (nombreEmpresa.getAttribute('visible')==true) {

              if (nombreEmpresaImpreso.getAttribute('visible')==true) {
                setTimeout(hablar,'3900')   
                console.log('ya imprimiste el nombre electo  para la empresa, llevaselo a tu jefe');
                impresoraNombreImpreso.components.sound.playSound();
              }

              else {
                setTimeout(hablar,'10000')
                setTimeout(function viewNombreEMpresaImpreso() {
                  nombreEmpresaDigital.setAttribute('visible',false)
                  nombreEmpresaImpreso.setAttribute('visible',true)
                },'6000')
                
                console.log('Acabas de imprimir el nombre de la empresa, entregaselo a tu jefe');
                impresoraSound.components.sound.playSound();
                setTimeout(cajaActivaImpresora,'0')

                setTimeout(function playsimpresoraNombreCreado() {
                  
                 impresoraNombreCreado.components.sound.playSound()
                },'6000');
                
              }
            }

           else {
              
            setTimeout(hablar,'6000')
              console.log('Debes crear el nombre en el computador para luego venir a imprimirlo y entregarlo a tu jefe');
              impresoraNombreDigital.components.sound.playSound();
            } 
          }

          if (estado==3) {

            if (logoEmpresa.getAttribute('visible')==true) {

              if (logoEmpresaImpreso.getAttribute('visible')==true) {
                setTimeout(hablar,'3700')
                console.log('ya imprimiste el logo que creaste para la empresa, llevaselo a tu jefe');
                impresoraLogoImpreso.components.sound.playSound();
              }

              else {
                setTimeout(hablar,'9000')
                setTimeout(function viewLogoEMpresaImpreso() {
                  logoEmpresaDigital.setAttribute('visible',false)
                  logoEmpresaImpreso.setAttribute('visible',true)
                },'6000');
                
                console.log('Acabas de imprimir el logo de la empresa que diseñaste, entregaselo a tu jefe');
                setTimeout(cajaActivaImpresora,'0');
                impresoraSound.components.sound.playSound();
                setTimeout(cajaActivaImpresora,'0')
                
                setTimeout(function playImpresoraLogoCreado() {
                  impresoraLogoCreado.components.sound.playSound()},'6000')
                ;
              }

              
            }

           else {
              
              setTimeout(hablar,'6000')
              console.log('Debes crear el logo en el computador para luego venir a imprimirlo y entregarlo a tu jefe');
              impresoraLogoDigital.components.sound.playSound();
            } 

          
          
          }

          if (estado==5) {

            if (ccomercio.getAttribute('visible')==true) {
              setTimeout(hablar,'7000')
              console.log('ya imprimiste el certificado de la camara de comercio');
              impresoraCompletado.components.sound.playSound();
            }

           else {
              setTimeout(hablar,'7300')
              setTimeout(function viewccomercioImpreso() {
                ccomercio.setAttribute('visible',true)
              },'6000');
              
              console.log('Acabas de imprimir el certificado de la camara de comercio, ve a radicarlo');
              impresoraSound.components.sound.playSound();
              setTimeout(cajaActivaImpresora,'0')
              setTimeout(function playimpresoraActa() {
                impresoraActa.components.sound.playSound()
              },'6000');
              
              

            } 
          
          }
          
          if (!(estado==2||estado==3||estado==5)) {
            setTimeout(hablar,'4000')
            console.log('Te quedas pensando que imprimir pero no se te ocurre nada de momento')
            impresoraNoMision.components.sound.playSound();
          }
        } 
      })



      /*  ITERACCION COMPUTADOR */

      var computador = document.getElementById('computador');
     
      computador.addEventListener('click', function() {

        console.log('Usaste el computador');
        
        if (Stat==0) {
          setTimeout(nohablar,'0');
          
          

          if (estado==2) {

            if (nombreEmpresa.getAttribute('visible')==true) {

              if (nombreEmpresaDigital.getAttribute('visible')==true) {
                setTimeout(hablar,'6400')
                console.log('ya creaste el nombre de la empresa en formato digital, ve a imprimirlo y llevaselo a tu jefe impreso');
                computadoraNombreDIgital.components.sound.playSound();
              }

              if (nombreEmpresaImpreso.getAttribute('visible')==true) {
                setTimeout(hablar,'3800')
                console.log('ya imprimiste el nombre de la empresa que creaste, llevaselo a tu jefe');
                computadoraNombreImpreso.components.sound.playSound();
              }
            }

           else {
              setTimeout(hablar,'8900')
              setTimeout(function viewNombreEmpresaDigital() {
                nombreEmpresa.setAttribute('visible',true)
                nombreEmpresaDigital.setAttribute('visible',true)
              },'4000');
              
              
              console.log('Acabas de crear el nombre de la empresa, ve a imprimirlo y muestraselo a tu jefe');
              computerSound.components.sound.playSound();
              setTimeout(cajaActivaComputador,'0')
              setTimeout(function playComputadoraNombreCreado() {
                computadoraNombreCreado.components.sound.playSound()},'4000')
              ;
            } 

          
          
          }

          if (estado==3) {

            if (logoEmpresa.getAttribute('visible')==true) {

              if (logoEmpresaDigital.getAttribute('visible')==true) {
                setTimeout(hablar,'6800')

                console.log('ya diseñaste el logo de la empresa en formato digital, ve a imprimirlo y llevaselo a tu jefe impreso');
                computadoraLogoDigital.components.sound.playSound();
              }

              if (logoEmpresaImpreso.getAttribute('visible')==true) {
                setTimeout(hablar,'3800')

                console.log('ya imprimiste el logo de la empresa que diseñaste, llevaselo a tu jefe');
                computadoraLogoImpreso.components.sound.playSound();
              }
            }

           else {
            setTimeout(hablar,'8900')
              setTimeout(function viewLogoEmpresaDigital() {
                logoEmpresa.setAttribute('visible',true)
              logoEmpresaDigital.setAttribute('visible',true)
              },'4000');
              
              
              console.log('Acabas de diseñar el logo de la empresa en formato digital, ve a imprimirlo y muestraselo a tu jefe');
              computerSound.components.sound.playSound();
              setTimeout(cajaActivaComputador,'0')
              setTimeout(function playcomputadoraLogoCreado() {
                computadoraLogoCreado.components.sound.playSound()},'4000')
              ;

              
            } 

          }

          if (!(estado==2||estado==3)) {
            setTimeout(hablar,'5000')
            console.log('Te quedas pensando para que necesitas el computador pero no se te ocurre nada de momento')
            computadoraNoMision.components.sound.playSound();
          }
        } 
      })



      /*  ITERACCION FUNCIONARIO */

      var funcionario = document.getElementById('funcionario');
      

      funcionario.addEventListener('click', function() {
        if (Stat==0) {
          setTimeout(nohablar,'0');
          setTimeout(hablar,'5000')
          console.log('hablaste con el funcionario');
        
          if (estado==5) {

            if (ccomercio.getAttribute('visible')==true) {
            
              if (radicado.getAttribute('visible')==true) {
                console.log('Ya te han radicado el certificado, llevaselo a tu jefe');
                setTimeout(setfuncionarioSorprendidoface,'0');
                setTimeout(setfuncionarioNormalface,'5000');
                actaPosesion.components.sound.playSound();
              }

              else {
                radicado.setAttribute('visible',true);
                setTimeout(setfuncionarioFelizFace,'0');
                setTimeout(setfuncionarioNormalface,'5000');
                actaRadicada.components.sound.playSound();
                console.log('Acabas de radicar el certificado en la camara de comercio, entregaselo a tu jefe');
              }

            }
            else { 
              console.log('Debes imprimir primero el certificado para venir a radicarlo');
              setTimeout(setfuncionarioSorprendidoface,'0');
              setTimeout(setfuncionarioNormalface,'5000');
              actaNoImpresa.components.sound.playSound();
            }
          
          }
          
          else {
            console.log('el funcionario te queda mirando y el silencio incomodo se apodera de la oficina, talvez ya has termido lo que tenias que hacer aca')
            setTimeout(setfuncionarioPreocupadoFace,'0');
            setTimeout(setfuncionarioNormalface,'5000');
            cComercioNoMision.components.sound.playSound();
          }
        } 

      })








        

      /*    INTERACCION BANQUERO */

      var banquero = document.getElementById('banquero');
     
      
      
        
        

      banquero.addEventListener('click', function() {
        if (Stat==0) {
          setTimeout(nohablar,'0');
          
          console.log('hablaste con el funcionario del banco');
        
          console.log(cbancario.getAttribute('visible'));


          if (estado===6) {

            if (cbancario.getAttribute('visible')==true) {
              setTimeout(hablar,'5000')
              console.log('ya tienes en tu poder el certificado, no tienes que haces nada mas aca, largo');
              setTimeout(setbanqueroSorprendidoface,'0');
              setTimeout(setbanqueroNormalface,'5000');
              bancariaPosesion.components.sound.playSound();
            }

            else {
              setTimeout(hablar,'4500')
              cbancario.setAttribute('visible',true);
              setTimeout(setbanqueroFelizFace,'0');
              setTimeout(setbanqueroNormalface,'5000');
              misioncumplidabanco.components.sound.playSound();
              console.log(misioncumplidabanco);

            }
          
          }
          
          else {
            setTimeout(hablar,'4500')
            console.log('te queda mirando pero no le dices nada, el silencio incomodo dice que no tienes que hacer nada por aca')
            setTimeout(setbanqueroPreocupadoFace,'0');
              setTimeout(setbanqueroNormalface,'5000');
            bancoNomision.components.sound.playSound();
          }

        }  

      })

       /*    INTERACCION ASESOR */

       var asesor = document.getElementById('asesor');
       
       
       
         
         
 
       asesor.addEventListener('click', function() {
         if (Stat==0) {
          setTimeout(nohablar,'0');
           
           console.log('hablaste con el asesor de la  Dian');
         
           console.log(factura.getAttribute('visible'));
 
 
           if (estado===7) {
 
             if (factura.getAttribute('visible')==true) {
              setTimeout(hablar,'3500')
               console.log('ya tienes en tu poder la factura de la Dian, no tienes que haces nada mas aca');
               setTimeout(setasesorPreocupadoFace,'0');
               setTimeout(setasesorNormalface,'5000');
               dianNoMision.components.sound.playSound();
             }
 
             else {
              setTimeout(hablar,'3500')
               factura.setAttribute('visible',true);
               setTimeout(setasesorFelizFace,'0');
               setTimeout(setasesorNormalface,'5000');
               facturaPos.components.sound.playSound();
                
             }
           
           }
           
           else {
            setTimeout(hablar,'5000')
             console.log('te queda mirando pero no le dices nada, el silencio incomodo dice que no tienes que hacer nada por aca')
             setTimeout(setasesorSorprendidoface,'0');
             setTimeout(setasesorNormalface,'5000');
             dianPosec .components.sound.playSound();
           }
 
         }  
 
       })

      /* INTERACCION JEFE */

      var jefe = document.getElementById('jefe');
      

      jefe.addEventListener('click', function() {
        if (Stat==0) {
         
          
          console.log('hablas con el jefe');

          
          /* MISION 1 */

          if (estado===1) {
            setTimeout(nohablar,'0');
            /* se cumple y pasa a a la siguiente mision */

            if (reporteEconomica.getAttribute('visible')==true) {
              setTimeout(hablar,'19200')
              console.log('le dices al jefe que hiciste la mision Actividad Economica de la empresa');
              setTimeout(setjefeFelizface,'0');
              
              jefeMision1Completa.components.sound.playSound();
              setTimeout(reporteActividadEconomicaMesa,'1000');
              setTimeout( mision2,'3500');
              setTimeout(function() {
                console.log('pasas a la mision 2');
  
              }
                ,9500
  
              );
            
              setTimeout(playMisionNombre,'9500')
              setTimeout(setjefetalkface,'9500');
              setTimeout(setjefeNormalface,'19200');
            }

            /* no se cumple y sigue en la mision actual */
            
            else {
              setTimeout(hablar,'17000')
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              setTimeout(setjefeEnojadoface,'0');
              jefeNoEntrega.components.sound.playSound();
              setTimeout(playRecordatorioMision1,'4500')
              setTimeout(setjefetalkface,'4500');
              setTimeout(setjefeNormalface,'17000');
            }
          }


          /* MISION 2 */

          if (estado===2) {
            setTimeout(nohablar,'0');
            /* se cumple y pasa a a la siguiente mision */

            if (nombreEmpresaImpreso.getAttribute('visible')==true) {
              setTimeout(hablar,'22000')
              console.log('le dices al jefe que hiciste la mision nombre de empresa');
              setTimeout(setjefeFelizface,'0');

              jefeMision2Completa.components.sound.playSound();
              setTimeout(reporteNombreMesa,'1000');
              setTimeout( mision3,'3500');
              setTimeout(function() {
                console.log('pasas a la mision 3');
  
              }
                ,9500
  
              );
            
              setTimeout(playMisionLogo,'13000')
              setTimeout(setjefetalkface,'13500');
              setTimeout(setjefeNormalface,'22000');
            }

            /* no se cumple y sigue en la mision actual */
            
            else {
              setTimeout(hablar,'11700')
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              setTimeout(setjefeEnojadoface,'0');

              jefeNoEntrega.components.sound.playSound();
              setTimeout(playRecordatorioMision2,'4500')
              setTimeout(setjefetalkface,'4500');
              setTimeout(setjefeNormalface,'11700');
            }
          }
          
          /* MISION 3 */

          if (estado===3) {
            setTimeout(nohablar,'0');
            /* se cumple y pasa a a la siguiente mision */

            if (logoEmpresaImpreso.getAttribute('visible')==true) {
              setTimeout(hablar,'24000')
              console.log('le dices al jefe que hiciste la mision logo de empresa');
              setTimeout(setjefeFelizface,'0');
            
              jefeMision3Completa.components.sound.playSound();
              setTimeout(reporteLogo,'1000');
              ClasificacionEmpresa1.setAttribute('position',objectToPos1b(posicionCartel1a))
              ClasificacionEmpresa2.setAttribute('position',objectToPos2b(posicionCartel2a))
              ClasificacionEmpresa3.setAttribute('position',objectToPos3b(posicionCartel3a))
              setTimeout(clasificacionEmpresaApear,'22000');
              setTimeout( mision4,'9500');
              setTimeout(function() {
                console.log('pasas a la mision 4');
  
              }
                ,9500
  
              );
           
              setTimeout(playMisionClasificacion,'10000')
              setTimeout(setjefetalkface,'10000');
              setTimeout(setjefeNormalface,'22000');
            }

            /* no se cumple y sigue en la mision actual */
            
            else {
              setTimeout(hablar,'10900')
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              setTimeout(setjefeEnojadoface,'0');

              jefeNoEntrega.components.sound.playSound();
              setTimeout(playRecordatorioMision3,'4500')
              setTimeout(setjefetalkface,'4500');
              setTimeout(setjefeNormalface,'10900');
            }
          }

          /* MISION 4 */

          if (estado===4) {
            setTimeout(nohablar,'0');
            setTimeout(hablar,'17000')
            /* se cumple y pasa a a la siguiente mision */

            if (reporteClasificacion.getAttribute('visible')==true) {
              console.log('le dices al jefe que hiciste la mision CLASIFICACION de la empresa');
              setTimeout(setjefeFelizface,'0');
            
              jefeMision4Completa.components.sound.playSound();
              setTimeout(reporteClasificacionMesa,'1000');
              setTimeout( mision5,'3500');
              setTimeout(function() {
                console.log('pasas a la mision 5');
  
              }
                ,9500
  
              );
            
              setTimeout(playMisionComercio,'9500');
              setTimeout(setjefetalkface,'9500');
              setTimeout(setjefeNormalface,'17000');
            }

            /* no se cumple y sigue en la mision actual */
            
            else {
              setTimeout(hablar,'15200')
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              setTimeout(setjefeEnojadoface,'0');
              jefeNoEntrega.components.sound.playSound();
              setTimeout(playRecordatorioMision4,'4500')
              setTimeout(setjefetalkface,'4500');
              setTimeout(setjefeNormalface,'15200');
            }
          }

          /* MISION 5 */

          if (estado===5) {
            setTimeout(nohablar,'0');
            /* se cumple y pasa a a la siguiente mision */

            if (radicado.getAttribute('visible')==true) {
              setTimeout(hablar,'15500')
              console.log('le dices al jefe que hiciste la mision CAMARA-COMERCIO');
              setTimeout(setjefeFelizface,'0');
            
              entregaActa.components.sound.playSound();
              setTimeout(reporteComercioMesa,'1000');
              setTimeout( mision6,'3500');
              setTimeout(function() {
                console.log('pasas a la mision 6');
  
              }
                ,9500
  
              );
            
              setTimeout(playsonidomisionbanco,'7600');
              setTimeout(setjefetalkface,'7600');
              setTimeout(setjefeNormalface,'15500');
            }

            /* no se cumple y sigue en la mision actual */
            
            else {
              setTimeout(hablar,'12500')
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              setTimeout(setjefeEnojadoface,'0');

              jefeNoEntrega.components.sound.playSound();
              setTimeout(playRecordatorioMision5,'4500')
              setTimeout(setjefetalkface,'4500');
              setTimeout(setjefeNormalface,'12500');

            }
          }




           /* MISION 6 */

          if (estado===6) {
            setTimeout(nohablar,'0');
            /* se cumple y pasa a a la siguiente mision */

            if (cbancario.getAttribute('visible')==true) {
              setTimeout(hablar,'16000')
              console.log('le entregas el Certificado Bancario al jefe');
              setTimeout(setjefeFelizface,'0');

              misioncumplidabanco2.components.sound.playSound();
              setTimeout(reporteBancoMesa,'1000');
              setTimeout( mision7,'3500');
              setTimeout(function() {
                console.log('pasas a la mision 7');
  
              }
                ,9500
  
              );

              setTimeout(playMisionDian,'6500');
              setTimeout(setjefetalkface,'6500');
              setTimeout(setjefeNormalface,'16000');
            }

            /* no se cumple y sigue en la mision actual */

            else {
              setTimeout(hablar,'9500')
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              setTimeout(setjefeEnojadoface,'0');

              jefeNoEntrega.components.sound.playSound();
              setTimeout(playRecordatorioMision6,'4200')
              setTimeout(setjefetalkface,'4200');
              setTimeout(setjefeNormalface,'9500');
            }
          }


          /* MISION 7 */

          if (estado===7) {
            setTimeout(nohablar,'0'); 
            /* se cumple y finaliza simulacion */

            if (factura.getAttribute('visible')==true) {
              setTimeout(hablar,'7000')
              console.log('le entregas la facturacion de la DIAN al jefe');
              setTimeout(setjefeFelizface,'0');
              setTimeout(setjefeNormalface,'2500');
              misioncumplidabanco2.components.sound.playSound();
              setTimeout(reporteFacturaDianMesa,'1000');
              setTimeout(function blackintrofinal() {
                animation.setAttribute('visible', 'true')
                setTimeout(animacioniniciada2,'0')
                setTimeout(animacioniniciada,'1400')
                animation.removeAttribute('animation__1')
                animation.removeAttribute('animation')
              }
                ,1400
      
              );  
              setTimeout(goTOEnd,'2800');
              setTimeout(function() {
              console.log('terminaste el simulador, felicidades');

            }
              ,4000

            );

             
            }

            /* no se cumple y sigue en la mision actual */

            else {
              setTimeout(hablar,'11500')
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              setTimeout(setjefeEnojadoface,'0');

              jefeNoEntrega.components.sound.playSound();
              setTimeout(playRecordatorioMision7,'4200')
              setTimeout(setjefetalkface,'4200');
              setTimeout(setjefeNormalface,'11500');
            }
          }
        }  
      })
      
      botonReset.addEventListener('click',function() {
        setTimeout(function blackintrofinal() {
          animation.setAttribute('visible', 'true')
          setTimeout(animacioniniciada2,'0')
          setTimeout(animacioniniciada,'1400')
          animation.removeAttribute('animation__1')
          animation.removeAttribute('animation')
        }
          ,0

        );  

        setTimeout(function reinicio() {
          location.reload()
          console.log('hice click')
          
         },'1400');
        
       
      
      
      
      })

         
      
      
          

    },

}
);
