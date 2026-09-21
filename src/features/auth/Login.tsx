import { useFormik } from 'formik';
import { Dialog } from 'radix-ui';
import { AxiosError } from 'axios';
import CustomPasswordInput from '../../shared/components/CustomPasswordInput';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../context/AuthContext';
import { LOGIN_SCHEMA } from './schema';
import { useState } from 'react';

type LoginProps = {
  children: React.ReactNode;
  className?: string;
};

function Login({ children, className }: LoginProps) {
  const { login } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(prev => !prev);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LOGIN_SCHEMA,
    onSubmit: async (values, actions) => {
      try {
        await login(values);
        toggleDialog();
      } catch (err) {
        const { message: errorMessage } = err as AxiosError;
        toast.error(errorMessage);
      } finally {
        actions.setSubmitting(false);
      }
    },
  });

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={() => {
        toggleDialog();
      }}
    >
      <Dialog.Trigger asChild>
        <button className={`${className}`}>{children}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content
          onPointerDownOutside={e => {
            const target = e.target as HTMLElement;
            if (target?.closest('.Toastify')) {
              e.preventDefault();
            }
          }}
          className="modal__content"
        >
          <Dialog.Title className="text-center mb-sm">Login</Dialog.Title>
          <Dialog.Description className="text-center mb-lg">
            Enter your details to get sign in to your account
          </Dialog.Description>
          <form onSubmit={formik.handleSubmit} className="modal__form">
            <fieldset className="modal__fieldset">
              <label
                className="modal__fieldset_label mb-sm fw-bold fs-xxs"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="modal__fieldset__input"
                placeholder="PedroDuarte@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="text-danger fs-xxs">
                  {formik.errors.email}
                </span>
              ) : null}
            </fieldset>
            <fieldset className="modal__fieldset">
              <label
                className="modal__fieldset_label mb-sm fw-bold fs-xxs"
                htmlFor="password"
              >
                Password
              </label>
              <CustomPasswordInput
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="text-danger fs-xxs">
                  {formik.errors.password}
                </span>
              ) : null}
            </fieldset>
            <button
              disabled={formik.isSubmitting}
              type="submit"
              className={`btn btn--primary btn--rounded mt-md ${
                formik.isSubmitting && 'btn--disabled'
              }`}
            >
              {formik.isSubmitting ? 'Processing...' : 'Sign in'}
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Login;
