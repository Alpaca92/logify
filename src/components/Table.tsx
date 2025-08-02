import type { ColumnDef, TableOptions } from '@tanstack/react-table';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

interface TableProps<TData, TValue>
  extends Omit<TableOptions<TData>, 'getCoreRowModel'> {
  columns: ColumnDef<TData, TValue>[];
}

export default function Table<TData, TValue>({
  data,
  columns,
}: TableProps<TData, TValue>) {
  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead></thead>
      <tbody></tbody>
    </table>
  );
}
