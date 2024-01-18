import React, { useEffect } from 'react';

const EventListener: React.FC = () => {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            console.log('Button clicked!', event);
        };

        // Add event listener when component mounts
        document.addEventListener('click', handleClick);

        // Clean up event listener when component unmounts
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return <div>EventListener Component</div>;
};

export default EventListener;
