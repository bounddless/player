// Файл src/hooks/useJsMediaTags.js
import { useEffect, useState } from 'react';

const useJsMediaTags = () => {
    const [jsmediatags, setJsMediaTags] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (window.jsmediatags) {
            setJsMediaTags(window.jsmediatags);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/jsmediatags@3.9.7/dist/jsmediatags.min.js';
        script.async = true;
        script.onload = () => setJsMediaTags(window.jsmediatags);
        script.onerror = () => setError(new Error('Failed to load jsmediatags'));

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return { jsmediatags, error };
};

export default useJsMediaTags;