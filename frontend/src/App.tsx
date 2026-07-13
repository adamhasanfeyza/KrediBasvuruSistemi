import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const path = window.location.pathname;

  if (path === "/register") {
    return <RegisterPage />;
  }

  return <LoginPage />;
}

export default App;