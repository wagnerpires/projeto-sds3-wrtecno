package com.devsuperior.dsvendas;

import java.sql.SQLException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DsvendasApplication {

	public static void main(String[] args) throws SQLException {
		SpringApplication.run(DsvendasApplication.class, args);
	}

}
