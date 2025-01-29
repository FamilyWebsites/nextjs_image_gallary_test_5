// components/Gallery.js
import styles from '../src/app/Gallery.module.css';
import { fetchImages } from '../lib/github';

const Gallery = ({ images, repo }) => {
  return (
    <section className={styles.imagegallery}>
      <h2>Image Gallery for {repo}</h2>
      <div>
        {images.map((image, index) => (
          <a
            key={index}
            href={image.fullUrl}
            download // This forces the download
          >
            <img
              src={image.thumbnailUrl}
              alt={`Thumbnail ${index}`}
              loading="lazy"
              style={{cursor: 'pointer'}} // Add pointer cursor visually
            />
          </a>
        ))}
      </div>
    </section>
  );
};

// Fetch the list of repositories for static paths
export async function getStaticPaths() {
  const repos = [test-git-1---Copy,
  'test-git-1---Copy---Copy'];

  const paths = repos.map(repo => ({ params: { repo } }));

  return { paths, fallback: false };
}

// Fetch the images for the given repository
export async function getStaticProps(context) {
  const { repo } = context.params;
  const images = await fetchImages(repo);

  return { props: { images, repo } };
}

export default Gallery;
