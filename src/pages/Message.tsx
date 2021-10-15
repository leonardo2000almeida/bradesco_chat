import { useState } from "react";
import { Container } from "react-bootstrap";
import { AddMessage } from "../components/AddMessage/AddMessage";
import { ListMessages } from "../components/listMessages/ListMessages";

const Message = () => {
  const [show, setShow] = useState(0);

  const whoShow = (show: Number) => {
    switch (show) {
      case 0:
        return <ListMessages setShow={setShow} />;
      case 1:
        return <AddMessage setShow={setShow}/>;
    }
  };

  return (
    <>
      <Container>{whoShow(show)}</Container>
    </>
  );
};

export default Message;
