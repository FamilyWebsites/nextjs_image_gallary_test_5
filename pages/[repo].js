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
  const repos = [
    '2025-hungrito-food-fest-7.0',
    '2024-Merriage-photos-2',
    'Binalben-na-Marriage',
    '2025-Manjukaki-Harikaka-50th-anniversary',
    'kana-no-bday',
    '2025-Heritage-walk',
    '2021-Dhaval-potrait-photos',
    '2022-old-minecraft-thumbnails',
    '2024-Vasu-birthday',
    '2024-Navratri-Day-1',
    '2024-Navratri-Edited-Photos',
    '2024-Navratri-Day-9',
    '2024-Navratri-Day-6',
    '2024-Navratri-Day-5-Original',
    '2024-Shreyas-birthday-and-my-first-day-at-TR',
    '2024-Saputara-Trip'
  ];

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
