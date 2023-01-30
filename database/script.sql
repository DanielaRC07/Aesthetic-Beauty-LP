CREATE TABLE clientes (
	id varchar(30) NOT NULL,
	nombre varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	CONSTRAINT clientes_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;

CREATE TABLE esteticistas (
	id varchar(30) NOT NULL,
	nombre varchar (100) NOT NULL,
	CONSTRAINT esteticistas_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;

CREATE TABLE citas (
	id INT auto_increment NOT NULL,
	numero_identificacion varchar(30) NOT NULL,
	hora varchar(15) NOT NULL,
	fecha varchar(20) NOT NULL,
	id_esteticista varchar(30) NOT NULL,
	id_cliente varchar(30) NOT NULL,
	CONSTRAINT citas_PK PRIMARY KEY (id),
	CONSTRAINT citas_FK_1 FOREIGN KEY (id_esteticista) REFERENCES esteticistas(id),
	CONSTRAINT citas_FK_2 FOREIGN KEY (id_cliente) REFERENCES clientes(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;