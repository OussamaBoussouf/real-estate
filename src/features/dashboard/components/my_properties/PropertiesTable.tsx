import { SquarePen, Trash2 } from 'lucide-react';
import Badge from '../../../../shared/components/Badge';
import Table from '../../../../shared/components/Table';
import { formatCurrency } from '../../../../shared/utils/formatter';

function PropertiesTable({ title, data }: { title: string[]; data: any }) {
  return (
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
          {data.map((property: any) => (
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
              <Table.Cell className='d-flex-inline gap-sm'>
                <button className='d-flex-inline' type="button" title="Edit">
                  <SquarePen size="18" />
                </button>
                <button className='d-flex-inline' type="button" title="Delete">
                  <Trash2 size="18" color="red"/>
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default PropertiesTable;

type TableHeaderProps = {
  titles: string[];
};

// export const TableHeader = ({ titles }: TableHeaderProps) => {
//   return (
//     <thead className="properties-table__header">
//       <tr>
//         {titles.map((title, idx) => (
//           <th key={idx} className="fw-bold fs-xxs">
//             {title}
//           </th>
//         ))}
//       </tr>
//     </thead>
//   );
// };

type TableBodyProps = {
  properties: {
    id: string;
    images: string[];
    title: string;
    type: string;
    status: string;
    price: number;
    location: { city: string; address: string };
  }[];
};

// export const TableBody = ({ properties }: TableBodyProps) => {
//   return (
//     <tbody>
//       {properties.map(property => (
//         <tr key={property.id}>
//           <td>
//             <img
//               src="https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?q=80&w=807&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               width={60}
//               alt={property.title}
//             />
//           </td>
//           <td className="fs-xxs">{property.title}</td>
//           <td className="fs-xxs">{property.type}</td>
//           <td className="fs-xxs">{property.status}</td>
//           <td className="fs-xxs">{property.price}</td>
//           <td className="fs-xxs">{property.location.city}</td>
//           <td>
//             <button type="button">Delete</button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   );
// };
