import { database, ref, set, get, child } from "./firebaseConfig.js";

function markAttendance(studentId, period) {
    let attendanceRef = ref(database, `attendance/${studentId}/${period}`);
    set(attendanceRef, {
        status: "Present",
        timestamp: new Date().toISOString()
    }).then(() => {
        console.log("Attendance marked successfully");
    }).catch((error) => {
        console.error("Error marking attendance:", error);
    });
}

function getAttendance(studentId) {
    let attendanceRef = ref(database, `attendance/${studentId}`);
    get(attendanceRef).then((snapshot) => {
        if (snapshot.exists()) {
            console.log("Attendance Data:", snapshot.val());
        } else {
            console.log("No attendance records found");
        }
    }).catch((error) => {
        console.error("Error fetching attendance:", error);
    });
}

export { markAttendance, getAttendance };
