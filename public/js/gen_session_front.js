$(document).ready(function () {
  // Getting references to the name input and author container, as well as the table body
  var memberIdInput = $("#memberID")
  var typeInput = $("#type-toggle");
  var titleInput = $("#sesh-title");
  var infoInput = $("#sesh-desc");
  var memLimitInput = $("#mem-limit");
  var startTimeInput = $("#start-time");
  var endTimeInput = $("#end-time");
  var opt1StartInput = $("#opt-1-start");
  var opt1EndInput = $("#opt-1-end");
  var opt2StartInput = $("#opt-2-start");
  var opt2EndInput = $("#opt-2-end");
  var opt3StartInput = $("#opt-3-start");
  var opt3EndInput = $("#opt-3-end");
  var genAvailInput = $(".general-session");
  var reqAvailInput = $(".request-session");




  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("click", "#postIt", handleSessionFormSubmit);


  // A function to handle what happens when the form is submitted to create a new Author
  function handleSessionFormSubmit(event) {
    event.preventDefault();
    $.get("/api/sessions", function (data) {
       sessionId = data.length
       console.log(sessionId)
    })

    // Don't do anything if the name fields hasn't been filled out
    if (!typeInput.val().trim().trim() || !titleInput.val().trim().trim() || !memLimitInput.val().trim().trim()) {
      return;
    } else {
      upsertSession({
        title: titleInput
          .val()
          .trim(),
        typeOfSession: typeInput
          .val()
          .trim(),
        info: infoInput
          .val()
          .trim(),
        membersLimit: memLimitInput
          .val(),
        timeStart: moment(startTimeInput.val()).format("L LT")
          || null,
        timeEnd: moment(endTimeInput.val()).format("L TL")
          || null,
        Opt1_timeStart: opt1StartInput
          .val() || null,
        Opt1_timeEnd: opt1EndInput
          .val() || null,
        Opt2_timeStart: opt2StartInput
          .val() || null,
        Opt2_timeEnd: opt2EndInput
          .val() || null,
        Opt3_timeStart: opt3StartInput
          .val() || null,
        Opt3_timeEnd: opt3EndInput
          .val() || null,
      });
        upsertMemberSession({
        session_id: sessionId,
        member_id: memberIdInput
        })
       
    }
  }

  // A function for creating a member. Calls upon completion
  function upsertSession(seshData) {
    console.log(seshData)
    $.post("/api/sessions", seshData)
  }
  function upsertMemberSession(sesmem)
    $.post("/api/session_member", sesmem)
});
