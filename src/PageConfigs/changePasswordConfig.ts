import Loadable from '@react-loadable/revised';
import { PageConfig, ActionCreatorFactory } from "./constants";
import Loader from "../modules/Loader/Loader";

const ChangePassword = Loadable({
   loader: async () => import('../Pages/ChangePasswordPage'),
   loading: Loader,
});

export const actionCreator: ActionCreatorFactory = () => []

export const changePasswordConfig: PageConfig = {
   url: '/change_password',
   Component: ChangePassword,
};
