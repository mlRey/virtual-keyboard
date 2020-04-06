
let container = document.createElement('div');
container.className = 'container';
document.body.append(container);
let textArea=document.createElement('textarea');
textArea.className = 'textarea-style';
container.appendChild   (textArea);    

for(let i = 0;i<5;++i){
    let line = document.createElement('div');
    line.className = "button-line-style";
    container.appendChild(line);
    for(let i = 0;i<14;i++){
        let div = document.createElement('div');
        div.className = "button-style";
        line.appendChild(div);
    }

}


