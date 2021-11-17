import { MenuItem, MenuItemActionType, MenuItemAction, MenuItemData } from "./constants";
import { AxiosError } from 'axios';

export const getMenuItemsRequest = (): MenuItemAction => ({
   type: MenuItemActionType.GetMenuItemsRequest
});

export const getMenuItemsSuccess = (menu: MenuItem[]): MenuItemAction => ({
   type: MenuItemActionType.GetMenuItemsSuccess,
   menu,
});

export const getMenuItemsFail = (error: AxiosError): MenuItemAction => ({
   type: MenuItemActionType.GetMenuItemsFail,
   error,
});


export const setMenuItemsRequest = (item: MenuItemData): MenuItemAction => ({
   type: MenuItemActionType.SetMenuItemsRequest,
   item,
});

export const setMenuItemsSuccess = (): MenuItemAction => ({
   type: MenuItemActionType.SetMenuItemsSuccess,
});

export const setMenuItemsFail = (error: AxiosError): MenuItemAction => ({
   type: MenuItemActionType.SetMenuItemsFail,
   error,
});

export const removeMenuItemsRequest = (id: string): MenuItemAction => ({
   type: MenuItemActionType.RemoveMenuItemsRequest,
   id,
});

export const removeMenuItemsSuccess = (): MenuItemAction => ({
   type: MenuItemActionType.RemoveMenuItemsSuccess,
});

export const removeMenuItemsFail = (error: AxiosError): MenuItemAction => ({
   type: MenuItemActionType.RemoveMenuItemsFail,
   error,
});
