package com.myaccess.ems.service;

import com.myaccess.ems.entity.User;

public interface UserService {
    void registerUser(User user);
    User loginUser(String username, String password);
}
