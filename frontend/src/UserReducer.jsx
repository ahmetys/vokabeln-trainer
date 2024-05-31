export function UserReducer(user, action) {
  console.log(action);
  switch (action.type) {
    case "login":
      console.log(user);
      if (user.username === action.payload.username && user.password === action.payload.password) {
        return { ...user, isLoggedIn: true };
      } else {
        return user;
      }
      break;

    default:
      break;
  }
}
