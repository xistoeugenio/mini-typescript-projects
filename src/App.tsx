import { RouterProvider } from "react-router-dom"
import { routes } from "./routes";
import { Container } from "react-bootstrap";

function App() {

  return (
    <Container>
      <RouterProvider router={routes}/>
    </Container>
  )
}

export default App
