import React from "react";
import "./AchievementCard.css";
import Button from "../button/Button"

export default function AchivementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    if (typeof window !== "undefined") {
      var win = window.open(url, "_blank")
      win.focus()
    }
  }

  return (
    <div className="certificate-card">
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title mt-2">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <Button
              text={v.name}
              key={i}
              className="project-button"
              newTab={true}
              href={v.url}
            />
          )
        })}
      </div>
    </div>
  )
}
