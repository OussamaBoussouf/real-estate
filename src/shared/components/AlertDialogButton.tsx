import { AlertDialog } from 'radix-ui';
import { useState } from 'react';

function AlertDialogButton({
  message,
  onDelete,
  children,
}: {
  onDelete: () => void;
  message: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger asChild>
        <button
          onClick={e => {
            e.stopPropagation(); // This is fine
            // Open dialog logic
          }}
          type="button"
          className="d-flex-center"
          title="Delete"
        >
          {children}
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="alert-dialog__overlay" />
        <AlertDialog.Content className="alert-dialog__content">
          <AlertDialog.Title className="fs-sm mb-md">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="fs-xxs mb-md">
            {message}
          </AlertDialog.Description>
          <form
            className="alert-dialog__footer"
            onSubmit={event => {
              event.preventDefault();
              if (onDelete) {
                onDelete();
              }
              setOpen(false);
            }}
          >
            <AlertDialog.Cancel asChild>
              <button type="button" className="btn btn--secondary btn--rounded">
                Cancel
              </button>
            </AlertDialog.Cancel>
            <button type="submit" className="btn btn--danger btn--rounded">
              Delete
            </button>
          </form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export default AlertDialogButton;
