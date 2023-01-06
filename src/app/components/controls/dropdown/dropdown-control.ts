import { IControlBase } from "../control-base";

export interface IDropdownControl extends IControlBase {
    options?: { key: string, value: string }[];
}