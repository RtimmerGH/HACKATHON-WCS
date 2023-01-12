DROP TABLE IF EXISTS admin;

CREATE TABLE
    admin (
        id INT(1) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO admin (name) VALUES ('user'), ('admin'), ('superadmin');

DROP TABLE IF EXISTS user;

CREATE TABLE
    user (
        id int primary key NOT NULL AUTO_INCREMENT,
        firstname varchar(255) NOT NULL,
        lastname varchar(255) NOT NULL,
        email varchar(255) UNIQUE NOT NULL,
        hashedPassword varchar(255) NOT NULL,
        admin int(1) NOT NULL DEFAULT 1,
        CONSTRAINT `fk_user_admin` Foreign Key (admin) REFERENCES admin(id) ON DELETE RESTRICT ON UPDATE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    user (
        firstname,
        lastname,
        email,
        hashedPassword,
        admin
    )
VALUES (
        'Romain',
        'Timmer',
        'timmer@gmail.com',
        '$argon2id$v=19$m=65536,t=3,p=1$IiwgyuOQ6m8uekQH4Tz/Qg$GQr4Y1wC/2BXn2TF/qPApUxqU7pZxXao7AXgu1wX5kk',
        3
    ), (
        'Rémy',
        'Bernardin',
        'bernardin@gmail.com',
        '$argon2id$v=19$m=65536,t=3,p=1$W5LUI7siqBwBAVUpolk+sw$v6rdgSw0Y8by65NXjMB3HIxDAULTuKd98+2Xw/+3SUw',
        3
    ), (
        'Lucas',
        'Fasilleau',
        'fasilleau@gmail.com',
        '$argon2id$v=19$m=65536,t=3,p=1$1t06KFrossBRrBAGepe9uQ$h3qFJ46mWsgcrJ+y7WhrVd4RLqhGVZ1PafAtoouTmxk',
        1
    ), (
        'Léon',
        'Versavel',
        'versavel@gmail.com',
        '$argon2id$v=19$m=65536,t=3,p=1$dvW02UvenzYp2hVvtviP6w$gp1lRRDpVUZBe91mvB/bgbRqtxY6dGSA37J93opOkCQ',
        2
    );

DROP TABLE IF EXISTS agency;

CREATE TABLE
    agency (
        id int primary key NOT NULL AUTO_INCREMENT,
        address varchar(255) NOT NULL,
        city varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    agency (address, city)
VALUES (
        '81, impasse Joseph Pierre',
        'Toulouse'
    ), (
        '3, chemin de Langlois',
        'Toulouse'
    ), (
        '805, boulevard Gilles Bonneau',
        'Paris'
    ), (
        'boulevard Renault',
        'Bordeaux'
    ), (
        '406, boulevard Guillet',
        'Lyon'
    );

DROP TABLE IF EXISTS brand;

CREATE TABLE
    brand (
        id int primary key NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO brand (name)
VALUES ('Peugeot'), ('Renault'), ('Volkswagen'), ('Ford'), ('Mercedes');

DROP TABLE IF EXISTS model;

CREATE TABLE
    model (
        id int primary key NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        idBrand int NOT NULL,
        CONSTRAINT `fk_model_brand` Foreign Key (idBrand) REFERENCES brand(id) ON DELETE RESTRICT ON UPDATE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    model (name, idBrand)
VALUES ('e-208', 1), ('e-2008', 1), ('e-Rifter', 1), ('e-Traveller', 1), ('Megane E-Tech', 2), ('Zoe E-Tech', 2), ('Twingo E-Tech', 2), ('ID.3', 3), ('ID.4', 3), ('ID.4 GTX', 3), ('ID.5', 3), ('E-Transit', 4), ('Mercedes-EQ', 5),('eT01',1);

DROP TABLE IF EXISTS category;

CREATE TABLE
    category (
        id int primary key NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO category (name) VALUES ('car'), ('bike');

DROP TABLE IF EXISTS type;

CREATE TABLE
    type (
        id int primary key NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO type (name)
VALUES ('Berline'), ('Minibus'), ('Break'), ('Utility vehicle'),('bike') ;

DROP TABLE IF EXISTS vehicle;

CREATE TABLE
    vehicle (
        id int primary key NOT NULL AUTO_INCREMENT,
        registration varchar(9) NOT NULL,
        idCategory int NOT NULL,
        idType int,
        idModel int,
        idAgency int NOT NULL,
        km int,
        fuel VARCHAR(255) DEFAULT "Electric",
        numDoor int(1),
        numPassenger int(2),
        color varchar(255),
        commissioningDate DATE NOT NULL,
        availability BOOLEAN NOT NULL,
        image text NOT NULL,
        CONSTRAINT `fk_vehicle_category` Foreign Key (idCategory) REFERENCES category(id) ON DELETE RESTRICT ON UPDATE CASCADE,
        CONSTRAINT `fk_vehicle_type` Foreign Key (idType) REFERENCES type(id) ON DELETE RESTRICT ON UPDATE CASCADE,
        CONSTRAINT `fk_vehicle_model` Foreign Key (idModel) REFERENCES model(id) ON DELETE RESTRICT ON UPDATE CASCADE,
        CONSTRAINT `fk_vehicle_agency` Foreign Key (idAgency) REFERENCES agency(id) ON DELETE RESTRICT ON UPDATE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    vehicle(
        registration,
        `idType`,
        `idModel`,
        `idAgency`,
        `idCategory`,
        km,
        `numDoor`,
        `numPassenger`,
        color,
        `commissioningDate`,
        availability,
        image
    )
VALUES (
        'AA-123-AA',
        1,
        6,
        1,
        1,
        23065,
        3,
        5,
        'White',
        '2022-08-01',
        1,
        'https://images.caradisiac.com/logos-ref/modele/modele--renault-zoe/S7-modele--renault-zoe.jpg'
    ), (
        'BB-456-BB',
        1,
        4,
        1,
        1,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://www.largus.fr/images/images/peugeot-e-traveller-7.jpg'
    ), (
        'CC-789-CC',
        1,
        4,
        1,
        1,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://www.largus.fr/images/images/peugeot-e-traveller-7.jpg'
    ),(
        'DD-123-DD',
        1,
        1,
        2,
        1,
        23065,
        3,
        5,
        'White',
        '2022-08-01',
        1,
        'http://www.feline.cc/media/upload/2012/01/dossier-peugeot-208-business.jpg'
    ), (
        'EE-456-EE',
        3,
        2,
        2,
        1,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://medias.autojm.fr/media/cache/resolve/vehicle_medium/media/vehicle/0003/69/blanc-banquise-jpg_2699ac98cdb0aa07b085f177c791f8c6fffc51bc.jpeg?p=vehicle_medium'
    ), (
        'FF-789-FF',
        1,
        3,
        2,
        1,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://www.ggsauto.fr/photogamme/1000/800/non/p0p66imp-3_quart_avant.jpg'
    ),(
        'GG-123-GG',
        2,
        4,
        3,
        1,
        23065,
        3,
        5,
        'White',
        '2022-08-01',
        1,
        'https://staticeu-h2.izmocars.com/toolkit/commonassets/2022/22peugeot/22peugeottravellerbizlmv3fb/22peugeottravellerbizlmv3fb_pixGallery/_gallerypix/peugeot_travellerbizlmv3fb_concept.jpg'
    ), (
        'HH-456-HH',
        1,
        5,
        3,
        1,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/09/renault-megane-e-tech-2022-768x768.png?webp=1&resize=580,580&key=19168d27'
    ), (
        'II-789-II',
        1,
        6,
        3,
        1,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://images.caradisiac.com/logos-ref/modele/modele--renault-zoe/S7-modele--renault-zoe.jpg'
    ),(
        'JJ-123-JJ',
        1,
        7,
        4,
        1,
        23065,
        3,
        5,
        'White',
        '2022-08-01',
        1,
        'https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2020/02/21239742_2020_-_nouvelle_renault_twingo_z_e-1024x629.jpg?webp=1&resize=1024,600&key=33bc68c7'
    ), (
        'KK-456-KK',
        1,
        8,
        4,
        1,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://cdn.automobile-propre.com/uploads/2019/09/volkswagen-id3-1st-2019-38.png'
    ), (
        'LL-789-LL',
        1,
        9,
        4,
        1,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://cdn.motor1.com/images/mgl/pVlRP/s1/volkswagen-id.4-gtx-2021.jpg'
    ),(
        'MM-123-MM',
        1,
        10,
        4,
        1,
        23065,
        3,
        5,
        'White',
        '2022-08-01',
        1,
        'https://cdn.motor1.com/images/mgl/pVlRP/s1/volkswagen-id.4-gtx-2021.jpg'
    ), (
        'NN-456-NN',
        1,
        11,
        4,
        1,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://cdn.euroncap.com/media/67768/vw-id5.png'
    ), (
        'OO-789-OO',
        4,
        12,
        4,
        1,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://cycles.peugeot.fr/sites/cycles.peugeot.fr/files/2020/12/YPU700%20-%20eT01%20CrossOver%20Equipe%20D10%20Perf.jpg'
    ),(
        'LL-789-LL',
        5,
        14,
        1,
        2,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://cycles.peugeot.fr/sites/cycles.peugeot.fr/files/2020/12/YPU700%20-%20eT01%20CrossOver%20Equipe%20D10%20Perf.jpg'
    ),(
        'MM-123-MM',
        5,
        14,
        2,
        2,
        23065,
        3,
        5,
        'White',
        '2022-08-01',
        1,
        'https://cycles.peugeot.fr/sites/cycles.peugeot.fr/files/2020/12/YPU700%20-%20eT01%20CrossOver%20Equipe%20D10%20Perf.jpg'
    ), (
        'NN-456-NN',
        5,
        14,
        3,
        2,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://cycles.peugeot.fr/sites/cycles.peugeot.fr/files/2020/12/YPU700%20-%20eT01%20CrossOver%20Equipe%20D10%20Perf.jpg'
    ), (
        'OO-789-OO',
        5,
        14,
        4,
        2,
        70897,
        5,
        8,
        'grey',
        '2022-04-10',
        1,
        'https://cycles.peugeot.fr/sites/cycles.peugeot.fr/files/2020/12/YPU700%20-%20eT01%20CrossOver%20Equipe%20D10%20Perf.jpg'
    );

DROP TABLE IF EXISTS reservation;

CREATE TABLE
    reservation (
        id int primary key NOT NULL AUTO_INCREMENT,
        idVehicle int NOT NULL,
        idUser int NOT NULL,
        startDate DATE NOT NULL,
        endDate DATE NOT NULL,
        CONSTRAINT `fk_reservation_vehicule` Foreign Key (idVehicle) REFERENCES vehicle(id) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT `fk_reservation_user` Foreign Key (idUser) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
    );

INSERT INTO
    reservation (idVehicle, idUser, startDate,endDate)
VALUES (
        1,1,'2022-12-05','2022-12-06'        
    ),(
        2,1,'2022-12-07','2022-12-08'        
    ),(
        3,2,'2022-12-09','2022-12-10'        
    ),(
        4,2,'2022-12-11','2022-12-12'        
    ),(
        5,3,'2022-12-13','2022-12-13'        
    ),(
        6,3,'2023-01-02','2023-12-03'        
    ),(
        7,4,'2023-12-05','2023-12-06'        
    ),(
        8,4,'2023-12-08','2023-12-08'        
    ),(
        9,1,'2023-12-09','2023-12-10'        
    ),(
        10,3,'2023-12-14','2023-12-15'        
    ),(
        14,4,'2023-12-14','2023-12-15'        
    );
