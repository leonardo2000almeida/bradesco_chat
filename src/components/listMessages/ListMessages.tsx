import axios from "axios";
import { useState, useEffect } from "react";
import { ListMessagesProps } from "../../types/types";
import {
  Container,
  Table,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { IRMessage } from "../../types/types";
import style from "./listMessages.module.scss";

export const ListMessages = ({ setShow }: ListMessagesProps) => {
  const [messages, dataSet] = useState<IRMessage>({
    response: [{ conversationId: "", from: "", to: "", text: "" }],
  });

  const [filter, setFilter] = useState("null");

  const setState = () => {
    setShow(1);
  };

  useEffect(() => {
    const request = async () => {
      let { data } = await axios.get<IRMessage>(
        `https://back-bradesco-dev.herokuapp.com/messages?conversationId=${filter}`
      );
      dataSet(data);
    };

    request();
  }, [filter]);

  return (
    <>
      <Container className={style.TableMessages}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="filtre por conversationId"
            onChange={(e) =>
              setFilter(e.target.value.trim() === "" ? "null" : e.target.value)
            }
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Table striped bordered hover variant="dark" >
          <thead>
            <tr>
              <th>ConversationId</th>
              <th>From</th>
              <th>To</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {messages.response.map((message, index) => (
              <tr key={index}>
                <td>{message.conversationId}</td>
                <td>{message.from}</td>
                <td>{message.to}</td>
                <td>{message.text}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <Button variant="dark" onClick={setState}>
            +
          </Button>
        </div>
      </Container>
    </>
  );
};
