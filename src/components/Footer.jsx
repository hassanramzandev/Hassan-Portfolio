// ==========================================================
// File Name : Footer.jsx
// Folder    : src/components
// Purpose   : Footer Component
// ==========================================================

// React Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Footer Component
function Footer() {

    return (

        <footer>


            <p>

                Built With React 

            </p>

            {/* Social Links */}
            <div className="footer-links">

                <a
                    href="https://github.com/hassanramzandev/hassan.portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/YourLinkedInUsername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>

            </div>

            <small>

                © 2026 All Rights Reserved

            </small>

        </footer>

    );

}

// Export Footer
export default Footer;