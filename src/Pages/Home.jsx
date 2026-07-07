// ============================================================
// File Name : Home.jsx
// Folder    : src/pages
// Purpose   : Home Page / Hero Section
// ============================================================

// Import Profile Image
import ProfilePic from "../images/Profile.jpeg";
import PageTransition from "../ComponentsTemp/PageTransition";

// Import Typing Component
import TypingText from "../ComponentsTemp/TypingText";

function Home() {

    return (
 <PageTransition>
        <section className="hero">

            {/* Left Side */}

            <div className="hero-left">

                <h3>

                    Hello,

                </h3>

                <h1>

                    I'm Hassan Ramzan

                </h1>

                {/* Typing Animation */}

                <TypingText />

                <p>
                    Frontend Developer crafting clean, pixel perfect
                     user interfaces and seamless digital experiences.

                </p>

            </div>


            {/* Right Side */}

            <div className="hero-right">

                <img

                    src={ProfilePic}

                    alt="Profile"

                />

            </div>

        </section>
</PageTransition>
    );

}

export default Home;