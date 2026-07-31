
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const;

const MAX_FILE_SIZE = 1 * 1024 * 1024;


type AllowedFileType = (typeof ALLOWED_FILE_TYPES)[number];

const isAllowedFileType = (type : string) : type is AllowedFileType  => {
    return ALLOWED_FILE_TYPES.includes(type as AllowedFileType);
}

// Validate the Size and Type of an Image
const validateImageFile = (file: File, maxSize:number = MAX_FILE_SIZE): string | null => {
  
  if (isAllowedFileType(file.type)) {
    return 'Invalid file type. Only JPEG, PNG, and WebP are allowed.';
  }
  
  if (file.size > maxSize) {
    return 'File size must be less than 1MB.';
  }
  
  return null;
};

export {
    MAX_FILE_SIZE,
    isAllowedFileType,
    validateImageFile
}