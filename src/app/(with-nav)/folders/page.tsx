import Table from '@/src/components/Table';
import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';

// NOTE: for test
const MOCK_DATA = [
  { id: 0, name: 'Project Alpha Resource', count: 25 },
  { id: 1, name: 'Developer Tools & Doc', count: 45 },
  { id: 2, name: 'Personal Learning Resource', count: 50 },
];

interface TableMock {
  id: number;
  name: string;
  email: string;
}

const TABLE_MOCK_DATA: TableMock[] = [
  { id: 0, name: 'anonymous0', email: 'anonymous0@gmail.com' },
  { id: 1, name: 'anonymous1', email: 'anonymous1@gmail.com' },
  { id: 2, name: 'anonymous2', email: 'anonymous2@gmail.com' },
  { id: 3, name: 'anonymous3', email: 'anonymous3@gmail.com' },
  { id: 4, name: 'anonymous4', email: 'anonymous4@gmail.com' },
];

const columnHelper = createColumnHelper<TableMock>();

const TABLE_MOCK_COLUMNS = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
    header: 'ID',
  }),
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: 'Name',
  }),
  columnHelper.accessor('email', {
    cell: (info) => info.getValue(),
    header: 'EMail',
  }),
];
// NOTE: for test

interface FolderCardProps {
  /** 폴더 고유 아이디 */
  id: string | number;
  /** 폴더 명 */
  name: string;
  /** 폴더 내 URL 갯수 */
  count: string | number;
}

function FolderCard({ id, name, count }: FolderCardProps) {
  return (
    <Link
      className="p-10 border border-[#EBEBEAFF] rounded-md cursor-pointer"
      href={`/folders/${id}`}
    >
      {/* TODO: name 옆에 pinned icon 넣기 */}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-[0.375rem] text-[#8C8D8BFF]">{`Contains ${count} URLs`}</p>
    </Link>
  );
}

export default function Folders() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Manage Your Folders</h1>
      {/* NOTE: Quick Access */}
      <div className="mt-9">
        <h2 className="font-semibold text-xl">Quick Access</h2>
        <div className="mt-[3.25rem] grid grid-cols-3 gap-4">
          {MOCK_DATA.map(({ id, name, count }) => (
            <FolderCard
              key={id}
              id={id}
              name={name}
              count={count}
            />
          ))}
        </div>
      </div>
      {/* NOTE: All Folders */}
      <div>
        <h2 className="font-semibold text-xl">All Folders</h2>
        <Table
          data={TABLE_MOCK_DATA}
          columns={TABLE_MOCK_COLUMNS}
        />
      </div>
    </div>
  );
}
