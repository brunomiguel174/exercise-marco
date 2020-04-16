import React from 'react';

export default function Home() {
    const randomText = ["Hello, have a nice day", "Don't worry, be happy", "My name is Jeff"];
    let position = Math.floor(Math.random() * randomText.length);
    
    return(
        <main>
            <h1>{randomText[position]}</h1>
        </main>
    );
}