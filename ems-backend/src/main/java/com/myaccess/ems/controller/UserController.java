package com.myaccess.ems.controller;

import com.myaccess.ems.entity.User;
import com.myaccess.ems.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public void register(@RequestBody User user) {
        userService.registerUser(user);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody User user) {
        return userService.loginUser(user.getUsername(), user.getPassword()) != null;
    }
}
