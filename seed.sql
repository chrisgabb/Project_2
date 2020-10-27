USE channel;
INSERT INTO members (id, first_name, last_name, userName, createdAt, updatedAt)
VALUES (1, "Chris", "G", "chriG", "2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000");
INSERT INTO members (id, first_name, last_name, userName, createdAt, updatedAt)
VALUES (2, "Seless", "L", "selsL", "2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000");
INSERT INTO members (id, first_name, last_name, userName, createdAt, updatedAt)
VALUES (3, "Sendy", "M", "senM", "2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000");

INSERT INTO sessions (id, title, typeOfSession, info, membersLimit, timeStart, timeEnd, Opt1_timeStart, Opt1_timeEnd, Opt2_timeStart, Opt2_timeEnd, Opt3_timeStart, Opt3_timeEnd, createdAt, updatedAt)
VALUES (1, "CSS", "request", "I didnt get it", 5, "2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", null, null, null, null, null, null, "2020-10-22T15:48:02.000",  "2020-10-22T15:48:02.000");
INSERT INTO sessions (id, title, typeOfSession, info, membersLimit, timeStart, timeEnd, Opt1_timeStart, Opt1_timeEnd, Opt2_timeStart, Opt2_timeEnd, Opt3_timeStart, Opt3_timeEnd, createdAt, updatedAt)
VALUES (2, "HTML", "general", "I didnt get it", 5, "2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", null, null, null, null, null, null, "2020-10-22T15:48:02.000",  "2020-10-22T15:48:02.000");
INSERT INTO sessions (id, title, typeOfSession, info, membersLimit, timeStart, timeEnd, Opt1_timeStart, Opt1_timeEnd, Opt2_timeStart, Opt2_timeEnd, Opt3_timeStart, Opt3_timeEnd, createdAt, updatedAt)
VALUES (3, "Handlebars", "focus", "I didnt get it", 5, "2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", null, null, null, null, null, null, "2020-10-22T15:48:02.000",  "2020-10-22T15:48:02.000");
INSERT INTO sessions (id, title, typeOfSession, info, membersLimit, timeStart, timeEnd, Opt1_timeStart, Opt1_timeEnd, Opt2_timeStart, Opt2_timeEnd, Opt3_timeStart, Opt3_timeEnd, createdAt, updatedAt)
VALUES (4, "ORM", "request", "I didnt get it", 5, "2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", null, null, null, null, null, null, "2020-10-22T15:48:02.000",  "2020-10-22T15:48:02.000");

INSERT INTO session_member (createdAt, updatedAt, member_id, session_id)
VALUES ("2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", 1, 1);
INSERT INTO session_member (createdAt, updatedAt, member_id, session_id)
VALUES ("2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", 1, 2);
INSERT INTO session_member (createdAt, updatedAt, member_id, session_id)
VALUES ("2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", 2, 2);
INSERT INTO session_member (createdAt, updatedAt, member_id, session_id)
VALUES ("2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", 2, 3);
INSERT INTO session_member (createdAt, updatedAt, member_id, session_id)
VALUES ("2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", 2, 4);
INSERT INTO session_member (createdAt, updatedAt, member_id, session_id)
VALUES ("2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", 3, 4);
INSERT INTO session_member (createdAt, updatedAt, member_id, session_id)
VALUES ("2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", 3, 2);
INSERT INTO session_member (createdAt, updatedAt, member_id, session_id)
VALUES ("2020-10-22T15:48:02.000", "2020-10-22T15:48:02.000", 3, 1);