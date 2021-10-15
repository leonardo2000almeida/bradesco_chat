import axios from "axios";
import { FaPen } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { IRBot, addBotsProps } from "../../types/types";
import style from "../listMessages/listMessages.module.scss";
import { BotController } from "../../controller/botController";
import { Link, LinkProps } from "react-router-dom";

const botController = new BotController();

export const ListBots = (props: addBotsProps) => {
  const [bots, setBots] = useState<IRBot>({
    response: [{ name: "", id: "" }],
  });

  useEffect(() => {
    const request = async () => {
      let { data } = await axios.get<IRBot>(
        `https://back-bradesco-dev.herokuapp.com/bots`
      );
      setBots(data);
    };

    request();
  });

  return (
    <>
      <Container className={style.TableMessages}>
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {bots.response.map((bot, index) => {

              const update = {
                pathname: `/bots/${bot.id}/${bot.name}`,
                state: {
                  setAdd: props.setAdd,
                },
              };

              return (
                <tr key={index}>
                  <td>{bot.id}</td>
                  <td>{bot.name}</td>
                  <td>
                    <Button variant="dark">
                      <MdCancel onClick={() => botController.delete(bot.id)} />
                    </Button>
                  </td>
                  <td>
                    <Link to={update}>
                      <FaPen />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div>
          <Button variant="dark" onClick={() => props.setAdd(1)}>
            +
          </Button>
        </div>
      </Container>
    </>
  );
};
