import TaskCart from "./TaskCart";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Col, Container, Row, Alert } from "react-bootstrap";

function TaskList() {
  const { users } = useContext(UserContext);

  if (users.length === 0) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="info">
          No hay usuarios para mostrar. ¡Añade algunos usuarios para comenzar!
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center display-6">Lista de Usuarios</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {users.map((user) => (
          <Col key={user.id}>
            <TaskCart user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TaskList;
