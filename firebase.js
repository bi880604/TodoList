// let test = require('firebase');
import { initializeApp } from "firebase/app";
import { getAnalytics,isSupported } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/database";






// console.log(initializeApp)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJJjBea0C3-lG1lqvUMxbWlLYV6dtjFGc",
    authDomain: "todolist-43913.firebaseapp.com",
    databaseURL: "https://todolist-43913-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todolist-43913",
    storageBucket: "todolist-43913.appspot.com",
    messagingSenderId: "907370095951",
    appId: "1:907370095951:web:af3e666d927077d25e113a",
    measurementId: "G-PL3LY590GE"
  };
  
  firebase.initializeApp(firebaseConfig); 

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);




  const database = firebase.database();
  export const todoListFromDB = database.ref("todoList");


//新增
// todoListFromDB.push("123456");


//刪除
const checkData = todoListFromDB.child("-NXsYti3wx2hrSuaVhRY");  

checkData.once("value")
.then((snapshot) => {
    if(snapshot.exists()) {
        checkData.remove()
        .then(() => {
            console.log("刪除成功");
        })
        .catch((error) => {
            console.error("刪除失敗",error);
        });
    }
    else{
        console.log("無此資料");
    }
})
.catch((error) => {
    console.error("檢查資料發生錯誤",error);
})

