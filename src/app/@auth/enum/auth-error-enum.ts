export enum AuthErrorMessageEnum {
  INVALID_EMAIL = 'email address not found',
  INVALID_PASSWORD = 'The password is invalid',
  USER_DISABLED = 'The user account has been disabled by an administrator.',
  USER_NOT_FOUND = 'There is no user record corresponding to this identifier. The user may have been deleted.',
  EMAIL_ALREADY_IN_USE = 'The email address is already in use by another account.',
  OPERATION_NOT_ALLOWED = 'Email/Password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.',
  WEAK_PASSWORD = 'The password must be 6 characters long or more.',
}

enum AuthErrorEnum {
  INVALID_EMAIL = 'auth/invalid-email',
  INVALID_PASSWORD = 'auth/wrong-password',
  USER_DISABLED = 'auth/user-disabled',
  USER_NOT_FOUND = 'auth/user-not-found',
  EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
  OPERATION_NOT_ALLOWED = 'auth/operation-not-allowed',
  WEAK_PASSWORD = 'auth/weak-password',
}

export const AuthErrorMap: { [key in AuthErrorEnum]: AuthErrorMessageEnum } = {
  [AuthErrorEnum.INVALID_EMAIL]: AuthErrorMessageEnum.INVALID_EMAIL,
  [AuthErrorEnum.INVALID_PASSWORD]: AuthErrorMessageEnum.INVALID_PASSWORD,
  [AuthErrorEnum.USER_DISABLED]: AuthErrorMessageEnum.INVALID_EMAIL,
  [AuthErrorEnum.USER_NOT_FOUND]: AuthErrorMessageEnum.INVALID_EMAIL,
  [AuthErrorEnum.EMAIL_ALREADY_IN_USE]: AuthErrorMessageEnum.INVALID_EMAIL,
  [AuthErrorEnum.OPERATION_NOT_ALLOWED]: AuthErrorMessageEnum.INVALID_EMAIL,
  [AuthErrorEnum.WEAK_PASSWORD]: AuthErrorMessageEnum.INVALID_PASSWORD,
};
