import { Dialog } from 'radix-ui';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>Edit Profile</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>Welcome to our shares</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default App;
