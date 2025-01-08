// pages/gallery.js
import { useEffect, useState } from 'react';
import { fetchImages } from '../lib/github';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const images = await fetchImages();
      setImages(images);
    };
    getImages();
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img
              src={image.thumbnailUrl}
              alt={`Thumbnail ${index}`}
              style={{ width: '200px', cursor: 'pointer' }}
              onClick={() => {
                  const newWindow = window.open();
                  newWindow.document.write(`
                    <html>
                      <head><title>Image Preview</title></head>
                      <body style="margin:0;display:flex;align-items:center;justify-content:center;">
                        <img src="${image.fullUrl}" style="max-width:100%;max-height:100%;" alt="Full Image"/>
                      </body>
                    </html>
                  `);
                  newWindow.document.close();
                }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
