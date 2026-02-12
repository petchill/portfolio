declare module 'react-scrollama' {
  import * as React from 'react';

  export interface StepCallbackData {
    data?: unknown;
    direction?: 'up' | 'down';
    entry?: { intersectionRatio: number };
    element?: Element;
  }

  export interface ScrollamaProps {
    children?: React.ReactNode;
    offset?: number;
    debug?: boolean;
    onStepEnter?: (args: StepCallbackData) => void;
    onStepExit?: (args: StepCallbackData) => void;
    onStepProgress?: (args: StepCallbackData & { progress?: number }) => void;
    threshold?: number;
  }

  export interface StepProps {
    children: React.ReactElement;
    data?: unknown;
  }

  export const Scrollama: React.FC<ScrollamaProps>;
  export const Step: React.FC<StepProps>;
}
