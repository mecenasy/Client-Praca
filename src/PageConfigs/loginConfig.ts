import Loadable from '@react-loadable/revised';
import { PageConfig, ActionCreatorFactory } from "./constants";
import Loader from "../modules/Loader/Loader";

const Login = Loadable({
   loader: async () => import('../Pages/LoginPage'),
   loading: Loader,
});

export const actionCreator: ActionCreatorFactory = () => []

export const loginConfig: PageConfig = {
   url: '/login',
   Component: Login,
};
