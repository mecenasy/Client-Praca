import { DroppedFile } from "~/src/modules/Components/Input/types"
import { Role } from "../auth/constants"
import { MenuSide } from "../menu/constants"

export enum MenuItemActionType {
   MenuItemRequest = 'MENU_ITEM_REQUEST',
   MenuItemSuccess = 'MENU_ITEM_SUCCESS',
   MenuItemFail = 'MENU_ITEM_FAIL',
}

export type MenuItemAction = any

export enum MenuItemField {
   Name = 'name',
   ShortName = 'shortName',
   Position = 'position',
   Hidden = 'hidden',
   Link = 'link',
   Side = 'side',
   Image = 'image',
   Role = 'role',
}

export interface MenuItemData {
   [MenuItemField.Name]: string;
   [MenuItemField.ShortName]: string;
   [MenuItemField.Position]: number;
   [MenuItemField.Hidden]: boolean
   [MenuItemField.Link]: string;
   [MenuItemField.Side]: MenuSide;
   [MenuItemField.Image]: DroppedFile;
   [MenuItemField.Role]: Role[];
}