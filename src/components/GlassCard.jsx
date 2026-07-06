// ============================================================
// File Name : GlassCard.jsx
// Folder    : src/components
// Purpose   : Reusable Glass Card
// ============================================================

function GlassCard({ title, text, children }) {

    return (

        <div className="glass-card">

            <h2>

                {title}

            </h2>

            <p>

                {text}

            </p>

            {/* Extra Content */}

            {children}

        </div>

    );

}

export default GlassCard;