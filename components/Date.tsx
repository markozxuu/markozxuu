// Packages
import { parseISO, format } from 'date-fns';

interface DateProps {
  dateStirng: string;
  isUpperCase: boolean;
}

const Date = ({ dateStirng, isUpperCase }: DateProps) => {
  const date = parseISO(dateStirng);
  return (
    <time dateTime={dateStirng}>
      {isUpperCase
        ? format(date, 'LLLL d, yyyy').toUpperCase()
        : format(date, 'LLLL d, yyyy')}
    </time>
  );
};

export default Date;
