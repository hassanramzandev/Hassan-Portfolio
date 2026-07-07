// ========================================================
// File Name : FloatingButtons.jsx
// Folder    : src/components
// Purpose   : Floating WhatsApp & Back To Top Buttons
// ========================================================

function FloatingButton() {

    // Open WhatsApp
    function openWhatsApp(){

        window.open(

            "https://wa.me/923706471437",

            "_blank"

        );

    }

    // Scroll To Top
    function scrollTop(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    return(

        <>

            {/* WhatsApp */}

            <button

                className="whatsapp-btn"

                onClick={openWhatsApp}

            >

                💬

            </button>


            {/* Back To Top */}

            <button

                className="top-btn"

                onClick={scrollTop}

            >

                ⬆

            </button>

        </>

    );

}

export default FloatingButton;