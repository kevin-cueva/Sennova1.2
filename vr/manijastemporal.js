AFRAME.registerComponent('manija1', {
    init: function () {
        
          this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
          
            function objectToRot(rotObject) {
     
              return (rotObject.x) + " " + (rotObject.y+50) + " "  + (rotObject.z)
              
            }
            
           var CallRotate= objectToRot(elem.getAttribute('rotation'));
           console.log(CallRotate);

            function cambio() {
              
            
            elem.setAttribute('position',{x: 57.951, y: 0.400, z: 9.405});
            elem.setAttribute('rotation',CallRotate);
           
            
            
            
            

        }

        
        setTimeout(cambio,'1400')
          })
        

        
    }
  })

AFRAME.registerComponent('manija2', {
    init: function () {
        
          this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
           
            console.log(elem.getAttribute('rotation'))
            function objectToRot2(rotObject) {
     
              return (rotObject.x) + " " + (rotObject.y-60) + " "  + (rotObject.z)
              
            }
            var CallRotate2= objectToRot2(elem.getAttribute('rotation'));
            console.log(CallRotate2);
           
            
            function cambio() {
                 
            
            
            elem.setAttribute('position',{x: 52.409, y: 0.400, z: 12.502})
            elem.setAttribute('rotation',CallRotate2);
            
           
        }

        
        setTimeout(cambio,'1400')
          })
        

        
    }
  })



AFRAME.registerComponent('manija3', {
    init: function () {
        
          this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
            function objectToRot3(rotObject) {
     
              return (rotObject.x) + " " + (rotObject.y+50) + " "  + (rotObject.z)
              
            }
            var CallRotate3= objectToRot3(elem.getAttribute('rotation'));
            console.log(CallRotate3);
           

            function cambio() {
                
            

            elem.setAttribute('position',{x: 61.607, y: 0.400, z: -1.281})
            elem.setAttribute('rotation',CallRotate3);
           
        }

        
        setTimeout(cambio,'1400')
          })
        
        
    }
  })
  
  

  AFRAME.registerComponent('manija5', {
    init: function () {
        
          this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');

            function objectToRot5(rotObject) {
     
              return (rotObject.x) + " " + (rotObject.y+180) + " "  + (rotObject.z)
              
            }
            var CallRotate5= objectToRot5(elem.getAttribute('rotation'));
            console.log(CallRotate5);

            function cambio() {
                
            

            elem.setAttribute('position',{x: 62.954, y: 0.400, z: -27.387})
            elem.setAttribute('rotation',CallRotate5);
           
        }

        
        setTimeout(cambio,'1400')
          })
        

        
    }
  })


  AFRAME.registerComponent('manija6', {
    init: function () {
        
        
        this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
            function objectToRot6(rotObject) {
     
              return (rotObject.x) + " " + (rotObject.y+210) + " "  + (rotObject.z)
              
            }
           
            var CallRotate6= objectToRot6(elem.getAttribute('rotation'));
            console.log(CallRotate6);

            function cambio() {
                
            

            elem.setAttribute('position',{x: 61.607, y: 0.400, z: -1.281})
            elem.setAttribute('rotation',CallRotate6);
           
            }

        
            setTimeout(cambio,'1400')
        })
                
        
    }
  })



  AFRAME.registerComponent('manija8', {
    init: function () {
        
        
        this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
            function objectToRot8(rotObject) {
     
              return (rotObject.x) + " " + (rotObject.y+140) + " "  + (rotObject.z)
              
            }
            var CallRotate8= objectToRot8(elem.getAttribute('rotation'));
            console.log(CallRotate8);

            function cambio() {
                
            

            elem.setAttribute('position',{x: 61.607, y: 0.400, z: -1.281})
            elem.setAttribute('rotation',CallRotate8);
           
            }

        
            setTimeout(cambio,'1400')
        })
        

           
        
    }
  })


  AFRAME.registerComponent('manija7', {
    init: function () {
        
        
        this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
            function objectToRot7(rotObject) {
     
              return (rotObject.x) + " " + (rotObject.y+200) + " "  + (rotObject.z)
              
            }
            var CallRotate7= objectToRot7(elem.getAttribute('rotation'));
            console.log(CallRotate7);

            function cambio() {
                
            

            elem.setAttribute('position',{x: 116.456, y: 0.400, z: 10.267})
            elem.setAttribute('rotation',CallRotate7);
           
            }
            
        
            setTimeout(cambio,'1400')
        })
        
       
    }
  })


  AFRAME.registerComponent('manija9', {
    init: function () {
        
        
        this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
            function objectToRot9(rotObject) {
     
              return (rotObject.x) + " " + (rotObject.y+30) + " "  + (rotObject.z)
              
            }
            var CallRotate9= objectToRot9(elem.getAttribute('rotation'));
            console.log(CallRotate9);
           

            function cambio() {
                
            

            elem.setAttribute('position',{x: 61.607, y: 0.400, z: -1.281})
            elem.setAttribute('rotation',CallRotate9);
           
            }
            
        
            setTimeout(cambio,'1400')
        })
        
       
    }
  })


  AFRAME.registerComponent('manija10', {
    init: function () {
        
        
        this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
            function objectToRot10(rotObject) {
     
              return (rotObject.x) + " " + (rotObject.y+20) + " "  + (rotObject.z)
              
            }
            var CallRotate10= objectToRot10(elem.getAttribute('rotation'));
            console.log(CallRotate10);
           

            function cambio() {
                
            

            elem.setAttribute('position',{x: 30.864, y: 0.400, z: -24.622})
            elem.setAttribute('rotation',CallRotate10);

           
            }
            
        
            setTimeout(cambio,'1400')
        })
        
       
    }
  })




  AFRAME.registerComponent('cursor-lis1', {
    init: function () { 

        function objectToPos2(posObject) {
   
            return ('58.736') + " " + ('0.4') + " "  + (posObject.z)
                
            }
    
      this.el.addEventListener('click', function () {
        var elem = document.getElementById('cameraRig');
        var elempos = objectToPos2(elem.getAttribute('position'))
        var pos2 = document.getElementById('teleport0')
        var pos2des = objectToPos2(pos2.getAttribute('position'))
    
        function movimientofinal() {

          console.log( 'inicias',elempos)  
          console.log('Te has movido a',elem.getAttribute('position'));
        
        }
        
        
        
  
        elem.setAttribute('animation', `property:position;to: ${pos2des}; dur: 4500`)
        
       
  
        setTimeout(movimientofinal,'1500')
        
          
        
          
      });
  
      
  
    }
  })

  AFRAME.registerComponent('cursor-lis2', {
    init: function () { 

        function objectToPos1(posObject) {
   
            return ('113.987') + " " + ('0.4') + " "  + (posObject.z)
                
            }
    
      this.el.addEventListener('click', function () {
        var elem = document.getElementById('cameraRig');
        var elempos = objectToPos1(elem.getAttribute('position'))
        
        var pos1 = document.getElementById('teleport1')
        var pos1des = objectToPos1(pos1.getAttribute('position'))
    
        function movimientofinal2() {

          console.log( 'inicias',elempos)  
          console.log('Te has movido a',elem.getAttribute('position'));
        
        }
        
        
        
  
        elem.setAttribute('animation', `property:position;to: ${pos1des}; dur: 4500`)
        
       
  
        setTimeout(movimientofinal2,'1500')
        
         1.697 
        
          
      });
  
      
  
    }
  })
  
  