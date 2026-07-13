import "../styles/LoginPage.css";

function LoginPage() {
    return (
        <div className="bank-login-page">


            <main className="bank-login-content">


                <section className="bank-login-area">
                    <div className="bank-login-card">
                        <img
                            src="/images/Logo2.png"
                            alt="Cosef Bank Logo"
                            className="card-logo"
                        />

                        <h2>COSEF BANK</h2>
                        <h3>MÜŞTERİ GİRİŞİ</h3>

                        <p>Bilgilerinizi girerek sistemimize erişin</p>

                        <form>
                            <label htmlFor="email">E-Posta / Kullanıcı Adı</label>

                            <input
                                id="email"
                                type="text"
                                placeholder="E-Posta veya Kullanıcı Adı"
                            />

                            <label htmlFor="password">Şifre</label>

                            <input
                                id="password"
                                type="password"
                                placeholder="Şifrenizi giriniz"
                            />

                            <div className="login-options">
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    Beni Hatırla
                                </label>

                                <button type="button" className="forgot-password">
                                    Şifremi Unuttum?
                                </button>
                            </div>

                            <button type="submit" className="login-submit-button">
                                Giriş Yap
                            </button>
                        </form>
                    </div>

                    <div className="register-box">
                        <span>Henüz bir hesabınız yok mu?</span>

                        <button
                            type="button"
                            onClick={() => {
                                window.location.href = "/register";
                            }}
                        >
                            Kayıt Ol
                        </button>
                    </div>
                </section>
            </main>

            <footer className="bank-login-footer">Cosef Bank © 2026</footer>
        </div>
    );
}

export default LoginPage;