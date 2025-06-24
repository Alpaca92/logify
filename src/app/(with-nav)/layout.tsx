'use client';

import { AppRoutes } from '@/src/constrants/routes';
import { cn } from '@/src/utils/cn';
import { isActiveRoute } from '@/src/utils/route';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavList {
  /** 화면에 노출되는 이름 */
  name: string;
  /** AppRoutes에 정의된 url path */
  path: string;
}

const NAV_LIST: NavList[] = [
  {
    name: 'Folders',
    path: AppRoutes.FOLDERS,
  },
  {
    name: 'Urls',
    path: AppRoutes.URLS,
  },
];

export default function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-[260px_1fr] h-dvh">
      <aside className="p-2 border-r border-[#EBEBEAFF] flex flex-col justify-between">
        <nav>
          <ul className="text-[#8C8D8BFF]">
            {NAV_LIST.map(({ name, path }) => (
              <li key={name}>
                <Link
                  className={cn(
                    'rounded-md p-2 block',
                    isActiveRoute(pathname, path) ? 'bg-[#636AE8FF] text-white font-semibold' : ''
                  )}
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* TODO: settings, profile 화면 구현할지 고민 */}
        <div>
          <div>settings</div>
        </div>
      </aside>
      <main className="px-10 py-2">{children}</main>
    </div>
  );
}
