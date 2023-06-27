AFRAME.registerComponent("dc", {
    init: function () {
      this.dcContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "super",
          title: "Superman",
          url: "./sman.png",
        },
        {
          id: "ww",
          title: "Wonder Women",
          url: "./ww.png",
        },
  
        {
          id: "fast",
          title: "The Flash",
          url: "./flash.png",
        },
        {
          id: "bat",
          title: "Batman",
          url: "./bat.png",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 15;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl=this.createBorder(position,item.id)
  
        // Thumbnail Element
       const thumbnail=this.createThumbnail(item)
       borderEl.appendChild(thumbnail)
  
        // Title Text Element
       const titleE1=this.createTitleE1(position,item)
       borderEl.appendChild(titleE1)
  
        this.dcContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityE1=document.createElement("a-entity")
      entityE1.setAttribute("id",id)
      entityE1.setAttribute("visible",true)
      entityE1.setAttribute("geometry",{
        primitive:"plane",
        width:30, height:3
      })
      entityE1.setAttribute("position",position)
      entityE1.setAttribute("material",{
        color:"#6a040f",
        opacity:1
      })
      entityE1.setAttribute("cursor-listener", {});

      return entityE1
    },
    createThumbnail:function(item){
      const entityE1=document.createElement("a-entity")
      entityE1.setAttribute("visible",true)
      entityE1.setAttribute("geometry",{
        primitive:"plane",
        length:20, width:15, height:20
        
      })
      entityE1.setAttribute("material",{
        src:item.url
      })
      return entityE1
    },
    createTitleE1:function(position,item){
      const entityE1=document.createElement("a-entity")
      entityE1.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:50,
        color:"#f5f5ab",
        value:item.title
      })
      const e1position=position
      e1position.y=-20
      entityE1.setAttribute("postion",e1position)
      entityE1.setAttribute("visible",true)
      return entityE1
    }
    
    
  });
  