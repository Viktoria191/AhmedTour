export type UserType = {
  id: number;
  name: string;
  email: string;
  roleId: number;
};

export type BackendAuth = { user: UserType; accessToken: string };  

export type UserState =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'authenticated'; } & UserType );

export type AuthState = {
  user: UserState;
  accessToken: string;
  addRegistrationModalIsOpen: boolean;
  addLoginModalIsOpen: boolean;
};

export type LoginFormData = {
  email: string;
  password: string;
};
export type SignupFormData = {
  email: string;
  name: string;
  password: string;
};

export type PayForm = {
  card: string;
  month: string;
  year: string;
  cvv: string;
};

export type SubscribePayResponseType = {
  subscribeLevl: string;
};
