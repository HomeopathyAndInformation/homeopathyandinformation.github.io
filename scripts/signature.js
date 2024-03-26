
let canvas1 = "";
let canvas2 = "";
let canvas3 = "";
let canvas4 = "";

if(document.getElementById("first")){
    canvas1 = document.getElementsByTagName("canvas")[0];
    canvas2 = document.getElementsByTagName("canvas")[1];
}
if(document.getElementById("annual")){
    canvas3 = document.getElementsByTagName("canvas")[0];
    canvas4 = document.getElementsByTagName("canvas")[1];
}

let form1 = "";
let form2 = "";
let form3 = "";
let form4 = "";

if(document.getElementById("first")){
    form1 = document.getElementById("first").getElementsByClassName('signature-pad-form')[0];
    form2 = document.getElementById("first").getElementsByClassName('signature-pad-form')[1];
}
if(document.getElementById("annual")){
    form3 = document.getElementById("annual").getElementsByClassName('signature-pad-form')[0];
    form4 = document.getElementById("annual").getElementsByClassName('signature-pad-form')[1];
}

let clearButton1 = "";
let clearButton2 = "";
let clearButton3 = "";
let clearButton4 = "";

if(document.getElementById("first")){
    clearButton1 = document.getElementsByClassName("clear-button")[0];
    clearButton2 = document.getElementsByClassName("clear-button")[1];
}
if(document.getElementById("annual")){
    clearButton3 = document.getElementsByClassName("clear-button")[0];
    clearButton4 = document.getElementsByClassName("clear-button")[1];
}

/** Canvas 1 */
if(canvas1){
    const ctx1 = canvas1.getContext('2d');

    let writingMode1 = false;

    const handlePointerDown1 = (event) => {  
        writingMode1 = true;  
        ctx1.beginPath();  
        const [positionX, positionY] = getCursorPosition1(event);  
        ctx1.moveTo(positionX, positionY);
    }

    const handlePointerUp1 = () => {  
        writingMode1 = false;
    }

    const handlePointerMove1 = (event) => {  
        if (!writingMode1) return  
        const [positionX, positionY] = getCursorPosition1(event);  
        ctx1.lineTo(positionX, positionY);  
        ctx1.stroke();
    }

    const getCursorPosition1 = (event) => {  
        positionX = event.clientX - event.target.getBoundingClientRect().x;  
        positionY = event.clientY - event.target.getBoundingClientRect().y;  
        return [positionX, positionY];
    }

    canvas1.addEventListener('pointerdown', handlePointerDown1, {passive: true});

    canvas1.addEventListener('pointerup', handlePointerUp1, {passive: true});

    canvas1.addEventListener('pointermove', handlePointerMove1, {passive: true});

    ctx1.lineWidth = 2;
    ctx1.lineJoin = ctx1.lineCap = 'round';

    const clearPad1 = () => {  
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    };

    clearButton1.addEventListener('click', (event) => {  
        event.preventDefault();  
        clearPad1();
        if(form1.classList.contains("hidden")){
            form1.classList.toggle("hidden");
        }
        if(document.getElementById("csign1")) {
            document.getElementById("csign1").remove();
        }
    });
}

/** Canvas 2 */
if(canvas2){
    const ctx2 = canvas2.getContext('2d');

    let writingMode2 = false;

    const handlePointerDown2 = (event) => {  
        writingMode2 = true;  
        ctx2.beginPath();  
        const [positionX, positionY] = getCursorPosition2(event);  
        ctx2.moveTo(positionX, positionY);
    }

    const handlePointerUp2 = () => {  
        writingMode2 = false;
    }

    const handlePointerMove2 = (event) => {  
        if (!writingMode2) return  
        const [positionX, positionY] = getCursorPosition2(event);  
        ctx2.lineTo(positionX, positionY);  
        ctx2.stroke();
    }

    const getCursorPosition2 = (event) => {  
        positionX = event.clientX - event.target.getBoundingClientRect().x;  
        positionY = event.clientY - event.target.getBoundingClientRect().y;  
        return [positionX, positionY];
    }

    canvas2.addEventListener('pointerdown', handlePointerDown2, {passive: true});

    canvas2.addEventListener('pointerup', handlePointerUp2, {passive: true});

    canvas2.addEventListener('pointermove', handlePointerMove2, {passive: true});

    ctx2.lineWidth = 2;
    ctx2.lineJoin = ctx2.lineCap = 'round';

    const clearPad2 = () => {  
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    };

    clearButton2.addEventListener('click', (event) => {  
        event.preventDefault();  
        clearPad2();
        if(form2.classList.contains("hidden")){
            form2.classList.toggle("hidden");
        }
        if(document.getElementById("csign2")) {
            document.getElementById("csign2").remove();
        }
    });
}

/** Canvas 3 */
if(canvas3){
    const ctx3 = canvas3.getContext('2d');

    let writingMode3 = false;

    const handlePointerDown3 = (event) => {  
        writingMode3 = true;  
        ctx3.beginPath();  
        const [positionX, positionY] = getCursorPosition3(event);  
        ctx3.moveTo(positionX, positionY);
    }

    const handlePointerUp3 = () => {  
        writingMode3 = false;
    }

    const handlePointerMove3 = (event) => {  
        if (!writingMode3) return  
        const [positionX, positionY] = getCursorPosition3(event);  
        ctx3.lineTo(positionX, positionY);  
        ctx3.stroke();
    }

    const getCursorPosition3 = (event) => {  
        positionX = event.clientX - event.target.getBoundingClientRect().x;  
        positionY = event.clientY - event.target.getBoundingClientRect().y;  
        return [positionX, positionY];
    }

    canvas3.addEventListener('pointerdown', handlePointerDown3, {passive: true});

    canvas3.addEventListener('pointerup', handlePointerUp3, {passive: true});

    canvas3.addEventListener('pointermove', handlePointerMove3, {passive: true});

    ctx3.lineWidth = 2;
    ctx3.lineJoin = ctx3.lineCap = 'round';

    const clearPad3 = () => {  
        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    };

    clearButton3.addEventListener('click', (event) => {  
        event.preventDefault();  
        clearPad3();
        if(form3.classList.contains("hidden")){
            form3.classList.toggle("hidden");
        }
        if(document.getElementById("csign3")) {
            document.getElementById("csign3").remove();
        }
    });
}

