package com.kredibasvuru.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DtoUser {
    private Integer userId;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    private Boolean isActive;
}