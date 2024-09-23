// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  SignOut,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getDatabase } from "fn";
// TODO: Add SDks for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apikey: "AIzaSyAPIgalgFTTmvtxFQkIhJ0Xf3HZj7UT4e0",
  authDomain: "fireblog-e7aaa.firebaseapp.com",
  projectId: "fireblog-e7aaa",
  storageBucket: "fireblog-e7aaa.appspot.com",
  messagingSenderId: "923986992859",
  appId: "1:923986992859:web:08da20934f300e5436f6fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const my_blog = document.querySelector(".my_blog");
const login_page = document.querySelector(".login");

onAuthStateChanged(auth, (user) => {
  if (user) {
    my_blog.classList.add("show");
    login_page.classList.add("hide");
  } else {
    my_blog.classList.remove("show");
    login_page.classList.remove("hide");
  }
});

function SignIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password).then((userCredinals) => {
    console.log(userCredinals.user.uid);
  });
}

const Sign_btn = document.querySelector("#sign_in");
Sign_btn.addEventListener("click", signInUser);

// sign out logout

const sign_out_btn = document.querySelector("#logout");
sign_out_btn.addEventListener("click", () => {
  SignOut(auth)
    .then(() => {
      //
    })
    .catch(error)(() => {
    console.log("error" + error);
  });
});

//------------
//Blog section code

const add_post_Btn = document.querySelector("#post_btn");

function Add_post() {
  const title = document.queerySelector("#title").value;
  const post_content = document.queerySelector("#post_content").value;
  const id = Math.floor(Math.random() * 100);

  set;
}

add_post_Btn.addEventListener("click", Add_post);
