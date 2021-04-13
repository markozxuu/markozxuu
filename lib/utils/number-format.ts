function numberFormat(views: string) {
  const styleNumber = new Intl.NumberFormat('en-US').format(Number(views));
  return styleNumber;
}

export default numberFormat;
