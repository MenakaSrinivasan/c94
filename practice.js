
// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyAwgvK-XtN3hLLVxxhr2CinGW8JWgIETU0",
  authDomain: "kwitter1-97652.firebaseapp.com",
  databaseURL: "https://kwitter1-97652-default-rtdb.firebaseio.com",
  projectId: "kwitter1-97652",
  storageBucket: "kwitter1-97652.appspot.com",
  messagingSenderId: "738378522815",
  appId: "1:738378522815:web:fdd1074759c268fd75660a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser(){
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


