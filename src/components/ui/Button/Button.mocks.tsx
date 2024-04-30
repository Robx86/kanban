import { ButtonProps } from '@/components/ui/Button/Button';

const base: ButtonProps = {
  variant: 'default',
  children: 'base',
};

const secondary: ButtonProps = {
  variant: 'secondary',
  children: 'secondary',
};

const destructive: ButtonProps = {
  variant: 'destructive',
  children: 'destructive',
};


export const mockButtonProps = {
  base,
  destructive,
  secondary,
};
