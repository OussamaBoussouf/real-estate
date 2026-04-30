import { leads } from '../../../api/data/leads';
import LeadsInboxTable from '../components/leads_inbox/LeadsInboxTable';

const TITLES = ['Buyer', 'Contact', 'Property', 'Status', 'Date'];

function NotificationsPage() {
  return (
    <>
      <h1 className="mb-xl">Leads Inbox</h1>
      <LeadsInboxTable
        title={TITLES}
        data={leads}
      />
    </>
  );
}

export default NotificationsPage;
