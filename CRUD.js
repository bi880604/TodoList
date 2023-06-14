// console.log(database)
// database.ref().set({a2:'3'});
// database.ref('test1').set("lololol");


const myName=database.ref('test1');
let snapshot1;
const onceSample = document.querySelector('.send');
const inputTest = document.querySelector('.inputText');

onceSample.addEventListener('click', () =>{
    console.log(inputTest.value)
    database.ref('todoList').push(inputTest.value);
    snapshot1 = database.ref('/todoList');
})


//刪除
// const deleteTest = document.querySelector('.deleteTest');
// const toDo = database.ref('todoList');
// toDo.child(0).remove();

// deleteTest.addEventListener('click', ()=>{
//     toDo.child('-NXrUO3i8ugKkQThKF-q').remove();
// })

// myName.once('value',snap=>{
//     console.log(snap.val())
//     document.querySelector('.abcd').textContent = snap.val();
//     console.log(snap.val());
// })