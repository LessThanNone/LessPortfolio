import { CSSProperties, ReactNode } from 'react';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines' | string;
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  tag?: string;
  staggerFrom?: 'start' | 'end' | 'center' | 'edges' | 'random' | number;
  mask?: boolean;
  effect?: 'rise' | 'fade' | 'blur' | 'flip' | 'pop' | 'skew' | 'wave' | string;
  trigger?: 'view' | 'load' | 'hover' | 'click' | string;
  loop?: boolean;
  loopDelay?: number;
  hoverEffect?: 'none' | 'lift' | 'wave' | string;
  color?: string;
  accentColor?: string;
  onLetterAnimationComplete?: () => void;
  style?: CSSProperties;
  children?: ReactNode;
}

declare const SplitText: (props: SplitTextProps) => JSX.Element;
export default SplitText;
