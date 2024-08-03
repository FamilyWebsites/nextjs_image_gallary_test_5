import { useEffect, useState } from 'react';
import { fetchImages } from '../lib/github';

const Gallery = ({ repo }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const images = await fetchImages(repo);
      setImages(images);
    };
    getImages();
  }, [repo]);

  return (
    <div>
      <h1>Image Gallery for {repo}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img
              src={image.thumbnailUrl}
              alt={`Thumbnail ${index}`}
              style={{ width: '200px', cursor: 'pointer' }}
              onClick={() => window.open(image.fullUrl, '_blank')}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Fetching the repository name from the URL
export async function getServerSideProps(context) {
  const { repo } = context.params;
  return { props: { repo } };
}

export default Gallery;
