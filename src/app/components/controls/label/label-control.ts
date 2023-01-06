import { IControlBase } from '../control-base';
export interface ILabelControl extends Omit<IControlBase, 'required | key'> {
  text?: string;
}
