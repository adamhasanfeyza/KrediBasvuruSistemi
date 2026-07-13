import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />

      <Sidebar />

      <main>
        <h1>Dashboard</h1>
      </main>
    </div>
  );
};

export default Layout;