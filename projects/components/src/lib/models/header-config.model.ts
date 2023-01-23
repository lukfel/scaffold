import { MenuButton } from './menu-button.model';

export interface HeaderConfig {
  show?: boolean;
  logo?: string;
  title?: string;
  subTitle?: string;
  loading?: boolean;
  showRouteLoading?: boolean;
  leftMenuButton?: MenuButton;
  rightMenuButton?: MenuButton;
}
