import React from "react"
import "./ProjectCard.css"
import Button from '../button/Button';

export default function ProjectCard({ cardInfo }) {

    return (
        <div className="project-card experience-card">
            <div className="project-image-div">
                <img src={cardInfo.image} alt="project" className="card-image"></img>
            </div>
            <div style={{padding: "10px 20px 25px"}}>
                <div className="project-detail-div">
                    <h5 className="card-title">{cardInfo.title}</h5>
                    <p className="card-subtitle">{cardInfo.description}</p>
                </div>
                <div className="project-card-footer">
                    <Button
                        text="Visit"
                        className="project-button"
                        newTab={true}
                        href={cardInfo.url}
                    />
                </div>
            </div>
        </div>
    )
}
