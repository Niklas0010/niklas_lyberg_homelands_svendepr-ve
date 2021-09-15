import React from "react";
import "./slider.scss";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

const Knapper = ({ direction, moveSlide }) => {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow}
                alt="arrows" />
        </button>
    );
}

export { Knapper };