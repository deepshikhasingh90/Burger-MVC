Create database burgers_db;

Use burgers_db;

Create table burgers (
    id INT Auto_Increment,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL,
    Primary Key (id)
); 