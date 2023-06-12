const firebaseConfig = {
    apiKey: "AIzaSyCJJjBea0C3-lG1lqvUMxbWlLYV6dtjFGc",
    authDomain: "todolist-43913.firebaseapp.com",
    projectId: "todolist-43913",
    storageBucket: "todolist-43913.appspot.com",
    databaseURL: "https://todolist-43913-default-rtdb.asia-southeast1.firebasedatabase.app/",
    messagingSenderId: "907370095951",
    appId: "1:907370095951:web:af3e666d927077d25e113a",
    measurementId: "G-PL3LY590GE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
let database = firebase.database()