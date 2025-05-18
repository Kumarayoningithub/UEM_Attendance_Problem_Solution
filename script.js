// Firebase Configuration
const firebaseConfig = {
    authDomain: "attendancemonitoring-abd09.firebaseapp.com",
    projectId: "attendancemonitoring-abd09",
    storageBucket: "attendancemonitoring-abd09.firebasestorage.app",
    messagingSenderId: "414533818125",
    appId: "1:414533818125:web:af473f13f2bd4cc8274244",
    measurementId: "G-N5EDJ3QWP2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login Function
function login() {
    let email = document.getElementById("enrollment").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            console.log("Login Successful!", user);

            // Fetch user details from database
            firebase.database().ref("users/" + user.uid).once("value", (snapshot) => {
                if (snapshot.exists()) {
                    let userData = snapshot.val();
                    let role = userData.role;

                    // Redirect based on role
                    if (role === "admin") {
                        window.location.href = "admin_dashboard.html";
                    } else if (role === "teacher") {
                        window.location.href = "teacher_dashboard.html";
                    } else if (role === "student") {
                        window.location.href = "student_dashboard.html";
                    }
                } else {
                    document.getElementById("error-message").innerText = "User data not found!";
                    firebase.auth().signOut();
                }
            });
        })
        .catch((error) => {
            document.getElementById("error-message").innerText = error.message;
        });
}

// Admin Restriction - Prevent unauthorized access to Admin Dashboard
function checkAdminAccess() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            firebase.database().ref("users/" + user.uid).once("value", (snapshot) => {
                if (snapshot.exists()) {
                    let userData = snapshot.val();
                    if (userData.role !== "admin") {
                        alert("Access Denied! You are not an admin.");
                        window.location.href = "index.html";
                    }
                }
            });
        } else {
            window.location.href = "index.html";
        }
    });
}

// Call this function in `admin_dashboard.html` to check access
if (window.location.pathname.includes("admin_dashboard.html")) {
    checkAdminAccess();
}


function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
