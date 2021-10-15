import axios from "axios";
import { IMessage } from "../types/types";

export default class MessageController {
  sendMessage = async (payload: IMessage) => {
    await axios({
      baseURL: "https://back-bradesco-dev.herokuapp.com/messages",
      method: "POST",
      data: payload,
    });
  };
}
