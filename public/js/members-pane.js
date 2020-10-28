
$(document).ready(function () {
  /// dependecie
 // const moment = require("moment")

  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#peers");
  var sessionsContainer = $("#accordion");
  var membersContainer = $("#membersContainer");

  getMembers();
  getSessions();
  
  function settingSessionsAcordion(id, title, info, typeOfSession, membersLimit, timeS, timeE, Opt1TS, Opt1TE, Opt2TS, Opt2TE, Opt3TS, Opt3TE, members) {
        var thisSessionMembers = []
        var typeOfSessionColor;
        var sessionDate = moment(timeS).format("ddd DD")
        for (let j = 0; j < members.length; j++) {
            thisSessionMembers.push(`<li> ${members[j].first_name} ${members[j].last_name}</li>`)
        }
        // console.log(members)
        // console.log(members.first_name)
        
        switch(typeOfSession){
          case "request": {
                            typeOfSessionColor = "red";
                            typeOfSessionDisplay = `${title}  ${members[0].first_name} ${members[0].last_name}`
                            break;  
                          }
          case "general": {
                            typeOfSessionColor = "green";
                            typeOfSessionDisplay = `${sessionDate} ${title}   ${members[0].first_name} ${members[0].last_name}`
                            break
                          }
          case "focus": {
                          typeOfSessionColor = "orange";
                          typeOfSessionDisplay = `${sessionDate} ${title}   ${members[0].first_name} ${members[0].last_name}`
                            break
                        }
         }
       var sessionAcordion = (`
        <div class="card">
        <div class="card-header  ${typeOfSessionColor} btn" style="text-left" id="heading${id}" data-toggle="collapse" data-target="#collapse${id}" aria-expanded="false"
        aria-controls="collapse${id}">
            <h5 class="mb-0">
                <button class="btn collapsed" >
                    ${typeOfSessionDisplay}
                </button>
            </h5>
        </div>
        <div id="collapse${id}" class="collapse" aria-labelledby="heading${id}" data-parent="#accordion">
            <div class="card-body">
            <table>
                        <tr>
                            <td>
                                <h4>Title: ${title} </h4>
                                Session begins at: ${timeS}<br>
                                Sesion ends at: ${timeE}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6>Description:</h6> ${info}
                            </td>
                        </tr>
                        <td>
                            <h6>Participants:</h6>
                            <i>Limit:(${membersLimit})</i>
                            <ul>
                                ${thisSessionMembers}
                            </ul>
                        </td>
                    </table>
            </div>
        </div>
        </div>
        `) 
         sessionsContainer.append(sessionAcordion)
  }


  function getMembers() {
    $.get("/api/members", function (data) {
      membersList = [];
      for (let i = 0; i < data.length; i++) {
        membersList.push(`<li class="list-group-item list-group-item-action"> ${data[i].userName} </li> `);
      }
      membersContainer.append(membersList)
    });
  };

  function getSessions() {
    console.log("is goingin")
    $.get("/api/sessions", function (data) {
      sessionsAll = [];
      for (let i = 0; i < data.length; i++) {
        sessionsAll.push(settingSessionsAcordion(data[i].id, data[i].title, data[i].info, data[i].typeOfSession,data[i].membersLimit,
                                                 data[i].timeStart, data[i].timeEnd, data[i].Opt1_timeStart, data[i].Opt1_timeEnd,
                                                 data[i].Opt2_timeStart, data[i].Opt2_timeEnd, data[i].Opt3_timeStart, data[i].Opt3_timeEnd, data[i].members))
      }
    })
  }

})