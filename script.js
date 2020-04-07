const Keyboard = {
        
    inerText: {
        rus: [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del'],
        ['Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
        ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '🡅', 'Shift'],
        ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '🡄', '🡇', '🡆', 'Ctrl']],
  
        eng:  [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'del'],
        ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
        ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '🡅', 'shift'],
        ['ctrl', 'win', 'alt', 'Space', 'alt', '🡄', '🡇', '🡆', 'ctrl']]
    }

}
let shift = false;
  
const keyCode=[['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
        ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Del'],
        ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
        ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
        ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']];
  



let container = document.createElement('div');
container.className = 'container';
document.body.append(container);
let textArea=document.createElement('textarea');
textArea.className = 'textarea-style';
container.appendChild   (textArea);    

//create buttons
function createkeyboard(inerText){
    for(let i = 0;i<inerText.length;i++){
        let line = document.createElement('divv');
         line.classList.add("button-line-style");
         container.appendChild(line);
         for(let j = 0;j<inerText[i].length;j++){
            let btn = document.createElement('div');
            btn.classList.add(style(keyCode[i][j])); 
            btn.id = keyCode[i][j];
            btn.innerText = inerText[i][j];
            line.appendChild(btn);
         }

    }
}

//
function refresh(str) {
    if (str == "rus") {
        container.querySelectorAll('div').forEach(function(e,i) {
            e.innerText = Keyboard.inerText.rus.flat()[i];
        });
    }
}

function style(keyCode){
    if(keyCode == "Backspace" || keyCode == "ShiftRight" || keyCode == "CapsLock") return ("button-style-v1");
    else if(keyCode == "Tab" || keyCode == "Enter" || keyCode == "ShiftLeft") return ("button-style-v2");
    else if(keyCode == "Space") return ("button-style-v3");
    else return ("button-style");

}

window.addEventListener('load', () => {
    if(localStorage.getItem("lang") == "rus"){
        createkeyboard(Keyboard.inerText.rus);
        }
        else{createkeyboard(Keyboard.inerText.eng);}
});

document.addEventListener('keydown', (e) => {
    let btn = document.getElementById(e.code);
    btn.classList.add('button-style-press');

    //switch lang
    if (e.code == "ControlLeft" && e.shiftKey) {
        if (localStorage.getItem("lang") == "rus") {
            localStorage.setItem("lang", "eng");
        }
        else {
            localStorage.setItem("lang", "rus");
            refresh("rus");
        }
    }


});

document.addEventListener('keyup', (e) => {

    let btn  = document.getElementById(e.code);
    btn.classList.remove('button-style-press');
});


