// pages/image/[repo]/[image].js
import { useRouter } from 'next/router';
import styles from '../../../src/app/Image.module.css'

const ImagePage = ({ imageUrl, fullResolutionImageUrl }) => {
    const router = useRouter();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fullResolutionImageUrl; // Use the full resolution URL for download
        link.download = 'image.jpg'; // Or get the filename from the URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleClose = () => {
        router.back();
    };

    if (!imageUrl) {
        return <div>Loading...</div>; // Or handle the error appropriately
    }


    return (
        <div className={styles.container}>
            <button onClick={handleClose} className={styles.close}>Close</button>
            <button onClick={handleDownload} className={styles.download}>Download</button>
            <img src={imageUrl} alt="Full Image" className={styles.image} />


        </div>
    );
};

// Remove getStaticPaths completely
export async function getServerSideProps(context) {
    const { repo, image } = context.params;
    const imageUrl = `https://raw.githubusercontent.com/${repo}/main/${decodeURIComponent(image)}`;
    const fullResolutionImageUrl = imageUrl; // Or your logic to construct the full URL

    return {
        props: { imageUrl, fullResolutionImageUrl },
    };
}

export default ImagePage;

