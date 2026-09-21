import type { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { Dialog } from 'radix-ui';

import CustomPasswordInput from '../../shared/components/CustomPasswordInput';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../context/AuthContext';
import { SIGNUP_SCHEMA } from './schema';
import { useState } from 'react';

type SignUpProps = {
  className: string;
  children: React.ReactNode;
};

function SignUp({ children, className }: SignUpProps) {
  const { signup } = useAuthContext();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(prev => !prev);
    formik.resetForm();
  };
  

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: SIGNUP_SCHEMA,
    onSubmit: async (values, actions) => {
      try {
        const response = await signup(values);
        formik.resetForm();
        toast.success(response.data.message);
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
      onOpenChange={toggleDialog}
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
          <Dialog.Title className="text-center mb-sm">Sign up</Dialog.Title>
          <Dialog.Description className="text-center mb-lg">
            Create an account
          </Dialog.Description>
          <form className="modal__form" onSubmit={formik.handleSubmit}>
            <fieldset className="modal__fieldset">
              <label
                className="modal__fieldset_label mb-sm fw-bold fs-xxs"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="modal__fieldset__input"
                placeholder="Pedro Duarte"
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <span className="text-danger fs-xxs">
                  {formik.errors.fullName}
                </span>
              ) : null}
            </fieldset>
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
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tele"
                className="modal__fieldset__input"
                id="phone"
                placeholder="06 66 66 66 66"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span className="text-danger fs-xxs">
                  {formik.errors.phone}
                </span>
              ) : null}
            </fieldset>
            <fieldset className="modal__fieldset">
              <label
                className="modal__fieldset_label mb-sm fw-bold fs-xxs"
                htmlFor="name"
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
              type="submit"
              disabled={formik.isSubmitting}
              className={`modal__submit-btn btn btn--primary btn--rounded mt-md ${
                formik.isSubmitting && 'btn--disabled'
              }`}
            >
              {formik.isSubmitting ? 'Processing...' : 'Create an account'}
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default SignUp;
