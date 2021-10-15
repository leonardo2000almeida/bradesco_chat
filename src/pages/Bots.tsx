import { useState } from "react";
import { Container } from "react-bootstrap";
import { ListBots } from "../components/listBots/ListBots";
import { AddBots } from "../components/AddBot/AddBot";
import { IBot } from "../types/types";

const Bots = () => {
  const [add, setAdd] = useState(0);
  const [bot, setBot] = useState<IBot>({ name: "", id: "" });

  const whoShow = (show: Number) => {
    switch (show) {
      case 0:
        return <ListBots setAdd={setAdd} />;
      case 1:
        return <AddBots setAdd={setAdd}/>;
      case 2:
        return <></>;
    }
  };

  return (
    <>
      <Container>{whoShow(add)}</Container>
    </>
  );
};

export default Bots;
