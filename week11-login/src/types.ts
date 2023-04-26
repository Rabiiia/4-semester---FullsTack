

  type User = {
    username: string;
    password: string;
    roles: string[];
  }

  type State = {
    user: User | null;
  }
  


  type Action =
  | { type: "login"; payload: User }
  | { type: "logout" };


  

  export type {User, State, Action}