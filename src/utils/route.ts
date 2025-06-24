/**
 * 정규식으로 현재 경로가 링크 경로와 일치하거나 하위 경로인지 확인
 * @param currentPath 현재 경로 (usePathname 반환값)
 * @param linkPath 비교할 링크 경로
 * @returns boolean (일치 또는 하위 경로일 경우 true)
 */
export function isActiveRoute(currentPath: string, linkPath: string): boolean {
  const regex = new RegExp(`^${linkPath}(\/|$)`);
  return regex.test(currentPath);
}
