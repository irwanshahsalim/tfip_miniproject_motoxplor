package com.motoxplor.motoxplor.controllers;

import com.motoxplor.motoxplor.dto.LoginRequest;
import com.motoxplor.motoxplor.dto.LoginResponse;
import com.motoxplor.motoxplor.dto.UserDto;
import com.motoxplor.motoxplor.mappers.UserMapper;
import com.motoxplor.motoxplor.models.User;
import com.motoxplor.motoxplor.repositories.UserRepo;
import com.motoxplor.motoxplor.services.AuthService;
import com.motoxplor.motoxplor.services.JwtService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {
    private AuthService authService;
    private JwtService jwtService;
    private AuthenticationManager authenticationManager;
    @PostMapping("/signup")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(authService.createUser(userDto));
    }
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
        return jwtService.createJwtToken(loginRequest);
    }
}
