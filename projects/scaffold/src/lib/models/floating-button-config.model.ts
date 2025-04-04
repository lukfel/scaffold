export interface FloatingButtonConfig {
  enable?: boolean;
  id?: string;
  label?: string;
  matIcon?: string;
  svgIcon?: string;
  outlineIcon?: boolean;
  tooltip?: string;
  horizontalPosition?: 'left' | 'center' | 'right';
  bottomPositionPx?: number;
  autoHide?: boolean;
  class?: string;
}
