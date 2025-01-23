// pages/image/[repo]/[image].js
import { useRouter } from 'next/router';
import styles from '../../../src/app/Image.module.css'

export async function getStaticPaths() {
    // Generate paths for all possible image/repo combinations
    const repos = [/* your repo list */];
    const paths = [];

    for (const repo of repos) {
        const images = await fetchImages(repo); // Fetch image data
        paths.push(...images.map(image => ({
            params: { repo, image: encodeURIComponent(image.fullUrl.split('/').pop()) },
        })));
    }


    return { paths, fallback: 'blocking' }; // or fallback: true
}

export async function getStaticProps(context) {
    const { repo, image } = context.params;
    const imageUrl = `https://raw.githubusercontent.com/${repo}/main/${decodeURIComponent(image)}`;

    const fullResolutionImageUrl = imageUrl;
    return {
        props: { imageUrl, fullResolutionImageUrl },
    };
}


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



export async function getServerSideProps(context) {
    const { repo, image } = context.params;
    const imageUrl = `https://raw.githubusercontent.com/${repo}/main/${decodeURIComponent(image)}`;

    // Construct the full resolution URL (replace with your actual logic if different)
    const fullResolutionImageUrl = imageUrl;


    return {
        props: { imageUrl, fullResolutionImageUrl },
    };
}

export default ImagePage;
