import { Ellipsis } from 'lucide-react';
import Badge from '../../../shared/components/Badge';
import Table from '../../../shared/components/Table';
import { DropdownMenu } from 'radix-ui';
import AlertDialogButton from '../../../shared/components/AlertDialogButton';
import { useClientPagination } from '../../../shared/hooks/useClientPagination';
import ClientPagination from '../../../shared/components/ClientPagination';

type AllUsersTableProps = {
  title: string[];
  data: any;
};

function AllUsersTable({ title, data }: AllUsersTableProps) {
  const {
    setPage,
    totalPages,
    paginatedData,
    isFirstPage,
    isLastPage,
    nextPage,
    prevPage,
    currentPage,
  } = useClientPagination(data);

  return (
    <>
      <div className="table-wrapper">
        <Table className="table">
          <Table.Header className="table__header">
            <Table.Row>
              {title.map(title => (
                <Table.Head key={title} className="fs-xxs">
                  {title}
                </Table.Head>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {paginatedData.map((property: any) => (
              <Table.Row className="fs-xxs" key={property.id}>
                <Table.Cell className="d-flex-inline gap-sm">
                  <img
                    className="border-circle img-o-fit"
                    width="50"
                    height="50"
                    alt="user profile"
                    src={property.profileImage}
                  />
                  {property.fullName}
                </Table.Cell>
                <Table.Cell className="fs-xxs">
                  <p className="clr-black">{property.phone}</p>
                </Table.Cell>
                <Table.Cell className="fs-xxs">
                  <p className="clr-black">{property.email}</p>
                </Table.Cell>
                <Table.Cell>
                  {property.isBlocked ? (
                    <Badge type="danger">Blocked</Badge>
                  ) : (
                    <Badge type="success">Active</Badge>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <AdminMenu isBlocked={property.isBlocked} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      {totalPages > 1 && (
        <ClientPagination>
          <ClientPagination.PreviousButton
            disabled={isFirstPage}
            onClick={prevPage}
          >
            Previous
          </ClientPagination.PreviousButton>
          <ClientPagination.Pages
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={page => setPage(page)}
          />
          <ClientPagination.NextButton disabled={isLastPage} onClick={nextPage}>
            Next
          </ClientPagination.NextButton>
        </ClientPagination>
      )}
    </>
  );
}

export default AllUsersTable;

const AdminMenu = ({ isBlocked }: { isBlocked: boolean }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" className="d-flex-center">
          <Ellipsis />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="dropdown__container">
          <DropdownMenu.Item className="fs-xxs dropdown__item">
            {isBlocked ? 'Unblock User' : 'Block User'}
          </DropdownMenu.Item>
          <DropdownMenu.Item className="fs-xxs dropdown__item">
            <AlertDialogButton
              message="This action cannot be undone. This will permanently delete the user and remove it from the server."
              onDelete={() => console.log('Delete')}
            >
              Delete
            </AlertDialogButton>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
