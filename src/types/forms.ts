/* ---------==== custom forms ====--------- */

export interface CreatePlantFormData {
  name: string;
}
export interface HealthManagerFormData {
  value: number;
  plantId: number;
}
/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}
