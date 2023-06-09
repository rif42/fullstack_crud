create database crud_rido;
use crud_rido;
create table bansos(
    bansos_id BIGINT not null primary key,
    nama_bansos CHAR(32),
    tgl1 DATE,
    tgl2 DATE,
    sesi ENUM('1', '2', '3')
);
create table data_warga(
    nkk BIGINT not null primary key,
    nama CHAR(32),
    alamat CHAR(64),
    tgl_claim DATE,
    sesi ENUM('1', '2', '3'),
    no_antre SMALLINT,
    status BOOL default 0,
    bansos_id BIGINT not null,
    FOREIGN KEY (bansos_id) REFERENCES bansos(bansos_id)
);
CREATE TABLE admins (
    id INT UNSIGNED NOT NULL default 0,
    user VARCHAR(255) NOT NULL PRIMARY KEY,
    pass VARCHAR(255) NOT NULL
);