import { ReactNode, ComponentType } from "react";

export interface PillNavItem {
  label: string;
  href: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export interface PillNavProps {
  logo?: ReactNode;
  logoAlt?: string;
  logoHref?: string;
  items?: PillNavItem[];
  activeHref?: string;
  defaultActiveIndex?: number;
  onItemClick?: (item: PillNavItem, index: number, event: React.MouseEvent) => void;
  linkComponent?: ComponentType<any> | string;
  theme?: "dark" | "light";
  layout?: "split" | "joined";
  size?: "sm" | "md" | "lg";
  surface?: "glass" | "solid";
  itemStyle?: "pill" | "text";
  hoverEffect?: "fill" | "glow" | "lift";
  indicator?: "dot" | "line" | "none";
  highlightColor?: string;
  highlightTextColor?: string;
  barColor?: string;
  textColor?: string;
  bounce?: number;
  stretch?: number;
  intro?: boolean;
  collapse?: "auto" | "mobile" | "never";
  onMenuToggle?: (isOpen: boolean) => void;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

declare const PillNav: ComponentType<PillNavProps>;
export default PillNav;
