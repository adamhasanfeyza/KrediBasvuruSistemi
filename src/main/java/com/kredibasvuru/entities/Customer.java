package com.kredibasvuru.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "credit_application")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreditApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "application_id")
    private Integer applicationId;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name = "requested_amount", nullable = false)
    private BigDecimal requestedAmount;

    @Column(name = "maturity_month", nullable = false)
    private Integer maturityMonth;

    @Column(name = "application_date", nullable = false)
    private LocalDate applicationDate;

    @Column(name = "application_status", nullable = false)
    private String applicationStatus = "PENDING";

    @Column(name = "description")
    private String description;

    @PrePersist
    public void prePersist() {
        if (this.applicationDate == null) {
            this.applicationDate = LocalDate.now();
        }

        if (this.applicationStatus == null) {
            this.applicationStatus = "PENDING";
        }
    }

}