const container = document.querySelector('#container')
const reset = document.querySelector('#reset')
const slider = document.querySelector('#slide')
const size = document.querySelector('.size')
const rgb = document.querySelector('#rgb')
const black = document.querySelector('#black')


function makeGrid(){
    for (let i = 0; i < 256; i++){ //tells it to run the loop until number of rows required is met
        const div = document.createElement('div');  //creates a div element
        div.classList.add('cell');
        container.appendChild(div)
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
            
            setTimeout(function(){
                event.target.style.color = '';
            }, 500);
        }, false);
    }
}

function rainbowColor(){
    let letters = '0123456789ABCDEF'
    let colors = '#'
    for(let i = 0; i < 6; i++){
        colors += letters[Math.floor(Math.random() * 16)]
    }
    return colors;
    
}

rgb.addEventListener('click', function(){
    let value = document.getElementById('slide').value;
    let cell = container.children;
    for(let i = 0; i < value*value; i++){
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = rainbowColor();
        })
    }
});

black.addEventListener('click', function(){
    let value = document.getElementById('slide').value;
    let cell = container.children;
    for(let i = 0; i < value*value; i++){
        cell[i].addEventListener('mouseover', function(){
            event.target.style.backgroundColor = 'black'
        })
    }
});

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

slider.addEventListener('input', function(){
    let value = document.getElementById('slide').value;
    size.textContent = value;
    removeAllChildNodes(container);
    container.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 3fr);`);
    for(let i = 0; i < value*value; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div)
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black'
        })
    }
})

reset.addEventListener('click', function(){
    let value = document.getElementById('slide').value;
    let cell = container.children;
    for(let i = 0; i < value*value; i++) {
        cell[i].style.backgroundColor = 'white';
    }
})



makeGrid()
// function changeColor(event){
//     let div = event.target.document.querySelector('#container');
//     return div.style.backgroundColor = 'black';
// }

// function resetGrid(){
//     while(container.firstChild){
//         container.removeChild(contianer.firstChild)
//     }
// }

// resetButton.addEventListener('click', () => {
//     resetGrid();
//     makeGrid()
// })

// function clearGrid(){
//     document.getElementById('#container').innerHTML = ''
//     makeGrid()
// } 

//     container.appendChild(cell); //appends div to container
    //      for (let j = 0; j < 16; j++){ //tells it to run the loop until number of rows required is met
    //          const cell = document.createElement('div'); //creates cell  as a div element
    //          container.appendChild(cell) //appends cell to the container

    //     };
    // };

