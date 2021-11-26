AFRAME.registerComponent('black-intro', {
    init: function () {


        var animation= document.getElementById('blackintro')
        function animacioniniciada() { 
        const newLocal = `property:material.opacity;from:1; to: 0; dur: 1400;`
        
        animation.setAttribute('animation', newLocal)
            
        }

        function animacioniniciada2() { 
          
          const newLocal2 = `property:material.opacity;from:0; to: 1; dur: 1400;`
          animation.setAttribute('animation__1', newLocal2)
              
          }


      this.el.addEventListener('click', function () {
        animation.setAttribute('visible', 'true') 
        setTimeout(animacioniniciada2,'0');
        setTimeout(animacioniniciada,'1400');        
       /*  setTimeout(visibilidad,'2800') */
            
         var info = animation.getAttribute('animation')
        console.log(info)




        animation.removeAttribute('animation__1')
        animation.removeAttribute('animation')
        console.log(info)
        }

      
        
     

            
        
      )
    
    
      
    }


      
})
  
  