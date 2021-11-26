AFRAME.registerComponent('animationup-down', {
    init: function () {

      function objectToPos(posObject) {
     
        return (posObject.x) + " " + ('1.9') + " "  + (posObject.z)
        
      }
  
    
      var Up = objectToPos(this.el.getAttribute('position'));
      var scene = document.querySelector('a-scene');
      
      var shoes=this.el
    
      scene.addEventListener('loaded', function () {
        
       
 
    
        
  
        shoes.setAttribute('animation', `property:position;to: ${Up};easing: linear; loop: true;dir:alternate; dur: 2500`)
        
       
  
        
          
        
          
      });
  
      
  
    }
  })