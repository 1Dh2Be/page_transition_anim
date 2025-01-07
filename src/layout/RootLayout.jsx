import { Outlet } from "react-router";
import Container from "../components/Container";
import Nav from "../components/Nav";

const RootLayout = () => {
  return (
    <Container>
      <Nav />
      <main className="flex justify-center items-center h-full text-6xl">
        <Outlet />
      </main>
    </Container>
  );
};

export default RootLayout;
