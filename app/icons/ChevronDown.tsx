import { FC } from 'react';

interface ChevronDownProps {
  className?: string;
}

const ChevronDown: FC<ChevronDownProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" className={className}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDown;
