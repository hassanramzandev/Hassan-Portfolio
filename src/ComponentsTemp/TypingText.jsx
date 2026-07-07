// ============================================================
// File Name : TypingText.jsx
// Folder    : src/components
// Purpose   : Display typing animation text
// ============================================================

// Import React Hooks
import { useState, useEffect } from "react";

function TypingText() {

    // Array of texts
    const words = [

        "Frontend Developer",

        "Ui/UX Designer",

    ];

    // Current word index
    const [wordIndex, setWordIndex] = useState(0);

    // Current displayed text
    const [text, setText] = useState("");

    // Current character index
    const [charIndex, setCharIndex] = useState(0);

    // Typing Effect
    useEffect(() => {

        // Stop when the whole word is typed
        if (charIndex < words[wordIndex].length) {

            const timer = setTimeout(() => {

                setText(

                    (previousText) =>

                        previousText +

                        words[wordIndex][charIndex]

                );

                setCharIndex(

                    (previousChar) =>

                        previousChar + 1

                );

            }, 120);

            // Cleanup timer
            return () => clearTimeout(timer);

        }

        // Wait 2 seconds after typing a word
        const nextWordTimer = setTimeout(() => {

            // Clear current word
            setText("");

            // Reset character index
            setCharIndex(0);

            // Move to next word
            setWordIndex(

                (previousWord) =>

                    (previousWord + 1) % words.length

            );

        }, 2000);

        return () => clearTimeout(nextWordTimer);

    }, [charIndex, wordIndex]);



    return (

        <h2>

            {text}

            <span>|</span>

        </h2>

    );

}

export default TypingText;