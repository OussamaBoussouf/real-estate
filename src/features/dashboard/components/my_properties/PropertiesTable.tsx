import { SquarePen, Trash2 } from 'lucide-react';
import Badge from '../../../../shared/components/Badge';
import Table from '../../../../shared/components/Table';
import { formatCurrency } from '../../../../shared/utils/formatter';
import ClientPagination from '../../../../shared/components/ClientPagination';
import { useClientPagination } from '../../../../shared/hooks/useClientPagination';
import AlertDialogButton from '../../../../shared/components/AlertDialogButton';

function PropertiesTable({ title, data }: { title: string[]; data: any }) {
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
        <Table className="properties-table">
          <Table.Header className="properties-table__header">
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
              <Table.Row key={property.id}>
                <Table.Cell className="d-flex-inline gap-md">
                  <img
                    className="properties-table__image"
                    src="https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?q=80&w=807&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={70}
                    height={55}
                    alt={property.title}
                  />
                  <span className="fs-xxs">{property.title}</span>
                </Table.Cell>
                <Table.Cell className="fs-xxs">{property.type}</Table.Cell>
                <Table.Cell className="fs-xxs">
                  {property.available ? (
                    <Badge type="success">Available</Badge>
                  ) : (
                    <Badge type="secondary">Unavailable</Badge>
                  )}
                </Table.Cell>
                <Table.Cell className="fs-xxs">
                  {formatCurrency(property.price)}{' '}
                  {property.type === 'rent' ? '/mo' : ''}
                </Table.Cell>
                <Table.Cell className="fs-xxs">
                  {property.location.city}
                </Table.Cell>
                <Table.Cell className="d-flex-inline gap-sm">
                  <button className="d-flex-center" type="button" title="Edit">
                    <SquarePen size="18" />
                  </button>
                  <AlertDialogButton
                    onDelete={() => console.log('Delete')}
                    deletedElement="property"
                  >
                    <Trash2 size="18" color="red" />
                  </AlertDialogButton>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
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
    </>
  );
}

export default PropertiesTable;
