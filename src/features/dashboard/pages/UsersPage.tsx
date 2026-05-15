import { users } from '../../../api/data/users';
import AllUsersTable from '../components/AllUsersTable';

const TITlES = ['User', 'Phone Number', 'Email', 'Status', 'Action'];

function UsersPage() {
  return (
    <>
      <h1 className="mb-xl">All Users</h1>
      <AllUsersTable title={TITlES} data={users} />
    </>
  );
}

export default UsersPage;
