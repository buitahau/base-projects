const allowServerRedirect = false;
const allowEmail = true;
export const passwordSigninSuffix = 'password_signin';

export const getViewTypes = () => {
  let viewTypes: string[] = [];
  if (allowEmail) {
    viewTypes = ['email_signin'];
  }
  viewTypes = [
    ...viewTypes,
    passwordSigninSuffix,
    'forgot_password',
    'update_password'
  ];
  return viewTypes;
};

export const getRedirectMethod = () => {
  return allowServerRedirect ? 'server' : 'client';
};

export const getDefaultSignInUrl = () => {
  return '/sign-in/' + passwordSigninSuffix;
};
