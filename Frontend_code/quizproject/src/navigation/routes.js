import Home from "../screens/home"
import Login from "../screens/login";
import SignUp from "../screens/signup";
import Profile from "../screens/profile";
import Quiz     from "../screens/quiz";
import Score     from "../screens/score";

export const privateRoutes = [
    {
        path: "/profile",
        component: <Profile />
    },
    {
        path: "/quiz",
        component: <Quiz />
    },
];

export const publicRoutes = [
    {
        path: "/signup",
        component: <SignUp />
    },
    {
        path: "/home",
        component: <Home />
    },
    {
        path: "/login",
        component: <Login />
    },
    {
        path: "/profile",
        component: <Profile />
    },
    {
        path: "/quiz",
        component: <Quiz />
    },
    {
        path: "/score",
        component: <Score />
    },
];
