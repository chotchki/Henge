package us.henge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class Main {
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}
}
