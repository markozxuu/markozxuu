// Data
import data from '@data/blog.json';

function gettingMetadata(title: string) {
  const metadataPost = data.find((post) => post.title === title);
  return metadataPost;
}

export { gettingMetadata };
