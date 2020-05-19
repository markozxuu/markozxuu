const withIcon = (icon: any) => {
  const Icon = () => {
    return (
      <svg
        viewBox="0 0 24 24"
        width={24}
        height={24}
        fill={'currentColor'}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    );
  };
  return Icon;
};

export { withIcon };
