// slide img Banner
nextImg = 0
Imgslide()
function Imgslide(){
    let bannerSelec =  document.getElementsByClassName('banner-img')
    let dot = document.getElementById("hero-banner_selec");
    listdot = dot.querySelectorAll("li");    
    for(var i=0;i<bannerSelec.length;i++){
        if(nextImg - 1 == i && nextImg<bannerSelec.length){
            continue
        }
        else{
            bannerSelec[i].style.display="none";
            
        }
           
    }
    nextImg++;
    if(nextImg>bannerSelec.length){
        nextImg=1;
    }
    for(var i=0;i<listdot.length;i++){
        listdot[i].className = listdot[i].className.replace("active","");

    }    
    bannerSelec[nextImg-1].style.display="block";       
    listdot[nextImg-1].className+="active";
    setTimeout(Imgslide,2500);
    
}
// --------------------------

function btnNext(){
    newProduct = document.getElementsByClassName('newproduct');
    newProduct[0].scrollLeft -=20;
    
}
function btnPrev(){
    newProduct = document.getElementsByClassName('newproduct');
    newProduct[0].scrollLeft +=20
}

// newProduct = document.getElementsByClassName('newproduct');
// btnNext = document.getElementsByClassName('next');
// btnPrev = document.getElementsByClassName('previous');
// if(btnNext.length>0){
//     btnNext[0].addEventListener("click", function(){
//         newProduct[0].scrollLeft -=20
//     })
// }
// if(btnPrev.length>0){
//     btnPrev[0].addEventListener("click", function(){
//         newProduct[0].scrollLeft +=20
//     })
// }


