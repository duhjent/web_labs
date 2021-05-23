import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "src/app/core/models/user.model";
import { UserService } from "../../services/user.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.page.html'
})
export class UsersPage implements OnInit {
    users: Observable<UserModel[]>;
    
    constructor(private userService: UserService) { }
    
    ngOnInit(): void {
        this.fetchUsers();
    }

    fetchUsers() {
        this.users = this.userService.getUsers();
    }

    updateUser(originalUser: UserModel, userModel: UserModel) {
        if (originalUser.userName !== userModel.userName) {
            this.userService.changeUserName(originalUser.userName, userModel.userName).subscribe(_ => {this.fetchUsers()});
        }
        if (originalUser.email !== userModel.email) {
            this.userService.changeUserEmail(originalUser.userName, userModel.email).subscribe(_ => {this.fetchUsers()});
        }
    }

    onUserDelete(userName: string) {
        this.userService.deleteUser(userName).subscribe(_ => {this.fetchUsers()});
    }
}