const menu = document.getElementById("menu");
const option = document.querySelector(".options")
let a = 0 ; 
menu.addEventListener("click",()=>{
    if(a==0){
const tl = gsap.timeline()
    tl.to(".icon",{
    rotate:90,
    duration:.2,
})
    .to(menu,{
    duration:1,
    width:"93%",
    borderTopColor:"rgba(255, 254, 254)",
    borderRightColor:"rgba(255,255,255,0)"
})
    .to((".options ul li"),{
        y:18,
        opacity:1,
        stagger:.1,
        repeatRefresh:true,
        ease:"bounce.in",

       
    })
    .to(option,{
        visibility:"visible"
    })
    

a = 1 ;
    }
    else{
    const tl = gsap.timeline()
    tl.to((".options ul li"),{
     
        y:-10,
        opacity:0,
        stagger:.05,
        
    })
    .to(option,{
        visibility:"hidden"
    })
    .to(".icon",{
    rotate:0,
    duration:.2,
})
    .to(menu,{
    width:"80px",
    duration:.5
   })
    .to(menu,{
         borderRightColor:"rgba(255, 254, 254)",
         borderTopColor:"rgba(255,255,255,0)"
    })
    a = 0 ;
    }


})


