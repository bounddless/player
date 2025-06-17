import React, { useState, useRef } from 'react';
import useJsMediaTags from '@/hooks/useJsMediaTags';

const AudioPlayer = () => {
    const { jsmediatags, error } = useJsMediaTags();
    const [cover, setCover] = useState(null);
    const audioRef = useRef(null);
    const [audioFile, setAudioFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setAudioFile(file);
        readTags(file);
    };

    const readTags = (file) => {
        if (!jsmediatags) return;

        new jsmediatags.Reader(file)
            .read({
                onSuccess: (tag) => {
                    if (tag.tags.picture) {
                        const base64String = tag.tags.picture.data
                            .map(byte => String.fromCharCode(byte))
                            .join('');
                        // Исправленная строка (были кавычки и скобки):
                        setCover(`data:${tag.tags.picture.format};base64,${btoa(base64String)}`);
                    }
                },
                onError: (error) => console.error('Error reading tags:', error)
            });
    };

    if (error) return <div>Error loading audio library: {error.message}</div>;

    return (
        <div className="audio-player">
            <input 
                type="file" 
                accept="audio/*" 
                onChange={handleFileChange} 
                style={{ display: 'block', margin: '20px 0' }}
            />
            
            {cover && (
                <div style={{ margin: '20px 0', textAlign: 'center' }}>
                    <img 
                        src={cover} 
                        alt="Audio cover" 
                        style={{ maxWidth: '300px', borderRadius: '8px' }} 
                    />
                </div>
            )}

            {audioFile && (
                <audio
                    ref={audioRef}
                    controls
                    src={URL.createObjectURL(audioFile)}
                    style={{ width: '100%', marginTop: '20px' }}
                />
            )}
        </div>
    );
};

export default AudioPlayer;