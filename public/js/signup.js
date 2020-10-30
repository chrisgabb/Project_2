$(document).ready(function () {
 
  var firstNameInput = $("#member-first-name");
  var lastNameInput = $("#member-last-name")
  var emailInput = $("#member-email")
  var userNameInput = $("#member-username")
  var passwordInput = $("#member-password")

  $(document).on("submit", handleMemberFormSubmit);
 
  async function handleMemberFormSubmit(event) {
    event.preventDefault();
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
      getMemberID()
    }
  }
  function getMemberID() {
    console.log("PLEASE")
    $.get("/api/members", function (data) {
      var memberID = data.length + 1
      localStorage.setItem('myID', memberID)
    }).then(function nextPage() { return document.location = "http://localhost:8080/home" })
  }
  function upsertMember(memberData) {
    $.post("api/members", memberData)
  }
});