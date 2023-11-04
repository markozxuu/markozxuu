function dateFormat(date: string) {
  const datePost = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  })
    .format(new Date(date))
    .replace(',', '');
  return datePost;
}

export default dateFormat;
