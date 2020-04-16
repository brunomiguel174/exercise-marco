import React from 'react';

import meme1 from '../../assets/images/meme1.jpeg'
import meme2 from '../../assets/images/meme2.jpg'
import meme3 from '../../assets/images/meme3.png'
import meme4 from '../../assets/images/meme4.jpg'

export default function Gallery() {
    return(
        <main>
            <img src={meme1} alt="meme1"/>
            <img src={meme2} alt="meme2"/>
            <img src={meme3} alt="meme3"/>
            <img src={meme4} alt="meme4"/>
        </main>
    );
}