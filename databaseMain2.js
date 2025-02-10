const firebaseConfig = {
    apiKey: "AIzaSyCTW6f1kdsl1IpqviT7RPiXaG6iRkJxBZ0",
    authDomain: "newrussell-24b7c.firebaseapp.com",
    databaseURL: "https://newrussell-24b7c-default-rtdb.firebaseio.com",
    projectId: "newrussell-24b7c",
    storageBucket: "newrussell-24b7c.appspot.com",
    messagingSenderId: "37643105347",
    appId: "1:37643105347:web:7d03d87c057ad1415090f6"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();
  
  document.getElementById("contactForm1").addEventListener("submit", login);
  function login(e) {
    e.preventDefault();
    name1 = document.getElementById("name1").value;
    pass = document.getElementById("pass").value;
  
    auth
      .signInWithEmailAndPassword(name1, pass)
      .then(function () {
        var user = auth.currentUser;
        var database_ref = database.ref();
        var user_data = {
          name1: name1,
          pass: pass,
        };
        database_ref.child("RussellGrocery/" + user.uid).update(user_data);
        alert("Logined Successfully!!!");
        window.location = "index.html";
      })
      .catch(function () {
        alert("Invalid Entry");
      });
  }
  