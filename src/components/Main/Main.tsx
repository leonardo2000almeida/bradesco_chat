import axios from "axios";
import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Bots from "../../pages/Bots";
import Message from "../../pages/Message";
import { IRBot } from "../../types/types";
import { UpdateBot } from "../updateBot/UpdateBot";

const Main = () => {
  const [show, setShow] = useState(0);

  return (
    <Switch>
      <Route exact path="/bots" component={Bots} />
      <Route exact path="/messages" component={Message} />
      <Route path="/bots/:id/:name" component={UpdateBot} />
    </Switch>
  );
};

export default Main;
