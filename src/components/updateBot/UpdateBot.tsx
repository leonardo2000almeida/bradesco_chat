import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { BotController } from "../../controller/botController";
import { IBot, IState } from "../../types/types";
import style from "../AddBot/style.module.scss";

const botController = new BotController();

export const UpdateBot = (props) => {
  const { id, name } = useParams<IBot>();
  const [bot, setBot] = useState<IBot>({ name: name, id: id });
  const { location } = useHistory<IState>();

  return (
    <>
      <Container className={style.card}>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              value={bot.name}
              onChange={(e) => setBot({ ...bot, name: e.target.value })}
              type="text"
              placeholder="Nome do bot"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="id">
            <Form.Label>Id</Form.Label>
            <Form.Control
              value={bot.id}
              onChange={(e) => setBot({ ...bot, id: e.target.value })}
              type="text"
              placeholder="Id do bot"
            />
          </Form.Group>
        </Form>
        <div className={style.button}>
          <Link to="/bots">
            <Button
              onClick={() => {
                botController.update(bot);
                location.state.setAdd(1);
              }}
              variant="light"
              type="submit"
            >
              Atualizar bot
            </Button>
          </Link>
        </div>
      </Container>
      <div className={style.closeButton}>
        <Button
          variant="dark"
          onClick={() => {
            botController.update(bot);
            props.setAdd(0);
          }}
        >
          X
        </Button>
      </div>
    </>
  );
};
