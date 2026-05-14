import { Ellipsis } from 'lucide-react';
import Badge from '../../../shared/components/Badge';
import Table from '../../../shared/components/Table';
import { DropdownMenu } from 'radix-ui';
import AlertDialogButton from '../../../shared/components/AlertDialogButton';
import { useState } from 'react';

type AllPropertiesTableProps = {
  title: string[];
  data: any;
};

function AllPropertiesTable({ title, data }: AllPropertiesTableProps) {
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
          {data.map((property: any) => (
            <Table.Row className="fs-xxs" key={property.id}>
              <Table.Cell className="d-flex-inline gap-md">
                <img
                  className="table__image"
                  src="https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?q=80&w=807&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={70}
                  height={55}
                  alt={property.title}
                />
                <span className="fs-xxs">{property.title}</span>
              </Table.Cell>
              <Table.Cell>
                <span className="fs-xxs">John Doe</span>
              </Table.Cell>
              <Table.Cell>
                <p className="clr-black">john.doe@example.com</p>
                <p className="clr-black">123-456-7890</p>
              </Table.Cell>
              <Table.Cell>
                {property.available ? (
                  <Badge type="success">Available</Badge>
                ) : (
                  <Badge type="secondary">Unavailable</Badge>
                )}
              </Table.Cell>
              <Table.Cell>
                <AdminActionMenu />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default AllPropertiesTable;

const AdminActionMenu = () => {

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
            <button type='button'>
              Block
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="fs-xxs dropdown__item"
          >
            <AlertDialogButton
              message= "This action cannot be undone. This will permanently delete property and remove it from the server."
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
