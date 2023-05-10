export interface ILoginFormDTO {
  email: string;
  password: string;
}

export interface ILoginResponseDTO {
  token: string;
}

export type TRegisterFormDTO = ILoginFormDTO & { fullName: string };
export type TRegisterResponseDTO = ILoginResponseDTO;

export interface IUser {
  id: number;
  email: string;
  fullName: string;
}
