window.onload = function() {
    document.getElementById("circle").style.display = "none";
    document.getElementById("inpuser").value = null;
    document.getElementById("inppass").value = null;
}





function person(name, password) {
    this.name = name;
    this.password = password;
}

function login() {
    var user = document.getElementById("inpuser").value;
    var pass = document.getElementById("inppass").value;


    if (user == "") {
        return document.getElementById("result").innerHTML = "Username cannot be empty";
    } else if (pass == "") {
        return document.getElementById("result").innerHTML = "Password cannot be empty";
    } else {
        return document.getElementById("circle").style.display = "inline",

            document.getElementById("result").innerHTML = "";


    }

}