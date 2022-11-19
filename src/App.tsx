import { MantineProvider } from "@mantine/core";
import { AppShell, Navbar, Header, Title, Button } from "@mantine/core";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import RegisterForm from "./components/RegisterForm";
import RequireAuth from "./components/RequiredAuth";
import { useAuthStore } from "./store";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <PokemonList />
      </RequireAuth>
    ),
  },
  {
    path: "/pokemon/:pokemonName",
    element: (
      <RequireAuth>
        <PokemonDetail />
      </RequireAuth>
    ),
  },
  {
    path: "/signup",
    element: <RegisterForm />,
  },
]);

function App() {
  const auth = useAuthStore((state) => state);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={500} p="xs">
            {auth.loggedIn ? (
              <Title order={3}>Welcome {auth.email}</Title>
            ) : (
              <Title order={3}>Register</Title>
            )}
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            {auth.loggedIn && (
              <Button onClick={() => auth.logOut()}>Log out</Button>
            )}
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
