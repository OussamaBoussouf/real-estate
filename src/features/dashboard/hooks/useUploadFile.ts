import {
  ChangeEvent,
  DragEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type UseUploadFileOptions = {
  initialFiles?: { id: string; file: File }[];
  onFileChange?: (files: { id: string; file: File }[]) => void;
};

export const useUploadFile = ({
  initialFiles = [],
  onFileChange,
}: UseUploadFileOptions) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] =
    useState<{ id: string; file: File }[]>(initialFiles);
  const onFileChangeRef = useRef(onFileChange);

  useEffect(() => {
    onFileChangeRef.current = onFileChange;
  }, [onFileChange]);

  const processFiles = useCallback((files: FileList) => {
    const images = Array.from(files).map(file => ({
      id: crypto.randomUUID(),
      file,
    }));

    setFiles(prev => [...prev, ...images]);
    onFileChangeRef.current?.(images);
  }, []);

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

  const removeFile = useCallback((id: string) => {
    setFiles(prev => {
      const filtered = prev.filter(f => f.id !== id);
      onFileChangeRef.current?.(filtered);
      return filtered;
    });
  }, []);

  return {
    isDragging,
    files,
    handleFileChange,
    removeFile,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  };
};
