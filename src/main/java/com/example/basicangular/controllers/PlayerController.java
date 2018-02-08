package com.example.basicangular.controllers;

import com.example.basicangular.domain.Player;
import com.example.basicangular.repositories.PlayerRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/player")
public class PlayerController {

    private final PlayerRepository playerRepo;

    public PlayerController(PlayerRepository playerRepo) {
        this.playerRepo = playerRepo;
    }

    @GetMapping("/{playerKey}")
    public Player getPlayer (@PathVariable String playerKey ){
        return this.playerRepo.findByPlayerKey(playerKey);

    }

    @GetMapping()
    public List<Player> getPlayers ( ){
        return this.playerRepo.findAll();

    }

    @PostMapping
    public Player postPlayer(@RequestBody Player player){
        return playerRepo.save(player);
    }


}
