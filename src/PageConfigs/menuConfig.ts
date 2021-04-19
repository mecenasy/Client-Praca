import Loadable from '@react-loadable/revised';
import { PageConfig, ActionCreatorFactory } from "./constants";
import Loader from "../modules/Loader/Loader";
import { getMenuRequest } from "../store/menu/actions";
import { getPersonRequest } from '../store/person/actions';

const Menu = Loadable({
   loader: async () => import('../Pages/MenuPage'),
   loading: Loader,
});

export const actionCreator: ActionCreatorFactory = ({
   isHydrated, isMount, isServer
}) => [
      Boolean((isHydrated && isMount) || isServer) && getMenuRequest(),
      Boolean((isHydrated && isMount) || isServer) && getPersonRequest('607d7622a4ee5b505ce39768'),
   ];

export const menuConfig: PageConfig = {
   url: '/',
   Component: Menu,
}
