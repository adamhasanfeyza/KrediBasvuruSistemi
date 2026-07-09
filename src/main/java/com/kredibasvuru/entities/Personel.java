package com.kredibasvuru.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "customers")
@PrimaryKeyJoinColumn(name = "user_id")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)

public class Customer extends User{
    @Column(name = "title")
    private String title;

    @Column(name = "salary_info")
    private BigDecimal salaryInfo;

    @Column(name = "monthly_income")
    private BigDecimal monthlyIncome;

    @Column(name = "debt")
    private BigDecimal debt;

    @Column(name = "assets")
    private BigDecimal assets;
}