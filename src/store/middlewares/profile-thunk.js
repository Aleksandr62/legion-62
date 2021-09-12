import { fbAuth } from "../../api";

export const profileThunk = () => (next) => (action) => {
  const { email, password } = action.payload;
  const user = fbAuth.auth(email, password);
  console.log("state", email, user);

  return next(action);
};
