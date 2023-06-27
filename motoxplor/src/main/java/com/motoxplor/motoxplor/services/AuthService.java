package com.motoxplor.motoxplor.services;

import com.motoxplor.motoxplor.dto.UserDto;
import com.motoxplor.motoxplor.mappers.UserMapper;
import com.motoxplor.motoxplor.models.User;
import com.motoxplor.motoxplor.repositories.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@AllArgsConstructor
@Transactional
public class AuthService {
    private UserRepo userRepo;
    private UserMapper userMapper;
    private PasswordEncoder passwordEncoder;


    public UserDto createUser(UserDto userDto){
        if(userRepo.findByEmail(userDto.getEmail()).isPresent()){
            throw new RuntimeException("user with this email already exist");
        }else{
            userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
            User user =userMapper.toUser(userDto);
            return userMapper.toUserDto(userRepo.save(user));
        }

    }

}
