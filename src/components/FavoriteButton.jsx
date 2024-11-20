const { useState } = require("react");
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const FavoriteButton = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);

        if (!isFavorite) {
            console.log(`Added ${product.id} to favorites`);
        } else {
            console.log(`Removed ${product.id} from favorites`);
        }
    };

    return (
        <button
            onClick={handleFavoriteToggle}
            className="border flex justify-center items-center px-4 py-2 bg-on-primary text-primary rounded-lg hover:bg-gray-100"
        >
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </button>
    );
};

export default FavoriteButton;
