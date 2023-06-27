AFRAME.registerComponent("cursor-listener",{
    schema:{selectedItemId:{default:"",type:"string"}},
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()

    },
    handledc:function(){
        const id=this.el.getAttribute("id")
        const comicId=["super","ww","fast","bat"]
        if(comicId.includes(id)){
            const dcContainer=document.querySelector("#dc-container")
            dcContainer.setAttribute("cursor-listener",{
                selectedItemId:id
            })
            this.el.setAttribute("material",{
                color:"#f48c06",
                opacity:1,
            })
        }
    },
    handlemarvel:function(){
        const id=this.el.getAttribute("id")
        const comicId=["hulk","thor","gofg","spooder"]
        if(comicId.includes(id)){
            const marvelContainer=document.querySelector("#marvel-container")
            marvelContainer.setAttribute("cursor-listener",{
                selectedItemId:id
            })
            this.el.setAttribute("material",{
                color:"#95d5b2",
                opacity:1,
            })
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlemarvel()
            this.handledc()
        })
    },
    
   
    
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute("id")
                if(id==selectedItemId){
                    el.setAttribute("material",{
                        color:"#6d597a",
                        opacity:1,
                    })
                }
            }
            
        })
    }
    
})