import { cn } from '@/src/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

const button = cva('', {
  variants: {
    bg: {
      default: 'bg-transparent',
      blue: 'bg-[#636AE8FF]',
    },
  },
  compoundVariants: [
    {
      bg: 'default',
      className: 'text-black border border-[#EBEBEAFF]',
    },
    {
      bg: 'blue',
      className: 'text-white',
    },
  ],
  defaultVariants: {
    bg: 'default',
  },
});

interface ButtonProps extends VariantProps<typeof button>, ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icons?: {
    left?: ReactNode;
    right?: ReactNode;
  };
}

export default function Button({ children, icons, bg, className, ...rest }: ButtonProps) {
  return (
    <button
      className={cn('cursor-pointer font-medium text-sm rounded-lg p-3', button({ bg }), className)}
      {...rest}
    >
      {icons?.left}
      {children}
      {icons?.right}
    </button>
  );
}
