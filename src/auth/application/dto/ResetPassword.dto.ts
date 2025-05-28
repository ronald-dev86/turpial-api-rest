export interface ResetPasswordDTO {
    newPassword: string,
    oldPassword: string,
    token : string
}