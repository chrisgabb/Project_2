$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var firstNameInput = $("#member-first-name");
  var lastNameInput = $("#member-last-name")
  var emailInput = $("#member-email")
  var userNameInput = $("#member-username")
  var passwordInput = $("#member-password")
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", handleMemberFormSubmit);
  // A function to handle what happens when the form is submitted to create a new Author
  function handleMemberFormSubmit(event) {
    event.preventDefault();
    // Don’t do anything if the name fields hasn’t been filled out
    if (!firstNameInput.val().trim().trim() || !lastNameInput.val().trim().trim() || !emailInput.val().trim().trim() || !userNameInput.val().trim().trim() || !passwordInput.val().trim().trim()) {
      return;
    } else {
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertMember({
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
  // A function for creating a member. Calls getAuthors upon completion
  async function upsertMember(memberData) {
    await $.post("/api/members", memberData)
    console.log(memberData)
    $.get("/api/members", function (data) {
      memberId = data.length
      console.log(memberId)
      console.log(data[memberId])
    })
    //window.location = "http://localhost:8080/home"
  }
});