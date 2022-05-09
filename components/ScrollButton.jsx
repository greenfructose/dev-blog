import React, { useState, useEffect} from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
useEffect(function mount(){
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
})

  
  return (
    <div 
    onClick={scrollToTop} 
    className="fixed scroll-top bottom-3 right-3 text-center py-3 cursor-pointer bg-pink-600 rounded-full"
    style={{display: visible ? 'inline' : 'none'}}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white w-full ml-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 20V4m-7 7l7-7l7 7"
        />
      </svg>
    </div>
  );
};

export default ScrollButton;
