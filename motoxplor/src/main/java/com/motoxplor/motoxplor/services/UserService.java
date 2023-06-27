package com.motoxplor.motoxplor.services;

import com.motoxplor.motoxplor.dto.UserDto;
import com.motoxplor.motoxplor.mappers.UserMapper;
import com.motoxplor.motoxplor.models.User;
import com.motoxplor.motoxplor.repositories.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@AllArgsConstructor
@Transactional
public class UserService {
    private UserRepo userRepo;
    private UserMapper userMapper;

}
