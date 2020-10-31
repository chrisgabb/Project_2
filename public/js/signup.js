$(document).ready(function () {
 
  var firstNameInput = $("#member-first-name");
  var lastNameInput = $("#member-last-name")
  var emailInput = $("#member-email")
  var userNameInput = $("#member-username")
  var passwordInput = $("#member-password")

  $(document).on("submit", handleMemberFormSubmit);
 
  async function handleMemberFormSubmit(event) {
    event.preventDefault();
   await $.get("/api/members", function (data) {
      console.log(data.length)
      var memberID = data.length+1 ;
      console.log(memberID);
      localStorage.setItem('myID', memberID)
    });
   // getMemberID()
    if (!firstNameInput.val().trim().trim() || !lastNameInput.val().trim().trim() || !emailInput.val().trim().trim() || !userNameInput.val().trim().trim() || !passwordInput.val().trim().trim()) {
      return;
    } else {
      await upsertMember({
        first_name: firstNameInput
          .val()
          .trim(),
        last_name: lastNameInput
          .val()
          .trim(),
        email: emailInput
          .val()
          .trim(),
        userName: userNameInput
          .val()
          .trim(),
        password: passwordInput
          .val()
          .trim(),
      });
    }
  }
  function getMemberID() {
    
  }

 async function upsertMember(memberData) {
   await $.post("api/members", memberData)
  return document.location = "http://localhost:8080/home" 
 }
});