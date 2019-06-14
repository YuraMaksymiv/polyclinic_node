# polyclinic_node
Documentation

//comment

GET api/comment/:id - ID doctor
This method using to get all comments which belong to the doctor by doctor ID

POST api/comment
BODY: {comment: STRING, doctor: NUMBER}
HEADERS: Authorization: token
This method using for create comment about doctor by user ID

PUT api/comment/:id - ID comment to update
HEADERS: Authorization: token
This method using for update comment by comment ID 

DELETE api/comment/:id - ID comment to delete
HEADERS: Authorization: token
This method using for delete comment by comment ID

//doctor

GET api/doctor 
This method is using to get all doctors

GET api/doctor/current
HEADERS: Authorization: token
This method is using to get current doctor

GET api/doctor/:id -ID doctor
This method is using to get doctor by doctor ID

GET api/doctor/section/:sectionId -ID section
This method is using to get doctors which belong given section

POST api/doctor/login 
BODY: {email: STRING, pasword: STRING}
This method is using to login doctor

POST api/doctor/register
BODY: {name: STRING, surname: STRING, email: STRING, password: STRING}
This method is using to register doctor

PUT api/doctor/:id - doctor ID
BODY: {experience = NUMBER, description = STRING, phone = NUMBER, floor = NUMBER, room_number = NUMBER}
HEADERS: Authorization: token
This method is using to update doctor

//mark

GET api/mark/:id -ID doctor
This method is using to get marks by doctor ID

POST api/mark
BODY: {mark: STRING, doctor: NUMBER}
HEADERS: Authorization: token
This method is using to create mark to doctor

//section

GET api/section
This method is using to get all sections

//user

GET api/user
This method is using to get all users

GET api/user/current
HEADERS: Authorization: token
This method is using to get current doctor

POST api/user/login 
BODY: {email: STRING, pasword: STRING}
This method is using to login doctor

POST api/user/register
BODY: {name: STRING, surname: STRING, email: STRING, password: STRING}
This method is using to register user

