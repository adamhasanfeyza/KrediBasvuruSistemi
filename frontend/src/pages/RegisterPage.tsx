import "../styles/RegisterPage.css";

function RegisterPage() {
    return (
        <div className="register-page">
            <header className="register-header">
                <div className="register-header-logo">
                    <img src="/images/Logo2.png" alt="Cosef Bank Logo" />

                    <div className="register-header-brand">
                        <strong>COSEF</strong>
                        <span>BANK</span>
                    </div>
                </div>

                <button
                    type="button"
                    className="register-login-link"
                    onClick={() => {
                        window.location.href = "/";
                    }}
                >
                    <span className="login-icon">↪</span>
                    Giriş Yap
                </button>
            </header>

            <main className="register-content">
                <aside className="register-info-panel">
                    <h1>
                        Kredi başvurunuzu
                        <br />
                        kolayca oluşturun
                    </h1>

                    <p className="register-info-description">
                        Güvenli, hızlı ve kolay bir şekilde hesabınızı oluşturun. Size
                        özel kredi fırsatlarından yararlanın.
                    </p>

                    <div className="register-illustration">
                        <img
                            src="/images/register-illustration.png"
                            alt="Kredi başvurusu görseli"
                        />
                    </div>

                    <div className="register-benefits">
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <img
                                    src="/images/security.png"
                                    alt="Güvenlik"
                                />
                            </div>

                            <div>
                                <h3>Güvenli ve Korumalı</h3>
                                <p>Kişisel verileriniz güvenli şekilde korunur.</p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <img
                                    src="/images/flash.png"
                                    alt="Hızlı işlem"
                                />
                            </div>

                            <div>
                                <h3>Hızlı ve Kolay</h3>
                                <p>Dakikalar içinde kaydolun, başvurunuzu başlatın.</p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <img
                                    src="/images/user.png"
                                    alt="Kullanıcı fırsatları"
                                />
                            </div>

                            <div>
                                <h3>Size Özel Fırsatlar</h3>
                                <p>İhtiyaçlarınıza uygun kredi seçeneklerini keşfedin.</p>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <img
                                    src="/images/chart.png"
                                    alt="Şeffaf süreç"
                                />
                            </div>

                            <div>
                                <h3>Şeffaf Süreç</h3>
                                <p>Başvuru durumunuzu anlık olarak takip edin.</p>
                            </div>
                        </div>
                    </div>
                </aside >

                <section className="register-form-panel">
                    <div className="register-form-heading">
                        <h2>Kayıt Oluştur</h2>
                        <p>Lütfen bilgilerinizi eksiksiz ve doğru olarak giriniz.</p>
                    </div>

                    <form className="register-form">
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="firstName">Ad</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="Adınızı giriniz"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Soyad</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Soyadınızı giriniz"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="identityNumber">T.C. Kimlik No</label>
                                <input
                                    id="identityNumber"
                                    type="text"
                                    placeholder="11 haneli T.C. kimlik numaranızı giriniz"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Telefon</label>
                                <div className="phone-input">
                                    <select aria-label="Ülke kodu">
                                        <option value="+90">+90</option>
                                    </select>

                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="5XX XXX XX XX"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-posta</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="ornek@mail.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Şifre</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Şifrenizi oluşturunuz"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="passwordRepeat">Şifre Tekrar</label>
                                <input
                                    id="passwordRepeat"
                                    type="password"
                                    placeholder="Şifrenizi tekrar giriniz"
                                />
                            </div>

                            <div className="form-group form-group-empty" />
                        </div>

                        <div className="form-group form-group-full">
                            <label htmlFor="address">Adres</label>
                            <textarea
                                id="address"
                                rows={2}
                                placeholder="Açık adresinizi giriniz"
                            />
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="monthlyIncome">Aylık Gelir</label>

                                <div className="money-input">
                                    <input
                                        id="monthlyIncome"
                                        type="number"
                                        placeholder="Aylık gelirinizi giriniz"
                                    />
                                    <span>₺</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="assets">Mal Varlığı</label>

                                <div className="money-input">
                                    <input
                                        id="assets"
                                        type="number"
                                        placeholder="Mal varlığınızı giriniz"
                                    />
                                    <span>₺</span>
                                </div>
                            </div>
                        </div>

                        <label className="kvkk-checkbox">
                            <input type="checkbox" />

                            <span>
                                <strong>KVKK Aydınlatma Metni</strong>'ni okudum, anladım.
                                Kişisel verilerimin işlenmesine ve paylaşılmasına ilişkin açık
                                rızamı veriyorum.
                            </span>
                        </label>

                        <button type="submit" className="register-submit-button">
                            Hesap Oluştur
                        </button>

                        <div className="register-bottom-login">
                            <span>Zaten hesabınız var mı?</span>

                            <button
                                type="button"
                                onClick={() => {
                                    window.location.href = "/";
                                }}
                            >
                                Giriş Yap
                            </button>
                        </div>
                    </form>
                </section>
            </main >
        </div >
    );
}

export default RegisterPage;