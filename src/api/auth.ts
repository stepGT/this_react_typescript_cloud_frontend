import axios from '@/core/axios';
import {
  ILoginFormDTO,
  ILoginResponseDTO,
  IUser,
  TRegisterFormDTO,
  TRegisterResponseDTO,
} from '@/api/dto/auth.dto';
import { destroyCookie } from 'nookies';

export const login = async (values: ILoginFormDTO): Promise<ILoginResponseDTO> => {
  return (await axios.post('/auth/login', values)).data;
};

export const register = async (values: TRegisterFormDTO): Promise<TRegisterResponseDTO> => {
  return (await axios.post('/auth/register', values)).data;
};

export const getMe = async (): Promise<IUser> => {
  return (await axios.get('/users/me')).data;
};

export const logout = () => {
  destroyCookie(null, '_token', { path: '/' });
};
