import React from "react";

const Footer = ({ countActive, clearComplete }) => {
    return (
        <div className="footer">
            <div>
                {countActive}
                <span>: items left</span>
            </div>
            <div style={{ display: 'flex' }}>
                <nav style={{ display: 'flex' }}>
                    <button>All</button>
                    <button>Active</button>
                    <button>Complete</button>
                </nav>
                {clearComplete && (
                    <button>Clear complete</button>
                )}
            </div>
        </div>
    )
}

export default Footer