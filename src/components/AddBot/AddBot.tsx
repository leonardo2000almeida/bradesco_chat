import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { BotController } from "../../controller/botController";
import { IBot, addBotsProps } from "../../types/types";
import style from "./style.module.scss";

const botController = new BotController();

export const AddBots = (props: addBotsProps) => {
  const [bot, setBot] = useState<IBot>({ name: "", id: "" });
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
          <Button
            onClick={() => {
              botController.add(bot);
              props.setAdd(0);
            }}
            variant="light"
            type="submit"
          >
            Adicionar bot
          </Button>
        </div>
      </Container>
      <div className={style.closeButton}>
        <Button
          variant="dark"
          onClick={() => {
            props.setAdd(0);
          }}
        >
          X
        </Button>
      </div>
    </>
  );
};
