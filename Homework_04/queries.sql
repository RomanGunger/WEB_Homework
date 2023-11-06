
-- create
CREATE TABLE EMPLOYEE (
  empId INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  adress TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE VALUES (0001, 'Clark', '43', 'Moscow, Red Square 1');
INSERT INTO EMPLOYEE VALUES (0002, 'Dave', '11', 'St. Petersburg, Nevskiy St. 4');
INSERT INTO EMPLOYEE VALUES (0003, 'Ava', '53', 'Moscow, Red Square 1');

-- fetch 
SELECT * FROM EMPLOYEE;
