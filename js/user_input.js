function validateForm() {
    // Get the values from the firstName input field in the form
    const firstName = document.getElementById("firstName").value;

    // Get the values from the lastName input field in the form
    const lastName = document.getElementById("lastName").value;

    // Get the values of the password input field in the form
    const password = document.getElementById("password").value;

    // Get the values of the confirmPassword input field in the form
    const confirmPassword = document.getElementById("confirmPassword").value;

    // conbine the first and last name and take away any white space
    const username = firstName + " " + lastName;

    // Retrieve the zip code input by the user
    const zipCode = document.getElementById("zipCode").value;

    // Check if the password and confirm password are the same
    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    
    // Check if the password is less than 20 characters
    }else if (username.length > 20) {
        alert("Username is too long. Needs to be less than 20 characters!");
        return false;
    
    }// Check if the zip code is a 5-digit number
    if (!/^\d{5}$/.test(zipCode)) {
        alert("Zip code is invalid. It must be 5 digits.");
        return false;
    }else
    alert("Welcome " + username + "! You just won 1 millions dollars!");
    document.getElementById("registrationForm").submit();
}