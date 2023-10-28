"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthError = exports.AuthStrategy = void 0;
var AuthStrategy;
(function (AuthStrategy) {
    AuthStrategy["JWT"] = "JWT";
    AuthStrategy["Secret"] = "SECRET";
})(AuthStrategy = exports.AuthStrategy || (exports.AuthStrategy = {}));
var AuthError;
(function (AuthError) {
    AuthError["InvalidLoginCredentials"] = "Invalid login credentials";
    AuthError["InvalidToken"] = "Invalid token";
    AuthError["InvalidSecret"] = "Invalid secret";
})(AuthError = exports.AuthError || (exports.AuthError = {}));
