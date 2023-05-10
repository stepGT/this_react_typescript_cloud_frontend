import { FC } from 'react';
import styles from './FileList.module.scss';
import { IFileItem } from '@/api/dto/files.dto';
import { FileCard } from '@/components/FileCard';

interface FileListProps {
  items: IFileItem[];
}

export const FileList: FC<FileListProps> = ({ items }) => {
  return (
    <div className={styles.root}>
      {items.map((item) => (
        <div data-id={item.id} key={item.id} className="file">
          <FileCard filename={item.filename} originalName={item.originalName} />
        </div>
      ))}
    </div>
  );
};
