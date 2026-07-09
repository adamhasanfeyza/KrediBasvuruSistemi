package com.kredibasvuru.dto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class DtoPersonnelIU extends DtoUserIU{
    @NotNull(message = "İşe giriş tarihi boş olamaz")
    private LocalDate hireDate;

    @NotNull(message = "Rol bilgisi boş olamaz")
    private Integer roleId;

    @NotBlank(message = "Departman boş olamaz")
    private String department;

    @NotBlank(message = "Sicil numarası boş olamaz")
    private String registryNumber;
}