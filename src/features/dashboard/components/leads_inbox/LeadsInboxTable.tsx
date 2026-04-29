import SelectDemo from '../../../../shared/components/SelectDemo';
import Table from '../../../../shared/components/Table';

type LeadsInboxTableProps = {
  title: string[];
  data: any;
};

function LeadsInboxTable({ title, data }: LeadsInboxTableProps) {
  return (
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
          {data.map((lead: any) => (
            <Table.Row className="fs-xxs" key={lead.id}>
              <Table.Cell>{lead.buyer}</Table.Cell>
              <Table.Cell>
                <p className="clr-black">{lead.contact} </p>
                <p className="clr-black">{lead.phone}</p>
              </Table.Cell>
              <Table.Cell>{lead.property}</Table.Cell>
              <Table.Cell>
                <SelectDemo
                  placeholder="Select Status"
                  options={[
                    { value: 'new', label: 'New' },
                    { value: 'contacted', label: 'Contacted' },
                    { value: 'closed', label: 'Closed' },
                  ]}
                />
              </Table.Cell>
              <Table.Cell>{lead.date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default LeadsInboxTable;
