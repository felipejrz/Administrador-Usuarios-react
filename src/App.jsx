import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container
      fluid
      className="m-0 p-4"
      style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", overflowX: "hidden" }}
    >
      <Row className="mb-3 text-center">
        <h1 className="display-4">Gestor de Usuarios</h1>
        <p className="lead">Administra y visualiza la lista de usuarios</p>
      </Row>
      <Row className="mb-4">
        <div className="w-100">
          <TaskForm />
        </div>
      </Row>
      <Row>
        <TaskList />
      </Row>
    </Container>
  );
}

export default App;
