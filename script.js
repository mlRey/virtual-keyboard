const Keyboard = {

    inerText: {
        rus: [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del'],
        ['Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
        ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']],

        eng: [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
        ['Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']]
    },

    spec_symbol: {
        rus: {
            'Digit1': '!', 'Digit2': '\"', 'Digit3': '№', 'Digit4': ';', 'Digit5': '%',
            'Digit6': ':', 'Digit7': '?', 'Digit8': '*', 'Digit9': '(', 'Digit0': ')', 'Minus': '_', 'Equal': '+', 'Slash': ','
        },

        eng: {
            'Backquote': '~', 'Digit1': '!', 'Digit2': '@', 'Digit3': '#', 'Digit4': '$', 'Digit5': '%',
            'Digit6': '^', 'Digit7': '&', 'Digit8': '*', 'Digit9': '(', 'Digit0': ')', 'Minus': '_', 'Equal': '+', 'Slash': '?', 'BracketLeft': '{',
            'BracketRight': '}', 'Semicolon': ':', 'Quote': '"', 'Comma': '<', 'Period': '>'
        },

    }


}

let caps = false;

const keyCode = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'],
['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']];


let container = document.createElement('div');
container.className = 'container';
document.body.append(container);
let textArea = document.createElement('textarea');
textArea.className = 'textarea-style';
container.appendChild(textArea);

//create buttons
function createkeyboard(inerText) {
    for (let i = 0; i < inerText.length; i++) {
        let line = document.createElement('divv');
        line.classList.add("button-line-style");
        container.appendChild(line);
        for (let j = 0; j < inerText[i].length; j++) {
            let btn = document.createElement('div');
            btn.classList.add(style(keyCode[i][j]));
            btn.id = keyCode[i][j];
            btn.innerText = inerText[i][j];
            line.appendChild(btn);
        }

    }
}

// change div inerText
function refresh(str) {
    if (str == "rus") {
        container.querySelectorAll('div').forEach(function (e, i) {
            e.innerText = Keyboard.inerText.rus.flat()[i];
        });
    }
    if (str == "eng") {
        container.querySelectorAll('div').forEach(function (e, i) {
            e.innerText = Keyboard.inerText.eng.flat()[i];
        });
    }
    if (str == "shift") {

        container.querySelectorAll('div').forEach(function (e, i) {
            if (e.innerText.length == '1') {
                e.innerText = e.innerText.toUpperCase();
            }

            if (localStorage.getItem("lang") == "rus") {
                if (Keyboard.spec_symbol.rus[e.id] != undefined) {
                    e.innerText = Keyboard.spec_symbol.rus[e.id];
                }
            }
            if (localStorage.getItem("lang") == "eng") {
                if (Keyboard.spec_symbol.eng[e.id] != undefined) {
                    e.innerText = Keyboard.spec_symbol.eng[e.id];
                }
            }


        });
    }
    if (str == "shift-off") {
        if (localStorage.getItem("lang") == "rus") { refresh('rus'); }
        if (localStorage.getItem("lang") == "eng") { refresh('eng'); }

    }

}

//button_style
function style(keyCode) {
    if (keyCode == "Backspace" || keyCode == "ShiftRight" || keyCode == "CapsLock") return ("button-style-v1");
    else if (keyCode == "Tab" || keyCode == "Enter" || keyCode == "ShiftLeft") return ("button-style-v2");
    else if (keyCode == "Space") return ("button-style-v3");
    else if (keyCode == "ControlLeft" || keyCode == "MetaLeft" || keyCode == "AltLeft" || keyCode == "ControlRight" || keyCode == "AltRight" || keyCode == "Delete") return ("button-style-v4");
    else return ("button-style");
}

// key press
document.addEventListener('keydown', (e) => {
    textArea.blur();
    if (keyCode.flat().includes(e.code)) {
        let btn = document.getElementById(e.code);
        btn.classList.add('button-style-press');

        //switch lang
        if (e.code == "ControlLeft" && e.shiftKey) {
            if (localStorage.getItem("lang") == "rus") {
                localStorage.setItem("lang", "eng");
                refresh("eng");
            }
            else {
                localStorage.setItem("lang", "rus");
                refresh("rus");
            }
        }

        // shift
        if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
            if (caps == true) {
                refresh("shift-off");
            }
            else refresh("shift");
        }

        // CAPSLOCK
        if (e.code == "CapsLock") { caps_on(); }


        if (btn.innerText.length == "1") {

            setSelectionRange(btn.innerText);
        }
        if (e.code == "Space") setSelectionRange(" ");
        if (e.code == "Tab") setSelectionRange("\t");
        if (e.code == "Enter") setSelectionRange("\n");
        if (e.code == "Backspace") {
            let pos = textArea.selectionStart;
            if (pos != 0) {
                textArea.value = textArea.value.substring(0, pos - 1) + textArea.value.slice(pos);
                textArea.selectionStart = pos - 1;
                textArea.selectionEnd = pos - 1;
            }
        }
        if (e.code == "Delete") {
            let pos = textArea.selectionStart;
            if (pos != textArea.length) {
                textArea.value = textArea.value.substring(0, pos) + textArea.value.slice(pos + 1);
                textArea.selectionStart = pos;
                textArea.selectionEnd = pos;
            }
        }

    }
});

