export interface IMessage {
  conversationId: string;
  from: string;
  to: string;
  text: string;
}

export interface IRMessage {
  response: [IMessage];
}

export type ListMessagesProps = {
  setShow: (number: number) => void;
};

export type addBotsProps = {
  setAdd: (number: number) => void;
};

export interface IBot {
  name: string;
  id: string;
}

export interface IState {
  setAdd: (number) => void;
}

export interface IRBot {
  response: [IBot];
}
