import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Share from "@mui/icons-material/ShareOutlined"

const ShareButton = ({ product }) => {
    const [isCopied, setIsCopied] = useState(false);
    const router = useRouter();

    const handleShare = async () => {
        try {
            const urlToCopy = `${window.location.origin}${window.location.pathname}`;
            await navigator.clipboard.writeText(urlToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy product URL:', err);
        }
    };

    return (
        <button onClick={handleShare} className="px-4 py-2 bg-on-primary text-primary rounded-lg hover:bg-gray-100">
            {isCopied ? 'Link Copiado!' : <Share />}
        </button>
    );
};

export default ShareButton;
