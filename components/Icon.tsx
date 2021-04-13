const withIcon = (icon: string) => {
  const Icon = () => {
    return (
      <svg
        viewBox="0 0 24 24"
        width={16}
        height={16}
        stroke="currentColor"
        strokeWidth="1.5"
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
