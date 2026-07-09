package com.kredibasvuru.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "personnel")
@PrimaryKeyJoinColumn(name = "user_id")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Personnel extends User{
    @Column(name = "hire_date")
    private LocalDate hireDate;

    @Column(name = "role_id")
    private Integer roleId;

    @Column(name = "department")
    private String department;

    @Column(name = "registry_number")
    private String registryNumber;
}
