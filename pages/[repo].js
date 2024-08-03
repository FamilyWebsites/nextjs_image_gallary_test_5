import { useEffect, useState } from 'react';
import { fetchImages } from '../lib/github';

const Gallery = ({ images, repo }) => {
  return (
    <div>
      <h1>Image Gallery for {repo}</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
        gap: '10px',
      }}>
        {images.map((image, index) => (
          <div key={index} style={{ overflow: 'hidden', borderRadius: '8px', border: '1px solid #ddd' }}>
            <img
              src={image.thumbnailUrl}
              alt={`Thumbnail ${index}`}
              style={{
                width: '100%',
                height: 'auto',
                cursor: 'pointer',
                display: 'block',
              }}
              onClick={() => window.open(image.fullUrl, '_blank')}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Fetch the list of repositories for static paths
export async function getStaticPaths() {
  const repos = [
    '2023-My-Birthday-Celebration-in-Office',
    '2023-Engagement-party',
    '2023-Ravimamas-marriage',
    '2023-Mummy-Pappa-Marrige-Album'
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
