const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    swal('TE QUIERO MUCHO, Y ALGO MAS...');
    
    //console.log(function bajarboton())
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

setTimeout (bajarboton,8000)

function bajarboton(){
    location.href="pagina2.html";
    
    //swal("DAME CLICK")

}