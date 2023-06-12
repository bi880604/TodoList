let sendData = document.querySelector('.send');
let list = document.querySelector('.list');
let dataBase = JSON.parse(localStorage.getItem('listItem')) || [];

sendData.addEventListener('click', addData);

list.addEventListener('click', delData);

updateList(dataBase);

function addData(e){
    e.preventDefault();
    let txt = document.querySelector('.inputText').value;
    if(!txt.trim()){
        alert('請輸入文字!!')
        return;
    }

    let todo = {
        content: txt
    };
    dataBase.push(todo);
    updateList(dataBase);

    localStorage.setItem('listItem',JSON.stringify(dataBase));

    // document.querySelector('.inputText').value = "";
}

function updateList(dataBase){
    str = '';
    for(i = 0 ; i < dataBase.length ; i++){
        str += '<li><a href="#" data-num=' + i + '>刪除 </a>'+
        (i + 1) + '. ' + dataBase[i].content +'</li>';
    }
    list.innerHTML = str;
}

function delData(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return;};

    var num = e.target.dataset.num;
    dataBase.splice(num,1);

    localStorage.setItem('listItem',JSON.stringify(dataBase));
    updateList(dataBase);
}




// let a = {
//     test1 : "1",
//     test2 : "2"
// }

// console.log(JSON.stringify(a));