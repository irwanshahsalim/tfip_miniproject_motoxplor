package com.motoxplor.motoxplor.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDto {
    String email;
    String password;
    String name;
    String socialMedia;
    String contact;
    String phoneNumber;
    String address;
}
