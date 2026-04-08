import { ComponentProps } from 'react';

function Table(props: ComponentProps<'table'>) {
  return <table {...props} />;
}

export default Table;

const TableHeader = (props: ComponentProps<'thead'>) => {
  return <thead {...props} />;
};

const TableHead = (props: ComponentProps<'th'>) => {
  return <th {...props} />;
};

const TableRow = (props: ComponentProps<'tr'>) => {
  return <tr {...props} />;
};

const TableCell = (props: ComponentProps<'td'>) => {
  return <td {...props} />;
};

const TableBody = (props: ComponentProps<'tbody'>) => {
  return <tbody {...props} />;
};

Table.Header = TableHeader;
Table.Head = TableHead;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;
