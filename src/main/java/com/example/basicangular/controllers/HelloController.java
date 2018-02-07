package com.example.basicangular.controllers;

import com.example.basicangular.domain.HelloResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class HelloController {

    @GetMapping("/hello")
    public HelloResponse helloWorld() {
        return new HelloResponse("Hello World!");
    }
}
