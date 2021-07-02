interface IconProps {
  size?: number;
  weight?: number;
  className?: string;
}

const withIcon = (icon: string) => {
  const Icon = ({ size = 16, weight = 1.5, className }: IconProps) => {
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
        fill="none"
        shapeRendering="geometricPrecision"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    );
  };
  return Icon;
};

export { withIcon };
