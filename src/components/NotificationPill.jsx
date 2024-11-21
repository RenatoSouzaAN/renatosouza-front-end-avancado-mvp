import React, { useEffect, useState } from "react";
import Close from "@mui/icons-material/Close";

const NotificationPill = ({
    message,
    type = "info",
    duration = 3000,
    onClose,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    const typeStyles = {
        info: "bg-blue-500 text-white",
        success: "bg-green-500 text-white",
        warning: "bg-yellow-500 text-white",
        error: "bg-red-500 text-white",
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose && onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!isVisible) return null;

    return (
        <div
            className={`
            fixed
            top-[60%] left-1/2 transform -translate-x-1/2
            z-50
            ${typeStyles[type]}
            text-white
            px-4 py-2
            rounded-full
            shadow-lg
            animation-fade-in
            flex
            items-center
            `}
        >
            <span className="mr-2">{message}</span>
            <button
                onClick={() => {
                    setIsVisible(false), onClose && onClose();
                }}
                className="hover:bg-opacity-20 rounded-full p-1"
            >
                <Close />
            </button>
        </div>
    );
};

export default NotificationPill;
