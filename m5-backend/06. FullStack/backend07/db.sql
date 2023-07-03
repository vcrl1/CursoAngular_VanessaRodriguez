USE backend_nest;

insert into location (street, city, postal_code, country) values ('Golf View', 'Pochayiv', 48, 'Ukraine');
insert into location (street, city, postal_code, country) values ('Delladonna', 'Garland', 100, 'United States');
insert into location (street, city, postal_code, country) values ('Mcbride', 'Karlstad', 35, 'Sweden');
insert into location (street, city, postal_code, country) values ('Emmet', 'Wu’an', 39, 'China');
insert into location (street, city, postal_code, country) values ('Leroy', 'Desē', 16, 'Ethiopia');
insert into location (street, city, postal_code, country) values ('Hoard', 'Pagsañgahan', 83, 'Philippines');
insert into location (street, city, postal_code, country) values ('Gina', 'Dongtundu', 59, 'China');
insert into location (street, city, postal_code, country) values ('Schurz', 'Strawczyn', 45, 'Poland');
insert into location (street, city, postal_code, country) values ('Debra', 'Tapon', 79, 'Philippines');
insert into location (street, city, postal_code, country) values ('Hermina', 'Örebro', 72, 'Sweden');


insert into author (name, email, bio, id_location) values ('Tawnya', 'tedgeller0@smugmug.com', 'ligula suspendisse ornare consequat lectus in est risus auctor sed', 1);
insert into author (name, email, bio, id_location) values ('Katrina', 'kcarnegie1@miibeian.gov.cn', 'malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin', 2);
insert into author (name, email, bio, id_location) values ('Alina', 'aolorenshaw2@smugmug.com', 'magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices', 3);
insert into author (name, email, bio, id_location) values ('Madeline', 'mchastey3@timesonline.co.uk', 'mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis', 4);
insert into author (name, email, bio, id_location) values ('Berni', 'bthurstan4@telegraph.co.uk', 'sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed', 5);
insert into author (name, email, bio, id_location) values ('Crystie', 'ccaulcutt5@weibo.com', 'ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam', 6);
insert into author (name, email, bio, id_location) values ('Peadar', 'pknappett6@istockphoto.com', 'nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec', 7);
insert into author (name, email, bio, id_location) values ('Cherri', 'cridsdole7@blogs.com', 'nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper', 8);
insert into author (name, email, bio, id_location) values ('Sibelle', 'sscamerden8@freewebs.com', 'id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat', 9);
insert into author (name, email, bio, id_location) values ('Jedediah', 'jborlease9@cisco.com', 'dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris', 10);


insert into category (name, description, photo, min_age) values ('Sitework & Site Utilities', 'duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a', 'http://dummyimage.com/156x100.png/dddddd/000000', 85);
insert into category (name, description, photo, min_age) values ('Plumbing & Medical Gas', 'donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies', 'http://dummyimage.com/130x100.png/cc0000/ffffff', 54);
insert into category (name, description, photo, min_age) values ('Roofing (Metal)', 'ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat', 'http://dummyimage.com/125x100.png/cc0000/ffffff', 53);
insert into category (name, description, photo, min_age) values ('Plumbing & Medical Gas', 'lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis', 'http://dummyimage.com/198x100.png/5fa2dd/ffffff', 50);
insert into category (name, description, photo, min_age) values ('Wall Protection', 'tortor sollicitudin mi sit amet lobortis sapien sapien non mi', 'http://dummyimage.com/112x100.png/dddddd/000000', 51);
insert into category (name, description, photo, min_age) values ('Ornamental Railings', 'in porttitor pede justo eu massa donec dapibus duis at velit eu est congue', 'http://dummyimage.com/153x100.png/dddddd/000000', 34);
insert into category (name, description, photo, min_age) values ('RF Shielding', 'eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis', 'http://dummyimage.com/186x100.png/cc0000/ffffff', 18);
insert into category (name, description, photo, min_age) values ('Construction Clean and Final Clean', 'quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum', 'http://dummyimage.com/183x100.png/ff4444/ffffff', 16);
insert into category (name, description, photo, min_age) values ('Curb & Gutter', 'nisi venenatis tristique fusce congue diam id ornare imperdiet sapien', 'http://dummyimage.com/244x100.png/5fa2dd/ffffff', 8);
insert into category (name, description, photo, min_age) values ('Framing (Steel)', 'vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus', 'http://dummyimage.com/239x100.png/dddddd/000000', 81);



insert into editorial (cif, name, foundationYear) values ('111111-2', 'Freida', 1983);
insert into editorial (cif, name, foundationYear) values ('222222-5', 'Hyman', 2008);
insert into editorial (cif, name, foundationYear) values ('8189408-4', 'Karalee', 2005);
insert into editorial (cif, name, foundationYear) values ('8189408-5', 'Caye', 1987);
insert into editorial (cif, name, foundationYear) values ('8182408-5', 'Rosemary', 2011);
insert into editorial (cif, name, foundationYear) values ('81892308-4', 'Cozmo', 2005);
insert into editorial (cif, name, foundationYear) values ('5487593-3', 'Avictor', 2008);
insert into editorial (cif, name, foundationYear) values ('3421035-3', 'Moyna', 2002);
insert into editorial (cif, name, foundationYear) values ('9935265-5', 'Barnebas', 2003);
insert into editorial (cif, name, foundationYear) values ('2338012-2', 'Easter', 2005);



insert into book (title, isbn, price, quantity, published, id_author, id_editorial) values ('Dead Rising: Watchtower', '377248490-5', 15.59, 46, 1, 4, 5);
insert into book (title, isbn, price, quantity, published, id_author, id_editorial) values ('Nothing But the Night', '934661929-5', 31.27, 2, 0, 4, 7);
insert into book (title, isbn, price, quantity, published, id_author, id_editorial) values ('Scarface', '051280081-2', 23.52, 7, 1, 9, 5);
insert into book (title, isbn, price, quantity, published, id_author, id_editorial) values ('Taistelu Näsilinnasta 1918', '215345504-9', 47.13, 22, 0, 6, 7);
insert into book (title, isbn, price, quantity, published, id_author, id_editorial) values ('Hitchhiker''s Guide to the Galaxy, The', '633429826-7', 38.21, 47, 0, 7, 10);
insert into book (title, isbn, price, quantity, published, id_author, id_editorial) values ('And Now the Screaming Starts!', '031991660-X', 9.63, 8, 0, 9, 6);
insert into book (title, isbn, price, quantity, published, id_author, id_editorial) values ('Frankenstein Conquers the World', '010097730-8', 18.42, 35, 1, 4, 1);
insert into book (title, isbn, price, quantity, published, id_author, id_editorial) values ('Dead Within', '368443897-9', 15.95, 25, 1, 6, 5);
insert into book (title, isbn, price, quantity, published, id_author, id_editorial) values ('From Up on Poppy Hill (Kokuriko-zaka kara)', '959977866-9', 13.06, 44, 0, 2, 7);
insert into book (title, isbn, price, quantity, published, id_author, id_editorial) values ('Castle, The', '774055340-9', 47.43, 46, 1, 3, 4);

