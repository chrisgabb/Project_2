$(document).ready(function () {
  // Getting references to the name input and author container, as well as the table body

  var typeInput = $("#type-toggle");
  var tiTLeInput = $("#sesh-title");
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
  var sessionId;
  var memberIdLocalStorage = parseInt(localStorage.getItem('myID').trim())


  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("click", "#postIt", handleSessionFormSubmit);
  $(document).on("click", "#opt1Button", takeiton);
  $(document).on("click", "#tagAlong", tagAlong);

  function takeiton(event) {
    event.preventDefault();
    sessionId = $(this).parent().parent().attr('id')
    putTimesInSession({
      id: sessionId,
      typeOfSession: "focus",
      timeStart: $(this).parent().parent().attr('data1'),
      timeEnd: $(this).parent().parent().attr('data2')
    });
  } 

  function tagAlong(event){
    event.preventDefault();
    sessionId = $(this).parent().attr('id')
    addseshmemb()
  }

  function putTimesInSession(thistime) {
    $.ajax({
      method: "PUT",
      url: "/api/sessions",
      data: thistime
    })
      .then(function() {
       addseshmemb();
      });
  };

  function addseshmemb(){
    seshMembData ={
      member_id: memberIdLocalStorage,
      session_id: sessionId
      };
    console.log(seshMembData)
    $.post("/api/sessionMember", seshMembData)
    document.location.reload();
  }


  async function handleSessionFormSubmit(event) {
    event.preventDefault();
    await $.get("/api/sessions", function (data) {
      sessionId = data.length + 1
    })
    // Don't do anything if the fields hasn't been filled out
    if (!typeInput.val().trim() || !tiTLeInput.val().trim() || !memLimitInput.val().trim()) {
      return;
    } else {
      upsertSession({
        title: tiTLeInput
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
        timeEnd: moment(endTimeInput.val()).format("L LT")
          || null,
        Opt1_timeStart: moment(opt1StartInput.val()).format("L LT")
          || null,
        Opt1_timeEnd: moment(opt1EndInput.val()).format("L LT")
          || null,
        Opt2_timeStart: moment(opt2StartInput.val()).format("L LT")
          || null,
        Opt2_timeEnd: moment(opt2EndInput.val()).format("L LT")
          || null,
        Opt3_timeStart: moment(opt3StartInput.val()).format("L LT")
          || null,
        Opt3_timeEnd: moment(opt3EndInput.val()).format("L LT")
          || null,
      });
    }
  }

  // A function for creating a member. Calls upon completion
  function upsertSession(seshData) {
    $.post("/api/sessions", seshData)
    addseshmemb();
  }




});

