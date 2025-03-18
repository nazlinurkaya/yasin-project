package com.example.backend.controller;

import com.example.backend.entity.Users;
import com.example.backend.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UsersRepository usersRepository;

    @PostMapping
    public Users createUser(@RequestBody Users user) {
        System.out.println("I got");
        return usersRepository.save(user);
    }
}
