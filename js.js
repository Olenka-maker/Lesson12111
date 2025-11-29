let logo = document.querySelector('.logo')
logo.addEventListener('mousemove', function(e){
    let x = e.pageX
    let y = e.pageY
    let dx = x - window.innerWidth / 2;
    let dy = y - window.innerHeight / 2;
    let angelX = 80 * dx/ window.innerWidth
    let angelY = 80 * dx/window.innerHeight

    logo.style.transform = `rotateY(${angelX}deg) rotateX(${angelY}deg)` 
})