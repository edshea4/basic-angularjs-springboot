package com.example.basicangular.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Player {

    @Id
    @GeneratedValue
    Long    id;

    String  playerKey;
    Long    points;
    Long    crafting;
    Long    rareCrafting;
    Long    exp;
    Integer level;
    Integer rank;
    String  username;
    String  password;

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", playerKey='" + playerKey + '\'' +
                ", points=" + points +
                ", crafting=" + crafting +
                ", rareCrafting=" + rareCrafting +
                ", exp=" + exp +
                ", level=" + level +
                ", rank=" + rank +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlayerKey() {
        return playerKey;
    }

    public void setPlayerKey(String playerKey) {
        this.playerKey = playerKey;
    }

    public Long getPoints() {
        return points;
    }

    public void setPoints(Long points) {
        this.points = points;
    }

    public Long getCrafting() {
        return crafting;
    }

    public void setCrafting(Long crafting) {
        this.crafting = crafting;
    }

    public Long getRareCrafting() {
        return rareCrafting;
    }

    public void setRareCrafting(Long rareCrafting) {
        this.rareCrafting = rareCrafting;
    }

    public Long getExp() {
        return exp;
    }

    public void setExp(Long exp) {
        this.exp = exp;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
