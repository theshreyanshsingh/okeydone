import React, {useState, useEffect } from 'react'

const Background = () => {
    // const [mousePos, setMousePos] = useState({});
    useEffect(() => {
        const blob = document.getElementById("blob")
        const handleMouseMove = (event) => {
            const {clientX, clientY} = event
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, {duration: 3000, fill: "forwards"})
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener(
              'mousemove',
              handleMouseMove
            );
        };
    },[])
    return (
        <div className="background">
            <div id="blob"></div>
            {/* <div className="background-overlay">
            </div> */}
        </div>
    )
}

export default Background