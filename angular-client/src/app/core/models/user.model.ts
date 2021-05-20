import { ShortEventModel } from "./short-event.model";
import { ShortUserModel } from "./short-user.model";

export interface UserModel extends ShortUserModel {
    organizedEvents: ShortEventModel[];
    connectedEvents: ShortEventModel[];
}