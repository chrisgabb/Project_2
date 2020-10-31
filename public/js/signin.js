
var userNameInput = $("#signInUserName");
var passwordInput = $("#signInPassword");
var wrongUsernamePasswordDiv = $("#wrongusernamePassword");
//var signInButton = $("#signIn");

$(document).on("click", "#signIn", verifyThisMember);


function verifyThisMember(event) {
    event.preventDefault();

    $.get("/api/members", (data) => {
            for (let i = 0; i < data.length; i++) {
                if (userNameInput.val().trim() === data[i].userName) {
                    if (passwordInput.val().trim() === data[i].password) {
                        localStorage.setItem('myID', data[i].id);
                        document.location = "http://localhost:8080/home"
                    }
                }
            }
            return wrongUsernamePasswordDiv.append(`<i><p class="text-danger">Wrong user name or Password</p></i>`);
        });
}