interface user {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  friends?: Array<user> | null;
}
interface post {
  id: string;
  author: user;
  content: string;
  likes: user;
  createdAt: Date;
}
interface userActions {
  type: "SET_USER" | "CLEAR_USER";
  payload: user;
}
