import { MenuButton } from './menu-button.model';

export interface HeaderConfig {
  enable?: boolean;
  svgLogo?: string;
  imgLogo?: string;
  title?: string;
  subtitle?: string;
  loading?: boolean;
  showRouteLoading?: boolean;
  leftMenuButton?: MenuButton;
  rightMenuButtons?: MenuButton[];
  inputConfig?: HeaderInputConfig;
}

export interface HeaderInputConfig {
  enable?: boolean;
  label?: string;
  matIcon?: string;
  svgIcon?: string;
}
