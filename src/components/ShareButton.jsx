import { useState } from "react";
import Share from "@mui/icons-material/ShareOutlined";

const ShareButton = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleShare = async () => {
        try {
            const urlToCopy = `${window.location.origin}${window.location.pathname}`;
            await navigator.clipboard.writeText(urlToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy product URL:", err);
        }
    };

    return (
        <button
            onClick={handleShare}
            className="border flex justify-center items-center px-4 py-2 bg-on-primary text-primary rounded-lg hover:bg-gray-100"
        >
            {isCopied ? "Link Copiado!" : <Share />}
        </button>
    );
};

export default ShareButton;
