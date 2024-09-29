function myMove(){
    const animate = document.getElementById('animate')
    let position = 0;
    const interval = setInterval(move, 5)
    function move(){
        position ++;
        if(position < 350){
            animate.style.top = position + 'px';
            animate.style.left = position + 'px'
        }
        else{
            clearInterval(interval)
        }
    }
}

// myMove()