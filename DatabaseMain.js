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

document.getElementById("contactForm").addEventListener("submit", register);


function register(e) {
  e.preventDefault();
  rname = document.getElementById("rname").value;
  remail = document.getElementById("remail").value;
  rpass = document.getElementById("rpass").value;
  addr1 = document.getElementById("addr1").value;
  addr2 = document.getElementById("addr2").value;

  auth
    .createUserWithEmailAndPassword(remail, rpass)
    .then(function () {
      var user = auth.currentUser;
      var database_ref = database.ref();
      var user_data = {
        rname: rname,
        remail: remail,
        rpass: rpass,
        addr1: addr1,
        addr2: addr2,
      };
      database_ref.child("RussellGrocery/" + user.uid).set(user_data);
      alert("Registration Done Successfully!!!");
      window.location = "index.html";
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error: " + errorMessage);  // Display detailed error message
      console.error("Error code:", errorCode, "Message:", errorMessage); 
    });
}
