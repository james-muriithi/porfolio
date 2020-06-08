import React from "react";
import "./Top.css";


export default function Top() {
    function TopEvent() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    // When the user scrolls down 20px from the top of the document, show the button   
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topButton").style.visibility = "visible";
        } else {
            document.getElementById("topButton").style.visibility = "hidden";
        }
    }
    
    function showOnScroll() {
        const height = parseInt(document.getElementById("greeting").offsetHeight - 200)
        if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
            document.getElementById("header").parentNode.classList.add("show-header");
        } else {
            document.getElementById("header").parentNode.classList.remove("show-header");
        }
    }

    if (typeof window !== 'undefined') {
        window.onscroll = function () { scrollFunction(); };
        window.onload = function () { scrollFunction(); }; //To make sure that this button is not visible at starting.
    // When the user clicks on the button, scroll to the top of the document
    
        window.onscroll = function () { showOnScroll(); };
        window.onload = function () { showOnScroll(); };
    }

    
    return (
        <button onClick={TopEvent} id="topButton" title="Go to top"><i className="fas fa-chevron-up" aria-hidden="true"></i></button>
        );
    }
