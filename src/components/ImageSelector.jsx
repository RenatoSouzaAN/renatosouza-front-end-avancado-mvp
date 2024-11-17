import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const ImageSelector = ({ images, productTitle, selectedIndex, onSelectImage }) => {
    const [startIndex, setStartIndex] = useState(0);

    const showPrevious = startIndex > 0;
    const showNext = startIndex + 5 < images.length;

    const handleNext = () => {
        if (showNext) {
            setStartIndex(prev => prev + 1);
        };
    };

    const handlePrevious = () => {
        if (showPrevious) {
            setStartIndex(prev => prev - 1);
        };
    };

    return (
        <div className="relative flex items-center justify-center">
            {showPrevious && (
                <button
                    onClick={handlePrevious}
                    className="absolute left-10 p-1 text-primary bg-background rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-5 h-5"/>
                </button>
            )}

            <div className="flex gap-2 overflow-hidden mx-8">
                {images.slice(startIndex, startIndex + 5).map((image, index) => (
                    <div
                        key={startIndex + index}
                        className="flex-shirnk-0 w-16 h-16 transform transition-transform duration-300 ease-in-out"
                    >
                        <button
                            onClick={() => onSelectImage(startIndex + index)}
                            className={`w-full h-full border rounded-lg overflow-hidden hover:border-primary relative
                                ${selectedIndex === startIndex + index ? 'border-2 border-primary' : 'border'}`}
                        >
                            <Image
                                src={image}
                                alt={`${productTitle} - View ${startIndex + index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                        </button>
                    </div>
                ))}
            </div>

            {showNext && (
                <button
                    onClick={handleNext}
                    className="absolute right-10 p-1 text-primary bg-background rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-5 h-5"/>
                </button>
            )}
        </div>
    );
};

export default ImageSelector;