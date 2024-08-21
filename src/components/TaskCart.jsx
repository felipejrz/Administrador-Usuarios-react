import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button, Card, Alert } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

function TaskCart({ user }) {
  const { deleteUser } = useContext(UserContext);

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      deleteUser(user.id);
    }
  };

  return (
    <Card className="m-2 shadow-sm rounded">
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Button variant="danger" onClick={handleDelete} className="d-flex align-items-center">
          <FaTrashAlt className="me-2" />
          Eliminar Tarea
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TaskCart;
