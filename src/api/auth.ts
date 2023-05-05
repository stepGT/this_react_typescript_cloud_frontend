import axios from '@/core/axios';
import {
  ILoginFormDTO,
  ILoginResponseDTO,
  TRegisterFormDTO,
  TRegisterResponseDTO,
} from '@/api/dto/auth.dto';

export const login = async (values: ILoginFormDTO): Promise<ILoginResponseDTO> => {
  return (await axios.post('/auth/login', values)).data;
};

export const register = async (values: TRegisterFormDTO): Promise<TRegisterResponseDTO> => {
  return (await axios.post('/auth/register', values)).data;
};
