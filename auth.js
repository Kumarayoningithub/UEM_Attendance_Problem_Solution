import { auth } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

function login() {
    let email = document.getElementById("enrollment").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            console.log("Login Successful!", user);

            if (role === "admin") {
                window.location.href = "admin_dashboard.html";
            } else if (role === "teacher") {
                window.location.href = "teacher_dashboard.html";
            } else if (role === "student") {
                window.location.href = "student_dashboard.html";
            }
        })
        .catch((error) => {
            document.getElementById("error-message").innerText = error.message;
        });
}

document.getElementById("login-button").addEventListener("click", login);