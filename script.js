function generateResume() {

    alert("Button clicked!");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;
    let education = document.getElementById("education").value;
    let projects = document.getElementById("projects").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill Name, Email and Phone fields");
        return;
    }

    document.getElementById("r-name").innerText = name;
    document.getElementById("r-email").innerText = email;
    document.getElementById("r-phone").innerText = phone;
    document.getElementById("r-skills").innerText = skills;
    document.getElementById("r-education").innerText = education;
    document.getElementById("r-projects").innerText = projects;
}
