import { RouterProvider } from "react-router-dom"
import { routes } from "./routes";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Container className="mb-4">
        <RouterProvider router={routes} />
      </Container>
    </>
  )
}

export default App
