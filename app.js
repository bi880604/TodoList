const sendBtn = document.querySelector('.send');
const list = document.querySelector('.list');
const todoContent = document.querySelector('.inputText')
sendBtn.addEventListener('click', addData);
list.addEventListener('click', delData);

let todoList;

let todoListFromDB = firebase.database().ref('todoList');

todoListFromDB.on('value', snap =>{
    let str = '';
    todoList = snap.val();
    let count = 0;
    for(let item in todoList){
        console.log(item);
        str += `<li><a class="btn btn-outline-danger" href="#" data-num=${item}>刪除</a> ${count+1}.${todoList[item]}</li>`;
        count+=1;
    }
    count = 0;
    list.innerHTML = str;
});

function addData(e){
    fetch('http://10.2.201.197:8000/Will').then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
    // e.preventDefault();
    // let content = todoContent.value;
    // todoListFromDB.push(content);
}

function delData(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A'){
        return;
    }; 
    var num = e.target.dataset.num; 
    todoListFromDB.child(num).remove();
}




// function addData(e){
//     e.preventDefault();
//     let txt = document.querySelector('.inputText').value;
//     if(!txt.trim()){
//         alert('請輸入文字!!')
//         return;
//     }

//     let todo = {
//         content: txt
//     };
//     dataBase.push(todo);
//     updateList(dataBase);

//     localStorage.setItem('listItem',JSON.stringify(dataBase));

//     // document.querySelector('.inputText').value = "";
// }

// function updateList(dataBase){
//     str = '';
//     for(i = 0 ; i < dataBase.length ; i++){
//         str += '<li><a href="#" data-num=' + i + '>刪除 </a>'+
//         (i + 1) + '. ' + dataBase[i].content +'</li>';
//     }
//     list.innerHTML = str;
// }

// function delData(e){
//     e.preventDefault();
//     if(e.target.nodeName !== 'A'){return;};

//     var num = e.target.dataset.num;
//     dataBase.splice(num,1);

//     localStorage.setItem('listItem',JSON.stringify(dataBase));
//     updateList(dataBase);
// }




// let a = {
//     test1 : "1",
//     test2 : "2"
// }

// console.log(JSON.stringify(a));