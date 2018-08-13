function checkForm(form) {
    if (form.Surname.value == "") {
        alert("Error: Surname cannot be blank!");
        form.Surname.focus();
        return false;
    }
    re = /^\w+$/;
    if (!re.test(form.Surname.value)) {
        alert("Error: Surname must contain only letters, numbers and underscores!");
        form.Surname.focus();
        return false;
    }
    if (form.Name.value == "") {
        alert("Error: Name cannot be blank!");
        form.Name.focus();
        return false;
    }
    re = /^\w+$/;
    if (!re.test(form.Name.value)) {
        alert("Error: Name must contain only letters, numbers and underscores!");
        form.Name.focus();
        return false;
    }
    if (form.email.value == "") {
        alert("Please enter your email");
        form.email.focus();
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var result = re.test(String(this.email.value).toLowerCase());
        if (result == 0) {
            alert('Please enter a valide email');
            form.email.focus();
            return false;
        }
    }

    if (form.Password.value != "" && form.Password.value == form.CPassword.value) {
        if (form.Password.value.length < 8) {
            alert("Error: Password must contain at least six characters!");
            form.Password.focus();
            return false;
        }
        if (form.Password.value == form.Surname.value) {
            alert("Error: Password must be different from Surname!");
            form.Password.focus();
            return false;
        }
        re = /[0-9]/;
        if (!re.test(form.Password.value)) {
            alert("Error: password must contain at least one number (0-9)!");
            form.Password.focus();
            return false;
        }
        re = /[a-z]/;
        if (!re.test(form.Password.value)) {
            alert("Error: password must contain at least one lowercase letter (a-z)!");
            form.Password.focus();
            return false;
        }
        re = /[A-Z]/;
        if (!re.test(form.Password.value)) {
            alert("Error: password must contain at least one uppercase letter (A-Z)!");
            form.Password.focus();
            return false;
        }
    } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        form.Password.focus();
        return false;
    }
    var phone = form.phone.value;
    var phoneno = /^\d{8}$/;
    if (!phone.match(phoneno)) {
        alert("Please enter a valid number phone");
        form.phone.focus();
        return false
    }
    if (form.message.value == "") {
        alert("Message cannot be blank!");
        form.message.focus();
        return false;
    }
}