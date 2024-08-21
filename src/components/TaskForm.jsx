import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button, Card, CardBody, CardTitle, Form, Row, Col } from "react-bootstrap";

function TaskForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { createUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
      name,
      email,
    });
    setName("");
    setEmail("");
  };

  return (
    <Card className="mx-5  shadow-sm">
      <CardBody>
        <CardTitle className="mb-4">Agregar Usuario</CardTitle>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  autoFocus
                />
                <Form.Text className="text-muted">
                  Ingrese el nombre completo del usuario.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nombre@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <Form.Text className="text-muted">
                  Asegúrese de que el correo electrónico sea válido.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="mt-3">
            <i className="bi bi-save me-2"></i>Guardar
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default TaskForm;
