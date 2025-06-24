import { cn } from '@/src/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const divider = cva('', {
  variants: {
    direction: {
      horizontal: 'h-[1px]',
      vertical: 'w-[1px]',
    },
    thickness: {
      sm: '',
      md: '',
      lg: '',
    },
    border: {
      default: 'border-t border-[#EBEBEAFF]',
    },
  },
  compoundVariants: [
    {
      direction: 'horizontal',
      thickness: 'sm',
      className: 'h-[1px]',
    },
    {
      direction: 'horizontal',
      thickness: 'md',
      className: 'h-[2px]',
    },
    {
      direction: 'horizontal',
      thickness: 'lg',
      className: 'h-[3px]',
    },
    {
      direction: 'vertical',
      thickness: 'sm',
      className: 'w-[1px]',
    },
    {
      direction: 'vertical',
      thickness: 'md',
      className: 'w-[2px]',
    },
    {
      direction: 'vertical',
      thickness: 'lg',
      className: 'w-[3px]',
    },
  ],
  defaultVariants: {
    thickness: 'sm',
    border: 'default',
  },
});

interface DividerProps extends VariantProps<typeof divider>, HTMLAttributes<HTMLDivElement> {
  direction: NonNullable<VariantProps<typeof divider>['direction']>;
}

export default function Divider({ direction, thickness, border, className, ...rest }: DividerProps) {
  return (
    <div
      className={cn(divider({ direction, thickness, border }), className)}
      {...rest}
    />
  );
}
