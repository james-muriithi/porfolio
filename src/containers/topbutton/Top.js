import React from "react";
import "./Top.css";


export default function Top() {
    function TopEvent() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    // When the user scrolls down 20px from the top of the document, show the button   
    function scrollFunction() {
        console.log(document.documentElement.scrollTop);
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("topButton").style.visibility = "visible";
        } else {
            document.getElementById("topButton").style.visibility = "hidden";
        }
    }
    
    function showOnScroll() {
        const height = parseInt(document.getElementById("greeting").offsetHeight - 250)
        if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
            document.getElementById("header").parentNode.classList.add("show-header");
        } else {
            document.getElementById("header").parentNode.classList.remove("show-header");
        }
    }

    if (typeof window !== 'undefined') {
        window.onscroll = function () { scrollFunction(); showOnScroll(); };
        window.onload = function () { scrollFunction(); showOnScroll(); }; //To make sure that this button is not visible at starting.
    // When the user clicks on the button, scroll to the top of the document
    }

    
    return (
        <button onClick={TopEvent} id="topButton" title="Go to top"><i className="fas fa-chevron-up" aria-hidden="true"></i></button>
        );
    }