/** Canvas 4 */

if(canvas4){
    const ctx4 = canvas4.getContext('2d');

    let writingMode4 = false;

    const handlePointerDown4 = (event) => {  
        writingMode4 = true;  
        ctx4.beginPath();  
        const [positionX, positionY] = getCursorPosition4(event);  
        ctx4.moveTo(positionX, positionY);
    }

    const handlePointerUp4 = () => {  
        writingMode4 = false;
    }

    const handlePointerMove4 = (event) => {  
        if (!writingMode4) return  
        const [positionX, positionY] = getCursorPosition4(event);  
        ctx4.lineTo(positionX, positionY);  
        ctx4.stroke();
    }

    const getCursorPosition4 = (event) => {  
        positionX = event.clientX - event.target.getBoundingClientRect().x;  
        positionY = event.clientY - event.target.getBoundingClientRect().y;  
        return [positionX, positionY];
    }

    canvas4.addEventListener('pointerdown', handlePointerDown4, {passive: true});

    canvas4.addEventListener('pointerup', handlePointerUp4, {passive: true});

    canvas4.addEventListener('pointermove', handlePointerMove4, {passive: true});

    ctx4.lineWidth = 2;
    ctx4.lineJoin = ctx4.lineCap = 'round';

    const clearPad4 = () => {  
        ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
    };

    clearButton4.addEventListener('click', (event) => {  
        event.preventDefault();  
        clearPad4();
        if(form4.classList.contains("hidden")){
            form4.classList.toggle("hidden");
        }
        if(document.getElementById("csign4")) {
            document.getElementById("csign4").remove();
        }
    });
}
if(form1){
    form1.addEventListener('click', (event) => {  
        event.preventDefault();
        const imageURL = canvas1.toDataURL();    
        /*
        const image = document.createElement('img');  
        image.src = imageURL;  
        image.height = canvas1.height;  
        image.width = canvas1.width;  
        image.style.display = 'none';  
        form1.parentElement.appendChild(image); */
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "csign1";
        input.id = "csign1";
        input.value = imageURL;
        document.getElementsByClassName("signimg")[0].appendChild(input);
        form1.classList.toggle("hidden");

        /*
        $.ajax({
            type: "POST",
            url: "/consultation.php",
            data: {signature1: dataUrl}
        })
        .done(function(respond){console.log("done: "+respond);})
        .fail(function(respond){console.log("fail");})
        .always(function(respond){console.log("always");}) */
        /*clearPad();*/
    });
}

if(form2){
    form2.addEventListener('click', (event) => {  
        event.preventDefault();
        const imageURL = canvas2.toDataURL();
        /*  
        const image = document.createElement('img');  
        image.src = imageURL;  
        image.height = canvas2.height;  
        image.width = canvas2.width;  
        image.style.display = 'none';  
        form2.appendChild(image);  */

        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "csign2";
        input.id = "csign2";
        input.value = imageURL;
        document.getElementsByClassName("signimg")[1].appendChild(input);
        form2.classList.toggle("hidden");
        /*
        $.ajax({
            type: "POST",
            url: "/consultation.php",
            data: {signature2: dataUrl}
        })
        .done(function(respond){console.log("done: "+respond);})
        .fail(function(respond){console.log("fail");})
        .always(function(respond){console.log("always");}) */
        /*clearPad();*/
    });
}

if(form3){
    form3.addEventListener('click', (event) => {  
        event.preventDefault();
        const imageURL = canvas3.toDataURL();  
        /*
        const image = document.createElement('img');  
        image.src = imageURL;  
        image.height = canvas3.height;  
        image.width = canvas3.width;  
        image.style.display = 'none';  
        form3.appendChild(image);  */

        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "csign3";
        input.id = "csign3";
        input.value = imageURL;
        document.getElementsByClassName("signimg")[0].appendChild(input);
        form3.classList.toggle("hidden");
        /*
        $.ajax({
            type: "POST",
            url: "/consultation.php",
            data: {signature3: dataUrl}
        })
        .done(function(respond){console.log("done: "+respond);})
        .fail(function(respond){console.log("fail");})
        .always(function(respond){console.log("always");}) */
        /*clearPad();*/
    });
}

if(form4){
    form4.addEventListener('click', (event) => {  
        event.preventDefault();
        const imageURL = canvas4.toDataURL();  
        /*
        const image = document.createElement('img');  
        image.src = imageURL;  
        image.height = canvas4.height;  
        image.width = canvas4.width;  
        image.style.display = 'none';  
        form4.appendChild(image); */

        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "csign4";
        input.id = "csign4";
        input.value = imageURL;
        document.getElementsByClassName("signimg")[1].appendChild(input);
        form4.classList.toggle("hidden");
        /*
        $.ajax({
            type: "POST",
            url: "/consultation.php",
            data: {signature4: dataUrl}
        })
        .done(function(respond){console.log("done: "+respond);})
        .fail(function(respond){console.log("fail");})
        .always(function(respond){console.log("always");}) 
        */
        /*clearPad();*/
    });
}