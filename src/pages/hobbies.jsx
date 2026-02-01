import React from 'react';
import '../styles/hobbies.css';
import gojoImage from '../assets/arts/gojo.png';

const arts = [
    {
        id: 'gojo',
        title: 'Gojo',
        image: gojoImage,
        device: 'iPad',
        app: 'Sketchbook',
    },
];

const Hobbies = () => {
    return (
        <div className="hobbies-page">
            <h1 className="hobbies-title">collections</h1>
            <div className="arts-grid">
                {arts.map((art) => (
                    <article key={art.id} className="art-card">
                        <div className="art-image-wrap">
                            <img src={art.image} alt={art.title} className="art-image" loading="lazy" />
                            <div className="art-info">
                                <p className="art-meta">Made with {art.device} & {art.app}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Hobbies;