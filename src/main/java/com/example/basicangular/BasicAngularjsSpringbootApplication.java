package com.example.basicangular;

import com.example.basicangular.domain.Player;
import com.example.basicangular.repositories.PlayerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class BasicAngularjsSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(BasicAngularjsSpringbootApplication.class, args);
	}

}

@Component
class Runner implements CommandLineRunner {

	private final PlayerRepository playerRepo;

	Runner(PlayerRepository playerRepo) {
		this.playerRepo = playerRepo;
	}

	@Override
	public void run(String... args) throws Exception {
		Player player = new Player();
		player.setPlayerKey("1");
		player.setUsername("player");
		player.setCrafting(100l);
		player.setRareCrafting(100l);
		player.setPoints(500l);
		player.setRank(1);
		player.setExp(5l);
		player.setLevel(1);

		playerRepo.save(player);

		Player player2 = new Player();
		player2.setPlayerKey("2");
		player2.setUsername("player 2");
		player2.setCrafting(100l);
		player2.setRareCrafting(100l);
		player2.setPoints(500l);
		player2.setRank(1);
		player2.setExp(5l);
		player2.setLevel(1);

		playerRepo.save(player2);

	}
}