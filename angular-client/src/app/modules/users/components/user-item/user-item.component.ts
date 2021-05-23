import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UserModel } from "src/app/core/models/user.model";
import * as _ from 'lodash';

@Component({
    selector: '[app-user-item]',
    templateUrl: './user-item.component.html'
})
export class UserItemComponent implements OnInit {
    @Input() userModel: UserModel;
    @Output() userModelChange: EventEmitter<UserModel> = new EventEmitter<UserModel>();
    @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
    internalModel: UserModel;
    isEditing = false;

    ngOnInit(): void {
        this.internalModel = _.cloneDeep(this.userModel);
    }
    
    toggleEditing() {
        this.isEditing = !this.isEditing;
    }

    deleteUser() {
        this.onDelete.emit();
    }

    saveUser() {
        this.userModelChange.emit(this.internalModel);
        this.toggleEditing();
    }
}