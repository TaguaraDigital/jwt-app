DROP DATABASE IF EXISTS condom;
CREATE DATABASE condom;
USE condom;

CREATE TABLE users(
  user_id INT(7) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL UNIQUE,
  user_email VARCHAR(100) NOT NULL UNIQUE,
  user_password VARCHAR(150) NOT NULL,
  user_initial_balance DECIMAL(11,2) 
);

INSERT INTO users (user_name, user_email, user_password) VALUES ('prueba', 'prueba123@gmail.com', '$2b$10$L7DbgfYqnLDdRm2qdHqRd.vqBzCQyOVWQq6vzuZnIxYjcMVkYY33W');
INSERT INTO users (user_name, user_email, user_password, user_initial_balance)
           VALUES ("Pedro Perez", "pedro@correo.com","$2b$10$L7DbgfYqnLDdRm2qdHqRd.vqBzCQyOVWQq6vzuZnIxYjcMVkYY33W", 120);
INSERT INTO users (user_name, user_email, user_password, user_initial_balance)
           VALUES ("Juan Rodriguez", "juan@correo.com","$2b$10$L7DbgfYqnLDdRm2qdHqRd.vqBzCQyOVWQq6vzuZnIxYjcMVkYY33W", 240);
INSERT INTO users (user_name, user_email, user_password, user_initial_balance)
           VALUES ("Luis Contrera", "luis@correo.com","$2b$10$L7DbgfYqnLDdRm2qdHqRd.vqBzCQyOVWQq6vzuZnIxYjcMVkYY33W", 360);

CREATE TABLE invoices(
  invoice_id INT(7) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT(7) NOT NULL,
  invoice_amount DECIMAL(11,2) NOT NULL,
  invoice_status TINYINT(1) DEFAULT 0,
  due_date date NOT NULL,
  payment_date date DEFAULT NULL,
  payment_reference VARCHAR(50)
);


INSERT INTO invoices ( user_id, invoice_amount, invoice_status, due_date, payment_date, payment_reference)
              VALUES (1, 100.00, 0, "2020-01-01","2020-01-01","");
INSERT INTO invoices ( user_id, invoice_amount, invoice_status, due_date, payment_date, payment_reference)
              VALUES (1, 200.00, 0, "2020-02-01","2020-02-01","");
INSERT INTO invoices ( user_id, invoice_amount, invoice_status, due_date, payment_date, payment_reference)
              VALUES (1, 300.00, 0, "2020-03-01","2020-03-01","");
INSERT INTO invoices ( user_id, invoice_amount, invoice_status, due_date, payment_date, payment_reference)
              VALUES (2, 100.00, 0, "2020-01-01","2020-01-01","");
INSERT INTO invoices ( user_id, invoice_amount, invoice_status, due_date, payment_date, payment_reference)
              VALUES (2, 200.00, 0, "2020-02-01","2020-02-01","");
INSERT INTO invoices ( user_id, invoice_amount, invoice_status, due_date, payment_date, payment_reference)
              VALUES (2, 300.00, 0, "2020-03-01","2020-03-01","");



CREATE TABLE clients (
  client_id  INT(7) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cliente_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NULL,
  city VARCHAR(50) NULL,
  state VARCHAR(20) NULL,
  phone VARCHAR(50) NULL
) ;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  user_id INT(7) NOT NULL,
  description VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
