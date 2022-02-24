import Home from "../screens/home";
import Login from "../screens/login";
import SignUp from "../screens/signup";
import Profile from "../screens/profile";
import Quiz from "../screens/quiz";
export const privateRoutes = [
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/quiz",
    component: Quiz,
  },

  {
    path: "/",
    component: Home,
  },
];

export const publicRoutes = [
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];
