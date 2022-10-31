import {environment} from "../../environments/environment";

export class URLs {
  public static readonly clients = {
    clientList: `${environment.apiPrefix}/clients`,
    clientDetails: (clientId: number): string => `${environment.apiPrefix}/clients/${clientId}`,
    changePhone: (clientId: number): string => `${environment.apiPrefix}/clients/${clientId}/changephone`,
  }
}
