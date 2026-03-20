function showMessage() {
    alert("Welcome to StudyBoost! Start your smart learning journey.");
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById("formMessage").innerText =
        "Message sent successfully!";
}