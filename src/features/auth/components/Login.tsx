import { useFormik } from 'formik';
import { Dialog } from 'radix-ui';
import * as Yup from 'yup';
import { AxiosError } from 'axios';
import CustomPasswordInput from '../../../shared/components/CustomPasswordInput';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../../context/AuthContext';

type LoginProps = {
  open: boolean;
  onDialogChange: (mode: 'login' | 'signup') => void;
  onModeChange: (mode: 'login' | 'signup') => void;
};

function Login({ open, onDialogChange, onModeChange }: LoginProps) {
  const {login } = useAuthContext();
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('invalid email address')
        .required('email is required'),
      password: Yup.string()
        .min(8, 'password should contain at least 8 characters')
        .required('password is required'),
    }),
    onSubmit: async (values, actions) => {
      try {
        await login(values);
        onDialogChange('login');
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
      open={open}
      onOpenChange={() => {
        formik.resetForm();
        onDialogChange('login');
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content className="modal__content">
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
              className={`btn btn--primary btn--rounded ${
                formik.isSubmitting && 'btn--disabled'
              }`}
            >
              {formik.isSubmitting ? 'Processing...' : 'Sign up'}
            </button>
            <p className="fs-xxs text-center">
              Don't have an account?{' '}
              <button
                className="fw-bold"
                type="button"
                onClick={() => onModeChange('signup')}
              >
                Sign up
              </button>
            </p>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Login;
