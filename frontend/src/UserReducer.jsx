export function UserReducer(user, action) {
  switch (action.type) {
    case "login":
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
