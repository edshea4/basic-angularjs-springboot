package com.example.basicangular.repositories;

import com.example.basicangular.domain.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long>{

    Player findByPlayerKey (String playerKey);

}
