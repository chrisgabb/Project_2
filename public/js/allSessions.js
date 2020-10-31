
$(document).ready(function () {
  /// dependecie
 // const moment = require("moment")

  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#peers");
  var sessionsContainer = $("#accordion");
  var membersContainer = $("#membersContainer");
  var counter = 0;
  getMembers();
  getSessions();
  
  function settingSessionsAcordion(id, title, info, typeOfSession, membersLimit, timeS, timeE, Opt1TS, Opt1TE, Opt2TS, Opt2TE, Opt3TS, Opt3TE, members) {
        var thisSessionMembers = []
        var typeOfSessionColor;
        var sessionDate = moment(timeS).format("ddd, MMM DD")
        for (let j = 0; j < members.length; j++) {
            thisSessionMembers.push(`<li> ${members[j].first_name} ${members[j].last_name}</li>`)
        }
        collapseCard = ` <div id="collapse${id}" class="collapse" aria-labelledby="heading${id}" data-parent="#accordion">
                            <div class="card-body">
                            <table border-spacing: 30px">
                                        <tr>
                                            <td>
                                                <h4>Title: ${title} </h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Session begins:</h6> ${moment(timeS).format("ddd L LT" )}<br>
                                                <h6>Sesion ends:</h6> ${moment(timeE).format("ddd L LT")}
                                            </td>
                                            <td>  </td>
                                            <td rowspan="2"class="text-right ml-3" style="vertical-align:top">
                                            <h6>Participants:</h6>
                                            <i>Limit:(${membersLimit})</i>
                                            <ul>
                                                ${thisSessionMembers}
                                            </ul>
                                        </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Description:</h6> ${info}
                                            </td>
                                        </tr>
                                       
                                    </table>
                            </div>
                            </div>`;
        switch(typeOfSession){
          case "request": {
                            counter++;
                           console.log(moment(Opt3TS).format("ddd L LT" ))
                            console.log(Opt3TS)
                            typeOfSessionColor = "red";
                            typeOfSessionDisplay = `<ul class="eachSessionCard"><li class="float-left"><h3> <button class="takeOnIt" type="button"
                             data-toggle="modal" data-target="#option-modal${id}">Take On It</button></h3></li><li> <h4 float-none>${title}</h4></li>
                              <li class="float-right"> <p> by: ${members[0].first_name} ${members[0].last_name}</p></li></ul>`
                            collapseCard = `<div id="collapse${id}" class="collapse" aria-labelledby="heading${id}" data-parent="#accordion">
                            <div class="card-body">
                            <table>
                            <tr>
                                          <td>
                                                <h6>Description:</h6> ${info}
                                            </td>
                                        </tr>
                                        </table>
                                        </div>
                                        </div>
                                        <div class="modal fade" id="option-modal${id}" tabindex="-1" aria-labelledby="option-modal" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="option-modal${id}">Select the session time to provide help:</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="container-sm">
                                                        <div class="row" id="${id}" data1="${Opt1TS}"data2="${Opt1TE}">
                                                            <div class="col-4">
                                                                <lable>Option 1 Avail:</lable>
                                                            </div>
                                                            <div class="col-5">
                                                                <p id="option-1"> ${moment(Opt1TS).format("ddd L LT" )} - ${moment(Opt1TE).format("ddd L LT" )}</p>
                                                            </div>
                                                            <div class="col-3">
                                                                <button type="button" id="opt1Button" class="btn btn-danger">Select</button>
                                                            </div>
                                                        </div>
                                                        <div class="row" id="${id}" data1="${Opt2TS}"data2="${Opt2TE}">
                                                            <div class="col-4">
                                                                <lable>Option 2 Avail:</lable>
                                                            </div>
                                                            <div class="col-5">
                                                                <p id="option-2">${moment(Opt2TS).format("ddd L LT" )} - ${moment(Opt2TE).format("ddd L LT" )}</p>
                                                            </div>
                                                            <div class="col-3">
                                                                <button type="button" id="opt2Button"class="btn btn-danger">Select</button>
                                                            </div>
                                                        </div>
                                                        <div class="row" id="${id}" data1="${Opt3TS}"data2="${Opt3TE}">
                                                            <div class="col-4">
                                                                <lable>Option 3 Avail:</lable>
                                                            </div>
                                                            <div class="col-5">
                                                                <p id="option-3">${moment(Opt3TS).format("ddd L LT" )} - ${moment(Opt3TE).format("ddd L LT" )}</p>
                                                            </div>
                                                            <div class="col-3">
                                                                <button type="button" id="opt3Button" class="btn btn-danger">Select</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                                        </div>
                                    </div>`;
                                    console.log(moment(Opt3TS).format("ddd L LT" ))
                                    console.log(Opt3TS)
                            break;  
                          }
          case "general": {
                            typeOfSessionColor = "green";
                            typeOfSessionDisplay = `<ul class="eachSessionCard"><li class="float-left"><h4>${sessionDate}</h4></li>
                            <li> <h3 float-none>${title}</h3></li> <li class="float-right"> <p> by: ${members[0].first_name}
                             ${members[0].last_name}</p></li></ul><h5 class="sessionHour">${moment(timeS).format("HH:mma")}</h5>
                             <button id="tagAlong" class="tagAlong">TagAlong</button>`
                            break
                          }
          case "focus": {
                          typeOfSessionColor = "blue";
                          typeOfSessionDisplay = `<ul class="eachSessionCard"><li class="float-left"><h4>${sessionDate}</h4></li>
                            <li> <h3 float-none>${title}</h3></li> <li class="float-right"> <p> by: ${members[0].first_name}
                             ${members[0].last_name}</p></li></ul><h5 class="sessionHour">${moment(timeS).format("HH:mma")}</h5>
                             <button id="tagAlong" class="tagAlong">TagAlong</button>`
                            break
                        }
         }
       var sessionAcordion = (`
        <div class="card">
        <div class="card-header  ${typeOfSessionColor} btn" style="text-left" id="heading${id}" data-toggle="collapse" data-target="#collapse${id}" aria-expanded="false"
        aria-controls="collapse${id}">
            <div class="mb-0" id="${id}">
                    ${typeOfSessionDisplay}
            </div>
        </div>
        ${collapseCard}           
        </div>
        `) 
         sessionsContainer.append(sessionAcordion)
  }

  function theyhaveposts(data){
  }

  function getMembers() {
    $.get("/api/members", function (data) {
      membersList = [];
      theyhaveposts(data)
      for (let i = 0; i < data.length; i++) {
        membersList.push(`<li class="list-group-item list-group-item-action"><i class="fa fa-user"></i> ${data[i].first_name} ${data[i].last_name} (${data[i].userName}) </li> `);
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