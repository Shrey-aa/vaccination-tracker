// Function to handle navigation between screens
function navigate(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Function to save baby registration data
function saveRegistration() {
    let babyName = document.getElementById("babyName").value;
    let dob = document.getElementById("dob").value;
    let guardian = document.getElementById("guardian").value;
    let contact = document.getElementById("contact").value;

    if (babyName && dob && guardian && contact) {
        alert("Registration successful! Baby's details saved.");
        navigate('home');
    } else {
        alert("Please fill in all fields.");
    }
}

// Function to show vaccine details (dummy function for now)
function showVaccineDetails(vaccine) {
    alert("Details about " + vaccine + " vaccine:\n- Prevents severe disease\n- Common side effects: Mild fever, swelling\n- Consult a doctor if severe reactions occur.");
}

// Function to send SMS Reminder (uses sms: protocol for manual sending)
function sendSMSReminder() {
    let phoneNumber = prompt("Enter phone number to send reminder:");
    if (phoneNumber) {
        let message = encodeURIComponent("Reminder: Your baby's vaccination is due. Please visit the health center.");
        window.location.href = `sms:${phoneNumber}?body=${message}`;
    }
}

// Function to submit an adverse event report
function submitAdverseEvent() {
    let vaccine = document.getElementById("vaccine").value;
    let sideEffect = document.getElementById("sideEffect").value;

    if (vaccine && sideEffect) {
        alert("Adverse event reported successfully.");
        navigate('home');
    } else {
        alert("Please enter vaccine name and side effect.");
    }
}

// Function to submit feedback
function submitFeedback() {
    let feedbackText = document.getElementById("feedbackText").value;
    if (feedbackText) {
        alert("Thank you for your feedback!");
        navigate('home');
    } else {
        alert("Please enter feedback before submitting.");
    }
}
