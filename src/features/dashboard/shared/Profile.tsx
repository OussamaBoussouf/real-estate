import { useAuthContext } from '../../../context/AuthContext';

function Profile() {
  const { user } = useAuthContext();

  console.log(user);

  return (
    <>
      <h1 className="mb-xl">My Profile</h1>
      <div>
        <h2 className="fs-xs mb-md">Profile photo</h2>
        <div className="mb-lg">
          <img
            className="profile__image"
            src={user?.profileImage}
            alt="profile image"
          />
          <p className="fs-xxs mb-sm">
            Recommanded photo size: 126 <span>x</span> 126px
          </p>
          <div>
            <button
              className="btn btn--primary btn--rounded mr-md"
              type="button"
            >
              Update photo
            </button>
            <button className="btn btn--danger btn--rounded" type="button">
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="profile__personal-info">
        <div>
          <h2 className="fs-xs">Personal information</h2>
          <p className="fs-xxs">update your personal info here</p>
        </div>
        <form action="" className="profile__form">
          {/* Email and Full Name */}
          <div className="cols-2">
            <div className="profile__form-group">
              <label className="fs-xxs" htmlFor="fullName">
                Full Name
              </label>
              <br />
              <input
                value={user?.fullName}
                type="text"
                id="fullName"
                className="profile__input"
              />
            </div>
            <div className="profile__form-group">
              <label className="fs-xxs" htmlFor="email">
                Email
              </label>
              <br />
              <input
                value={user?.email}
                type="email"
                id="email"
                className="profile__input"
              />
            </div>
          </div>
          <div className="profile__form-group">
            <label className="fs-xxs" htmlFor="phone">
              Phone
            </label>{' '}
            <br />
            <input
              value={user?.phone}
              type="text"
              id="phone"
              className="profile__input"
            />
          </div>
          <div className="profile__form-group">
            <label className="fs-xxs" htmlFor="address">
              Address
            </label>{' '}
            <br />
            <input value={user?.address} type="text" id="address" className="profile__input" />
          </div>
        </form>
      </div>
      <div className="profile__password">
        <div>
          <h2 className="fs-xs">Password</h2>
          <p className="fs-xxs">enter your new password here</p>
        </div>
        <form action="" className="profile__form">
          <div className="profile__form-group">
            <label className="fs-xxs" htmlFor="password">
              Password
            </label>{' '}
            <br />
            <input
              placeholder='**************'
              type="password"
              id="password"
              className="profile__input"
            />
          </div>
        </form>
      </div>
      <div>
        <button type='button' className='btn btn--info btn--rounded mt-md profile__save-btn'>Save Changes</button>
      </div>
    </>
  );
}

export default Profile;
