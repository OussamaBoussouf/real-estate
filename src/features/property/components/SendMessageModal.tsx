import { Dialog } from 'radix-ui';
import { useState, type ReactNode } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { X } from 'lucide-react';
import { useAuthContext } from '../../../context/AuthContext';
import { useParams } from 'react-router-dom';
import api from '../../../app/axios';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

type SendMessageModalProps = {
  children: ReactNode;
  className?: string;
};

function SendMessageModal({ children, className }: SendMessageModalProps) {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: Yup.object({
      message: Yup.string().required('message is required'),
    }),
    onSubmit: async values => {
      const info = {
        propertyId: id,
        client_name: user?.fullName,
        email: user?.email,
        phone: user?.phone,
        status: 'new',
        message: values.message,
      };

      try {
        const { data } = await api.post('/send-message', info);
        toast.success(data.message);
        formik.resetForm();
        setOpen(false);
      } catch (err) {
        const { message: errorMessage } = err as AxiosError;
        toast.error(errorMessage);
      }
    },
  });

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Trigger asChild>
        <button className={`btn btn--primary w-full mt-md ${className}`}>
          {children}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content className="modal__content">
          <Dialog.Title className="modal__title mb-sm">
            Contact owner
          </Dialog.Title>
          <Dialog.Description className="mb-md fs-xxs">
            Send a quick message to the owner to show your interest.
          </Dialog.Description>
          <form onSubmit={formik.handleSubmit} className="modal__form">
            <fieldset className="modal__fieldset">
              <label
                htmlFor="message"
                className="modal__fieldset__label mb-sm fw-bold fs-xxs"
              >
                Message
              </label>
              <textarea
                id="message"
                className="modal__fieldset__input"
                placeholder="Enter your message"
                value={formik.values.message}
                onChange={formik.handleChange}
                cols={20}
                rows={5}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <span className="text-danger fs-xxs">
                  {formik.errors.message}
                </span>
              ) : null}
            </fieldset>
            <div className="modal__footer">
              <Dialog.Close asChild>
                <button
                  disabled={true}
                  type="button"
                  className={`btn btn--secondary btn--rounded ${formik.isSubmitting ? 'btn--disabled' : ''}`}
                >
                  Cancel
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className={`modal__submit-btn btn btn--primary btn--rounded ${formik.isSubmitting ? 'btn--disabled' : ''}`}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? 'Processing...' : 'Submit'}
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button aria-label="Close" className="modal__close-btn">
              <X size={22} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default SendMessageModal;
