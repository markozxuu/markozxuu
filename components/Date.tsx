// Utils
import dateFormat from '@lib/utils/date-format';

interface Props {
  date: string;
}

const Date = ({ date }: Props) => {
  const dateString = dateFormat(date);
  return (
    <span className="text-xs mr-10 dark:text-accent-3 text-accent-5">
      {dateString}
    </span>
  );
};

export default Date;
