import { RoleType } from '~/src/store/panelMenu/role/constants';
import api from '../api';
import { menu } from './paths';

export const getMenu = async (role: RoleType) => {
   return await api.get(`${menu}/${role}`)
};
