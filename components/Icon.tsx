interface IconProps {
  size?: number;
  weight?: number;
  className?: string;
  fill?: string;
}

const withIcon = (icon: string) => {
  const Icon = ({
    size = 16,
    weight = 1.5,
    className,
    fill = 'none',
  }: IconProps) => {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        stroke="currentColor"
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill}
        shapeRendering="geometricPrecision"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    );
  };
  return Icon;
};

export { withIcon };
