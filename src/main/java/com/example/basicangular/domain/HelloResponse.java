package com.example.basicangular.domain;

public class HelloResponse {
    public String getHello() {
        return hello;
    }

    public HelloResponse(String hello) {
        this.hello = hello;
    }

    public void setHello(String hello) {
        this.hello = hello;
    }

    private String hello;
}
