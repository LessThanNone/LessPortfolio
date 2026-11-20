import { CSSProperties, ReactNode } from 'react';

export interface ScrollExpandProps {
  src?: string;
  mediaType?: 'image' | 'video';
  poster?: string;
  alt?: string;
  title?: ReactNode;
  scrollHint?: string;
  startWidth?: number;
  startHeight?: number;
  startRadius?: number;
  endRadius?: number;
  mediaZoom?: number;
  scrollDistance?: number;
  holdDistance?: number;
  smoothing?: number;
  overlayScrim?: number;
  useWindowScroll?: boolean;
  enabled?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}

declare const ScrollExpand: (props: ScrollExpandProps) => JSX.Element;
export default ScrollExpand;
