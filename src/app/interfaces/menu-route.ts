export interface MenuRoute {
  alias: string;
  path?: string;
  children?: RouterChildren[];
  href?: string;
  icon?: string;
  isExternal?: boolean;
}
interface RouterChildren {
  alias: string;
  path: string;
  isExternal: boolean;
  icon?: string;
}
