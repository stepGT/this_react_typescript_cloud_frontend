import axios from '@/core/axios';
import { ILoginFormDTO, ILoginResponseDTO } from '@/api/dto/auth.dto';

export const login = async (values: ILoginFormDTO): Promise<ILoginResponseDTO> => {
  return (await axios.post('/auth/login', values)).data;
};
