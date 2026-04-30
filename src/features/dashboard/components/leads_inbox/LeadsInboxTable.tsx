import ClientPagination from '../../../../shared/components/ClientPagination';
import CustomSelect from '../../../../shared/components/CustomSelect';
import Table from '../../../../shared/components/Table';
import { useClientPagination } from '../../../../shared/hooks/useClientPagination';

type LeadsInboxTableProps = {
  title: string[];
  data: any;
};

function LeadsInboxTable({ title, data }: LeadsInboxTableProps) {
  const {
    setPage,
    totalPages,
    paginatedData,
    isFirstPage,
    isLastPage,
    nextPage,
    prevPage,
    currentPage,
  } = useClientPagination(data, 4);

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
            {paginatedData.map((lead: any) => (
              <Table.Row className="fs-xxs" key={lead.id}>
                <Table.Cell>{lead.buyer}</Table.Cell>
                <Table.Cell>
                  <p className="clr-black">{lead.contact} </p>
                  <p className="clr-black">{lead.phone}</p>
                </Table.Cell>
                <Table.Cell>{lead.property}</Table.Cell>
                <Table.Cell>
                  <CustomSelect
                    placeholder="Select Status"
                    value={lead.status}
                    options={[
                      {
                        value: 'new',
                        label: (
                          <span className="badge--primary px-md py-xs border-rounded">
                            New
                          </span>
                        ),
                      },
                      {
                        value: 'contacted',
                        label: (
                          <span className="badge--warning px-md py-xs border-rounded">
                            Contacted
                          </span>
                        ),
                      },
                      {
                        value: 'closed',
                        label: (
                          <span className="badge--success px-md py-xs border-rounded">
                            Closed
                          </span>
                        ),
                      },
                    ]}
                  />
                </Table.Cell>
                <Table.Cell>{lead.date}</Table.Cell>
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

export default LeadsInboxTable;
