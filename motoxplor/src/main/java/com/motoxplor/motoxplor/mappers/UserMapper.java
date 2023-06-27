package com.motoxplor.motoxplor.mappers;

import com.motoxplor.motoxplor.dto.UserDto;
import com.motoxplor.motoxplor.models.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);
    User toUser(UserDto userDto);

}
