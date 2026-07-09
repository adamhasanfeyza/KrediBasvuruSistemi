
package com.kredibasvuru.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class DtoPersonnel extends DtoUser{
    private LocalDate hireDate;

    private Integer roleId;

    private String department;

    private String registryNumber;
}