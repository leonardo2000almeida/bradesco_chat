import { Button, Form, Container } from "react-bootstrap";
import { useState } from "react";
import style from "./style.module.scss";
import { ListMessagesProps } from "../../types/types";
import MessageController from "../../controller/messageController";

const messageController = new MessageController();

export const AddMessage = ({ setShow }: ListMessagesProps) => {
  const [message, setMessage] = useState({
    conversationId: "",
    from: "",
    to: "",
    text: "",
  });

  const setState = () => {
    setShow(0);
  };

  return (
    <>
      <Container className={style.card}>
        <Form>
          <Form.Group className="mb-3" controlId="conversationId">
            <Form.Label>Conversation id</Form.Label>
            <Form.Control
              value={message.conversationId}
              onChange={(e) =>
                setMessage({ ...message, conversationId: e.target.value })
              }
              type="text"
              placeholder="Adicione o seu conversationId"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="from">
            <Form.Label>From</Form.Label>
            <Form.Control
              value={message.from}
              name="from"
              onChange={(e) => setMessage({ ...message, from: e.target.value })}
              type="text"
              placeholder="Número do bot"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="to">
            <Form.Label>To</Form.Label>
            <Form.Control
              value={message.to}
              onChange={(e) => setMessage({ ...message, to: e.target.value })}
              type="text"
              placeholder="Receptor da mensagem"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label>Text</Form.Label>
            <Form.Control
              value={message.text}
              onChange={(e) => setMessage({ ...message, text: e.target.value })}
              type="text"
              placeholder="Conteúdo da mensagem"
            />
          </Form.Group>
        </Form>
        <div className={style.button}>
          <Button
            onClick={() => {
              messageController.sendMessage(message);
              setState();
            }}
            variant="light"
            type="submit"
          >
            Adicionar mensagem
          </Button>
        </div>
        <div className={style.closeButton}>
          <Button variant="dark" onClick={setState}>
            X
          </Button>
        </div>
      </Container>
    </>
  );
};
