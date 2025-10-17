import { Dialog } from 'radix-ui';
import { useState, type ReactNode } from 'react';

type SendMessageModalProps = {
  children: ReactNode;
  triggerClass?: string;
  triggerText: string;
};

function SendMessageModal({ children, triggerClass, triggerText }: SendMessageModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className={`btn btn--primary btn--pill w-full mt-md ${triggerClass}`}
        >
          {triggerText}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        {children}
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default SendMessageModal;
