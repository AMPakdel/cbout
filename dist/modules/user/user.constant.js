"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserError = exports.INITIAL_COUNT_OF_EACH_STATUS = void 0;
exports.INITIAL_COUNT_OF_EACH_STATUS = 0;
var UserError;
(function (UserError) {
    UserError["ThisEmailAlreadyExists"] = "This email already exists";
    UserError["ThisMobileAlreadyExists"] = "This mobile already exists";
    UserError["ThisNationalCodeAlreadyExists"] = "This nationalCode already exists";
    UserError["InvalidUserStatus"] = "Invalid user status";
    UserError["UserNotFound"] = "User not found";
    UserError["ThisUserHasNotBeenApproved"] = "This user has not been approved";
    UserError["ThisUserHasBeenBanned"] = "This user has been banned";
    UserError["RoleUser"] = "Role not found";
})(UserError = exports.UserError || (exports.UserError = {}));