To create database run code in console
```
create schema if not exists maksyiv_1800;
use maksyiv_1800;
create table if not exists comments
(
    id           int auto_increment
        primary key,
    user_id      int          not null,
    doctor_id    int          not null,
    comment      varchar(200) not null,
    date         varchar(45)  not null,
    toComment_id int          null
);

create table if not exists marks
(
    id   int auto_increment
        primary key,
    mark int not null
);

create table if not exists sections
(
    id           int auto_increment
        primary key,
    section_name varchar(45) not null
);

create table if not exists doctors
(
    id           int auto_increment
        primary key,
    name         varchar(45)  not null,
    surname      varchar(45)  not null,
    experience   int          null,
    description  varchar(105) null,
    phone        varchar(45)  null,
    email        varchar(45)  not null,
    floor        int          null,
    room_number  int          null,
    working_days varchar(60)  null,
    section_id   int          null,
    password     varchar(105) not null,
    credentials  int          not null,
    constraint FK_doctors_sections
        foreign key (section_id) references sections (id)
);

create index FK_doctor_section_idx
    on doctors (section_id);

create table if not exists mark2doctors
(
    id        int auto_increment
        primary key,
    mark_id   int not null,
    doctor_id int not null,
    constraint FK_mark2doctors_doctors
        foreign key (doctor_id) references doctors (id)
            on update cascade on delete cascade,
    constraint FK_mark2doctors_marks
        foreign key (mark_id) references marks (id)
);

create index FK_mark2doctors_doctors_idx
    on mark2doctors (doctor_id);

create index FK_mark2doctors_marks_idx
    on mark2doctors (mark_id);

create table if not exists users
(
    id          int auto_increment
        primary key,
    name        varchar(45)  not null,
    surname     varchar(45)  not null,
    email       varchar(45)  not null,
    password    varchar(105) not null,
    credentials int          not null
);
INSERT INTO maksymiv_1800.comments (id, user_id, doctor_id, comment, date, toComment_id) VALUES (1, 1, 10, 'est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et', 'Fri Jun 14 2019', null);
INSERT INTO maksymiv_1800.comments (id, user_id, doctor_id, comment, date, toComment_id) VALUES (2, 2, 10, 'ut voluptatem corrupti velit ad voluptatem maiores et nisi velit vero accusamus maiores voluptates quia aliquid ullam eaque', 'Fri Jun 14 2019', null);
INSERT INTO maksymiv_1800.comments (id, user_id, doctor_id, comment, date, toComment_id) VALUES (3, 2, 11, 'ut dolorum nostrum id quia aut est fuga est inventore vel eligendi explicabo quis consectetur aut occaecati repellat id natus quo est ut blanditiis quia ut vel ut maiores ea', 'Fri Jun 14 2019', null);
INSERT INTO maksymiv_1800.doctors (id, name, surname, experience, description, phone, email, floor, room_number, working_days, section_id, password, credentials) VALUES (10, 'Leanne', 'Graham', 3, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', '17707368031', 'Sincere@april.biz', 2, 23, 'monday, tuesday', 1, '$2b$10$l6y2NA1xFXmtiYcw4Xk/NOgYL5b/35BJRXjYj3ewNTHlxS8NC5QFu', 2);
INSERT INTO maksymiv_1800.doctors (id, name, surname, experience, description, phone, email, floor, room_number, working_days, section_id, password, credentials) VALUES (11, 'Ervin', 'Howell', 13, 'qui est esse', '0106926593', 'Shanna@melissa.tv', 4, 46, 'tuesday, friday', 2, '$2b$10$rbVpC.P6BLhKUlJlLw0FuOf4LK2wrpVAZ9u4.uXITFSrELZSwEM6q', 2);
INSERT INTO maksymiv_1800.doctors (id, name, surname, experience, description, phone, email, floor, room_number, working_days, section_id, password, credentials) VALUES (12, 'Clementine', 'Bauch', 25, 'ea molestias quasi exercitationem repellat qui ipsa sit aut', '14631234447', 'Nathan@yesenia.net', 3, 32, 'wednesday, thursday', 4, '$2b$10$Kjrtz7GSewN7eZI.44YqR.GO2FT06BF8prv7R9gvG8nsELHEBnbIa', 2);
INSERT INTO maksymiv_1800.doctors (id, name, surname, experience, description, phone, email, floor, room_number, working_days, section_id, password, credentials) VALUES (13, 'Patricia', 'Lebsack', 31, 'eum et est occaecati', '4931709623', 'Julianne.OConner@kory.org', 2, 24, 'monday, thursday', 1, '$2b$10$Zuii6AwVcpoL/RHYnUpdN.DmanklqVqGeFM3d5RnzwTWqIU1.31S6', 2);
INSERT INTO maksymiv_1800.doctors (id, name, surname, experience, description, phone, email, floor, room_number, working_days, section_id, password, credentials) VALUES (14, 'Chelsey', 'Dietrich', 9, 'esciunt quas odio', '2549541289', 'Lucio_Hettinger@annie.ca', 1, 10, 'monday, friday', 3, '$2b$10$.T6M8Rd4pw1vsavJLDWRCO4pyNvSJ9MVW8R79DhbRqBOLoX6JO/eS', 2);
INSERT INTO maksymiv_1800.mark2doctors (id, mark_id, doctor_id) VALUES (1, 3, 10);
INSERT INTO maksymiv_1800.mark2doctors (id, mark_id, doctor_id) VALUES (2, 5, 10);
INSERT INTO maksymiv_1800.mark2doctors (id, mark_id, doctor_id) VALUES (3, 4, 10);
INSERT INTO maksymiv_1800.mark2doctors (id, mark_id, doctor_id) VALUES (4, 1, 12);
INSERT INTO maksymiv_1800.mark2doctors (id, mark_id, doctor_id) VALUES (5, 4, 12);
INSERT INTO maksymiv_1800.mark2doctors (id, mark_id, doctor_id) VALUES (6, 5, 14);
INSERT INTO maksymiv_1800.marks (id, mark) VALUES (1, 1);
INSERT INTO maksymiv_1800.marks (id, mark) VALUES (2, 2);
INSERT INTO maksymiv_1800.marks (id, mark) VALUES (3, 3);
INSERT INTO maksymiv_1800.marks (id, mark) VALUES (4, 4);
INSERT INTO maksymiv_1800.marks (id, mark) VALUES (5, 5);
INSERT INTO maksymiv_1800.sections (id, section_name) VALUES (1, 'surgery');
INSERT INTO maksymiv_1800.sections (id, section_name) VALUES (2, 'pediatrics');
INSERT INTO maksymiv_1800.sections (id, section_name) VALUES (3, 'traumatology');
INSERT INTO maksymiv_1800.sections (id, section_name) VALUES (4, 'dentistry');
INSERT INTO maksymiv_1800.users (id, name, surname, email, password, credentials) VALUES (1, 'Glenna ', 'Reichert', 'Chaim_McDermott@dana.io', '$2b$10$a49pKaSFUv20ogssaWrwcu8A7bjyGi.pAnpgAf.CnR0hUOC29Ii2G', 3);
INSERT INTO maksymiv_1800.users (id, name, surname, email, password, credentials) VALUES (2, 'Kurtis', 'Weissnat', 'Telly.Hoeger@billy.biz', '$2b$10$HYcEZ.z1.KymLYggrukhLemhCEvZatQwUQKuatd4M4SNluat0yK4u', 3);
```
