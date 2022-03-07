nextImg = 0
Imgslide()
function Imgslide(){
    let bannerSelec =  document.getElementsByClassName('banner-img')
    let dot = bannerSelec.getElementById('hero-banner_selec');
    listdot = dot.querySelectorAll("li");
    console.log(dot)
    for(var i=0;i<bannerSelec.length;i++){
        bannerSelec[i].style.display="none";         
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
    setTimeout(Imgslide,2000);
}
