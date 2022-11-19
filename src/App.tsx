import { MantineProvider } from "@mantine/core";
import { AppShell, Navbar, Header } from "@mantine/core";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonList />,
  },
  {
    path: "/pokemon/:pokemonName",
    element: <PokemonDetail />,
  },
  {
    path: "/signup",
    element: <RegisterForm />,
  },
]);

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={500} p="xs">
            {/* Navbar content */}
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            {/* Header content */}
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <RouterProvider router={router} />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
