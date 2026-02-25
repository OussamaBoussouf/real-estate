import {
  ChangeEvent,
  DragEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FileObject } from '../../../types/property';

type UseUploadFileOptions = {
  initialFiles: FileObject[];
  onFileChange: (files: FileObject[]) => void;
};

export const useUploadFile = ({
  initialFiles = [],
  onFileChange,
}: UseUploadFileOptions) => {
  const [isDragging, setIsDragging] = useState(false);
  const onFileChangeRef = useRef(onFileChange);

  useEffect(() => {
    onFileChangeRef.current = onFileChange;
  }, [onFileChange]);

  const processFiles = useCallback(
    (files: FileList) => {
      const images = Array.from(files).map(file => ({
        id: crypto.randomUUID(),
        file,
      }));
      onFileChangeRef.current?.([...initialFiles, ...images]);
    },
    [initialFiles]
  );

  const handleDragEnter = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        processFiles(files);
      }
    },
    [processFiles]
  );

  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const selected = e.target.files;
      if (selected && selected.length > 0) processFiles(selected);
    },
    [processFiles]
  );

  const removeFile = useCallback(
    (id: string) => {
      const filtered = initialFiles.filter(f => f.id !== id);
      onFileChangeRef.current?.(filtered);
    },
    [initialFiles]
  );

  return {
    isDragging,
    handleFileChange,
    removeFile,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  };
};
