import { IUser } from '@/api/dto/auth.dto';

export interface IFileItem {
  filename: string;
  originalName: string;
  size: number;
  mimetype: string;
  user: IUser;
  deletedAt: string | null;
  id: number;
}
