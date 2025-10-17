import { Dialog } from 'radix-ui';
import { X } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SendMessageModal from './SendMessageModal';

function OwnerDetails() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('name is required'),
      email: Yup.string().required('email is required'),
      phone: Yup.string()
        .matches(/[0-9]/, 'enter a valid phone number')
        .min(10, 'phone number should be at least 10 digits')
        .required('phone is required'),
      message: Yup.string().required('message is required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="owner-details">
      <div className="owner-details__info">
        <img
          width="80"
          height="80"
          className="owner-details__avatar"
          src="https://a.storyblok.com/f/191576/1176x882/f95162c213/profile_picture_hero_before.webp"
          alt="owner profile image"
        />
        <div className="owner-details__meta">
          <span className="owner-details__name fw-bold">Alex Ripon</span>
          <span>New York, NY</span>
        </div>
      </div>
      <ul className="owner-details__contact mt-xl">
        <li className="owner-details__contact-phone">
          <span>Phone:</span>
          <span className="fw-bold">+33 309232323</span>
        </li>
        <li className="owner-details__contact-email">
          <span>Email:</span>
          <span className="fw-bold">xyz@gmail.com</span>
        </li>
      </ul>
      <SendMessageModal triggerText="Send Message">
        <Dialog.Content className="modal__content">
          <Dialog.Title className="modal__title mb-sm">
            Contact owner
          </Dialog.Title>
          <Dialog.Description className="mb-md">
            Send a quick message to the owner to show your interest.
          </Dialog.Description>
          <form onSubmit={formik.handleSubmit} className="modal__form">
            <fieldset className="modal__fieldset">
              <label
                htmlFor="name"
                className="modal__fieldset__label mb-sm fw-bold fs-xxs"
              >
                Full name
              </label>
              <input
                id="name"
                className="modal__fieldset__input"
                type="text"
                placeholder="Pedro Durate"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name ? (
                <span className="text-danger">{formik.errors.name}</span>
              ) : null}
            </fieldset>
            <fieldset className="modal__fieldset">
              <label
                htmlFor="email"
                className="modal__fieldset__label mb-sm fw-bold fs-xxs"
              >
                Email
              </label>
              <input
                id="email"
                className="modal__fieldset__input"
                type="email"
                placeholder="PedroDurate@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="text-danger">{formik.errors.email}</span>
              ) : null}
            </fieldset>
            <fieldset className="modal__fieldset">
              <label
                htmlFor="tel"
                className="modal__fieldset__label mb-sm fw-bold fs-xxs"
              >
                Phone
              </label>
              <input
                id="phone"
                className="modal__fieldset__input"
                type="phone"
                placeholder="06 66 66 66 66"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span className="text-danger">{formik.errors.phone}</span>
              ) : null}
            </fieldset>
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
                <span className="text-danger">{formik.errors.message}</span>
              ) : null}
            </fieldset>
            <div className="modal__footer">
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close"
                  className="btn btn--secondary btn--rounded"
                >
                  Cancel
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className="modal__submit-btn btn btn--primary btn--rounded"
              >
                Submit
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button aria-label="Close" className="modal__close-btn">
              <X size={22} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </SendMessageModal>
    </div>
  );
}

export default OwnerDetails;
