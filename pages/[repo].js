// components/Gallery.js
import styles from '../src/app/Gallery.module.css';
import { fetchImages } from '../lib/github';

const Gallery = ({ images, repo }) => {
  return (
    <section className={styles.imagegallery}>
      <h2>Image Gallery for {repo}</h2>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnailUrl}
            alt={`Thumbnail ${index}`}
            loading="lazy" // Important: Add lazy loading back
            onClick={() => window.open(image.fullUrl, '_blank')}
          />
        ))}
      </div>
    </section>
  );
};

// Fetch the list of repositories for static paths
export async function getStaticPaths() {
  const repos = [
    'adival-prewedding',
    '2023-Engagement-party',
    '2023-My-Birthday-Celebration-in-Office',
    '2023-Ravimamas-marriage',
    '2023-Mummy-Pappa-Marrige-Album',
    '2023-Uttrayan',
    '2023-Valentine-s-Day',
    '2023-SGL-Late-night-working-TCS-Project',
    '2023-Meeting-with-Ridhdhi',
    '2023-Exatra-photos-with-Aditi',
    '2023-Push-in-boots-the-last-wish',
    '2023-Keval-s-Tour',
    'Shreya-s-Farwell',
    'navratri-2024',
    'Aditi-With-Her-Friends-Stree-2',
    '2022-Adival-Kankupagla',
    '2024-Navratri-Dashera-Mandli',
    '2024-Navratri-Day-8',
    '2024-Navratri-Day-5',
    '2024-Navratri-Day-4',
    'Darshna-AI-new',
    'manali-merriage-photos'
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
