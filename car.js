AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "./model/car/scene.gltf" }
    },
    init: function() {
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: 0, y: 3, z: 120 };
      const rotation = { x: 0, y: -100, z: 0 };
      const scale ={x :10,y:10,z:10}
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
      this.el.setAttribute("scale",scale);
    },

    update:function(){
      window.addEventListener("click", (e) => {
        this.data.clickCounter = this.data.clickCounter + 1;
        if (this.clickCounter ===1){
          const rotation = { x: 0, y: 20, z: 0 }
          this.el.setAttribute("rotation",rotation);
        } else if(this.data.clickCounter===2)
        {
          const rotation = { x: 0, y: 20, z: 0 }
          this.el.setAttribute("rotation",rotation);
    
        }
      
        
    
    })
    
    
    }
  });
  