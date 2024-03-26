/*
const canvas = document.querySelector('canvas');
const form = document.querySelector('.signature-pad-form');
const clearButton = document.querySelector('.clear-button');

const submitsign = document.getElementsByTagName("button")[0];

const ctx = canvas.getContext('2d');

let writingMode = false;

const handlePointerDown = (event) => {  
    writingMode = true;
    ctx.beginPath();  
    const [positionX, positionY] = getCursorPosition(event);  
    ctx.moveTo(positionX, positionY);
}

const handlePointerUp = () => {  
    writingMode = false;
}

const handlePointerMove = (event) => {  
    if (!writingMode) return  
    const [positionX, positionY] = getCursorPosition(event);  
    ctx.lineTo(positionX, positionY);  
    ctx.stroke();
}

const getCursorPosition = (event) => {  
    positionX = event.clientX - event.target.getBoundingClientRect().x;  
    positionY = event.clientY - event.target.getBoundingClientRect().y;  
    return [positionX, positionY];
}

canvas.addEventListener('pointerdown', handlePointerDown, {passive: true});
canvas.addEventListener('pointerup', handlePointerUp, {passive: true});
canvas.addEventListener('pointermove', handlePointerMove, {passive: true});

ctx.lineWidth = 2;
ctx.lineJoin = ctx.lineCap = 'round';

const clearPad = () => {  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

submitsign.addEventListener('click', (event) => {  
    event.preventDefault();
    const imageURL = canvas.toDataURL();  
    const image = document.createElement('img');  
    image.src = imageURL;  
    image.height = canvas.height;  
    image.width = canvas.width;  
    image.style.display = 'block';  
    form.appendChild(image);  

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "sign1";
    input.id = "sign1";
    input.value = imageURL;
    form.appendChild(input);
    clearPad();

    $.ajax({
        type: "POST",
        url: "/test2.php",
        data: {signature2: imageURL}
      })
      
      .done(function(respond){console.log("done: "+respond);})
      .fail(function(respond){console.log("fail");})
      .always(function(respond){console.log("always");})
});




clearButton.addEventListener('click', (event) => {  
event.preventDefault();  
clearPad();
});
*/

