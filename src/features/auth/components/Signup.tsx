import type { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { Dialog } from 'radix-ui';
import * as Yup from 'yup';
import api from '../../../app/axios';
import CustomPasswordInput from '../../../shared/components/CustomPasswordInput';
import { toast } from 'react-toastify';

type SignUpProps = {
  open: boolean;
  onDialogChange: (mode: 'login' | 'signup') => void;
  onModeChange: (mode: 'login' | 'signup') => void;
};

function SignUp({ open, onDialogChange, onModeChange }: SignUpProps) {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('full name is required'),
      email: Yup.string()
        .email('invalid email address')
        .required('email is required'),
      phone: Yup.string()
        .matches(/[0-9]/, 'enter a valid phone number')
        .min(10, 'phone number should be at least 10 digits')
        .required('phone is required'),
      password: Yup.string()
        .min(8, 'password should contain at least 8 characters')
        .required('password is required'),
    }),
    onSubmit: async (values, actions) => {
      try {
        const response = await api.post('/auth/sign-up', values);
        formik.resetForm();
        toast.success(response.data.message);
      } catch (err) {
        const { response } = err as AxiosError;
        const errorMessage = (response?.data as { message: string }).message;

        if (errorMessage) {
          toast.error(errorMessage);
          console.log('Error occured:', errorMessage);
        }
      } finally {
        actions.setSubmitting(false);
      }
    },
  });

  return (
    <Dialog.Root
      open={open}
      onOpenChange={() => {
        formik.resetForm();
        onDialogChange('signup');
      }}
    >
      <Dialog.Trigger asChild></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content className="modal__content">
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
              className={`modal__submit-btn btn btn--primary btn--rounded ${
                formik.isSubmitting && 'btn--disabled'
              }`}
            >
              {formik.isSubmitting ? 'Processing...' : 'Create an account'}
            </button>
            <p className="fs-xxs text-center">
              Have an account?{' '}
              <button
                className="fw-bold"
                type="button"
                onClick={() => onModeChange('login')}
              >
                Sign in
              </button>
            </p>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default SignUp;
