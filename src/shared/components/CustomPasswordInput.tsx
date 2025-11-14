import { Eye, EyeOff } from 'lucide-react';
import { useRef, useState, type ComponentProps } from 'react';

function CustomPasswordInput({
  id,
  className,
  ...props
}: ComponentProps<'input'>) {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  if (inputRef.current) {
    inputRef.current.type = isVisible ? 'text' : 'password';
  }

  const handleShowPassword = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="input">
      <input
        ref={inputRef}
        type="password"
        className={`input__field ${className}`}
        id={id}
        placeholder="*********"
        {...props}
      />
      <button
        className="input__show-btn"
        type="button"
        onClick={handleShowPassword}
      >
        {isVisible ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
}

export default CustomPasswordInput;