document.addEventListener('keyup', (e) => {

    if (keyCode.flat().includes(e.code)) {
        let btn = document.getElementById(e.code);

        btn.classList.remove('button-style-press');

        if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
            if (caps == true) {
                refresh("shift");
            }
            else refresh("shift-off");
        }

    }
});

// mouse click
document.addEventListener('mousedown', (e) => {
    textArea.focus();
    if (keyCode.flat().includes(e.target.id)) {
        let btn = document.getElementById(e.target.id);
        btn.classList.add('button-style-press');

        //switch lang
        if (e.target.id == "ControlLeft" && e.shiftKey) {
            if (localStorage.getItem("lang") == "rus") {
                localStorage.setItem("lang", "eng");
                refresh("eng");
            }
            else {
                localStorage.setItem("lang", "rus");
                refresh("rus");
            }
        }

        // shift
        if (e.target.id == "ShiftLeft" || e.target.id == "ShiftRight") {
            if (caps == true) {
                refresh("shift-off");
            }
            else refresh("shift");
        }

        // CAPSLOCK
        if (e.target.id == "CapsLock") { caps_on(); }


        if (btn.innerText.length == "1") {

            setSelectionRange(btn.innerText);
        }
        if (e.target.id == "Space") setSelectionRange(" ");
        if (e.target.id == "Tab") setSelectionRange("\t");
        if (e.target.id == "Enter") setSelectionRange("\n");
        if (e.target.id == "Backspace") {
            let pos = textArea.selectionStart;
            if (pos != 0) {
                textArea.value = textArea.value.substring(0, pos - 1) + textArea.value.slice(pos);
                textArea.selectionStart = pos - 1;
                textArea.selectionEnd = pos - 1;
            }
        }
        if (e.target.id == "Delete") {
            let pos = textArea.selectionStart;
            if (pos != textArea.length) {
                textArea.value = textArea.value.substring(0, pos) + textArea.value.slice(pos + 1);
                textArea.selectionStart = pos;
                textArea.selectionEnd = pos;
            }
        }

    }
});

document.addEventListener('mouseup', (e) => {

    if (keyCode.flat().includes(e.target.id)) {
        let btn = document.getElementById(e.target.id);

        btn.classList.remove('button-style-press');

        if (e.target.id == "ShiftLeft" || e.target.id == "ShiftRight") {
            if (caps == true) {
                refresh("shift");
            }
            else refresh("shift-off");
        }

    }
});

// position on textarea
function setSelectionRange(text) {
    textArea.setRangeText(text, textArea.selectionStart, textArea.selectionEnd, "end");

}
// capslock on/off
function caps_on() {
    if (caps == false) {
        container.querySelectorAll('div').forEach(function (e, i) {
            if (e.innerText.length == '1') {
                e.innerText = e.innerText.toUpperCase();
            }
        });
        caps = true;
    }
    else {
        container.querySelectorAll('div').forEach(function (e, i) {
            if (e.innerText.length == '1') {
                e.innerText = e.innerText.toLowerCase();
            }
        });
        caps = false;
    }
}


window.addEventListener('load', () => {

    if (localStorage.getItem("lang") == "rus") {
        createkeyboard(Keyboard.inerText.rus);
    }
    else { createkeyboard(Keyboard.inerText.eng); }
});