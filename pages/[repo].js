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
              onClick={handleClick}
          />
        ))}
      </div>
    </section>
  );
};

const handleClick = (event) => {
  event.preventDefault(); // Prevent default link behavior

  const imageUrl = event.currentTarget.href; // Get the image URL from clicked link

  // Check if image URL is defined and valid (optional)
  if (!imageUrl) {
    console.error('Image URL is missing or invalid');
    return;
  }

  const popup = document.createElement('div'); // Create a popup element
  popup.classList.add('image-popup'); // Add a CSS class for styling

  const image = document.createElement('img'); // Create an image element for the popup
  image.src = imageUrl; // Set the image source
  image.alt = 'Full Image'; // Set alt text for accessibility

  const closeButton = document.createElement('button'); // Create a close button
  closeButton.textContent = 'X';
  closeButton.classList.add('close-button'); // Add a CSS class for styling
  closeButton.addEventListener('click', () => popup.remove()); // Add click event listener to close popup

  popup.appendChild(image); // Append image to popup
  popup.appendChild(closeButton); // Append close button to popup

  document.body.appendChild(popup); // Append popup to the body

  // Add functionality to close popup on clicking outside the popup (optional)
  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.remove();
    }
  });
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
