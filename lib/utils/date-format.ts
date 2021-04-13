function dateFormat(date: string) {
  const datePost = new Intl.DateTimeFormat('en-US', {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-nocheck
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dateStyle: 'medium',
  })
    .format(new Date(date))
    .replace(',', '');
  return datePost;
}

export default dateFormat;
