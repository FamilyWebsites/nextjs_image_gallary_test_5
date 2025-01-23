import Image from 'next/image'; // Import the Next.js Image component
import styled from 'styled-components';
import { fetchImages } from '../lib/github';

const GallerySection = styled.section`
  margin-top: 2rem; /* Increased margin for better spacing */
  text-align: center;
`;

const GalleryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem; /* Increased margin for better spacing */
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem; /* Increased gap for better spacing */
  padding: 1rem; /* Added padding for better visual appearance */

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const GalleryImageWrapper = styled.div`
  position: relative; /* Needed for next/image fill */
  width: 100%;
  aspect-ratio: 1/1; /* Maintain aspect ratio */
  overflow: hidden; /* Hide image overflow */
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ActualGalleryImage = styled(Image)`
  object-fit: cover;
`;

const Gallery = ({ images, repo }) => {
  return (
    <GallerySection>
      <GalleryTitle>Image Gallery for {repo}</GalleryTitle>
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryImageWrapper key={index}>
            <ActualGalleryImage
              src={image.thumbnailUrl}
              alt={`Thumbnail ${index}`}
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              onClick={() => window.open(image.fullUrl, '_blank')}
            />
          </GalleryImageWrapper>
        ))}
      </GalleryGrid>
    </GallerySection>
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
