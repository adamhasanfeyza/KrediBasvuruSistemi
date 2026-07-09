
package com.kredibasvuru.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class DtoCustomer extends DtoUser {
    private String title;

    private BigDecimal salaryInfo;

    private BigDecimal monthlyIncome;

    private BigDecimal debt;

    private BigDecimal assets;
}
