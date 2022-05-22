
const btnaumentar = document.querySelector('.aumentar');
const btndisminuir = document.querySelector('.disminuir');
const span = document.getElementById('span');

let contador = 0;   

btnaumentar.addEventListener('click', () =>{
    contador++
    span.textContent = contador
});

btndisminuir.addEventListener('click', () =>{
    contador--
    span.textContent = contador
});



