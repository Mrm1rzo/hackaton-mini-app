// import react-router-dom
import { Outlet } from "react-router-dom";

// import component
import { Footer, Navbar } from "../components";

const RootLayouts = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayouts;
