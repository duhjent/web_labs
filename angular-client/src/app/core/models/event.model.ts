import { ShortEventModel } from "./short-event.model";
import { ShortUserModel } from "./short-user.model";

export interface EventModel extends ShortEventModel {
    organizer: ShortUserModel;
    participants: ShortUserModel[];
}