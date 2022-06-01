import React from "react";

const Footer = ({ countActive, clearComplete }) => {
    return (
        <div className="footer">
            <div>
                {countActive}
                <span>: items left</span>
            </div>
            <div>
                <button>All</button>
                <button>ACtive</button>
                <button>Complete</button>
                {clearComplete && (
                    <button>Clear complete</button>
                )}
            </div>
        </div>
    )
}

export default Footer