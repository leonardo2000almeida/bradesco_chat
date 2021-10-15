import axios from "axios";
import { IBot } from "../types/types";

export class BotController {
  add = async (bot: IBot) => {
    await axios({
      method: "POST",
      baseURL: `https://back-bradesco-dev.herokuapp.com/bots/`,
      data: bot,
    });
  };

  delete = async (id: string) => {
    await axios({
      method: "DELETE",
      baseURL: `https://back-bradesco-dev.herokuapp.com/bots/${id}`,
    });
  };

  update = async (bot: IBot) => {
    await axios({
      baseURL: `https://back-bradesco-dev.herokuapp.com/bots/${bot.id}`,
      method: "PUT",
      data: bot,
    });
  };
}
