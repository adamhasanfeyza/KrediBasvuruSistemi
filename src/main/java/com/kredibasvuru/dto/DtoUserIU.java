package com.kredibasvuru.dto;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class DtoUserIU {
    @NotBlank(message = "Ad boş olamaz")
    private String firstName;

    @NotBlank(message = "Soyad boş olamaz")
    private String lastName;

    @NotBlank(message = "TCKN boş olamaz")
    @Pattern(regexp = "^[0-9]{11}$", message = "TCKN 11 haneli rakamlardan oluşmalıdır")
    private String tckn;

    @NotBlank(message = "Telefon numarası boş olamaz")
    private String phoneNumber;

    @NotBlank(message = "Email boş olamaz")
    @Email(message = "Geçerli bir email adresi giriniz")
    private String email;

    @NotBlank(message = "Şifre boş olamaz")
    @Size(min = 6, max = 30, message = "Şifre 6 ile 30 karakter arasında olmalıdır")
    private String password;
}