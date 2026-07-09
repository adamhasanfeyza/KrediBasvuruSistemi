
package com.kredibasvuru.dto;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)

public class DtoCustomerIU extends DtoUserIU{
    private String title;

    @NotNull(message = "Maaş bilgisi boş olamaz")
    @DecimalMin(value = "0.0", message = "Maaş bilgisi negatif olamaz")
    private BigDecimal salaryInfo;

    @NotNull(message = "Aylık gelir boş olamaz")
    @DecimalMin(value = "0.0", message = "Aylık gelir negatif olamaz")
    private BigDecimal monthlyIncome;

    @NotNull(message = "Borç bilgisi boş olamaz")
    @DecimalMin(value = "0.0", message = "Borç negatif olamaz")
    private BigDecimal debt;

    @NotNull(message = "Mal varlığı boş olamaz")
    @DecimalMin(value = "0.0", message = "Mal varlığı negatif olamaz")
    private BigDecimal assets;
}