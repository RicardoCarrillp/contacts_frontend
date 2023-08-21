import { Contacts } from "./contact.model";

export interface Result{
  forEach(arg0: (element: any) => void): unknown;
  status: number;
  data:Array<Contacts>
}
