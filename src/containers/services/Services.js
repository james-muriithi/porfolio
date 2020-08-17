import React from "react"
import ServiceCard from "../../components/serviceCard/ServiceCard"
import { servicesSection } from "../../portfolio"
import { Fade } from "react-reveal"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 56px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
  @media (max-width: 1380px) {
    font-size: 40px;
}
`

const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 1rem 1rem;
  // & .service-1{
  //     background-color: rgb(108, 108, 229);
  //     box-shadow: 0px 10px 30px -8px rgba(108, 108, 229, 0.5);
  //     & h3 {
  //         color: rgb(248,249,250);
  //     }
  //     & p.card-subtitle {
  //         color: #d2d9df;
  //     }
  // }
  // & .service-2{
  //     background-color: rgb(249, 215, 76);
  //     box-shadow: 0px 10px 30px -8px rgba(249, 215, 76, 0.5);
  //     & h3 {
  //         color: rgb(69, 67, 96);
  //     }
  //     & p.card-subtitle {
  //         color: rgba(69, 67, 96, 0.9);
  //     }
  // }

  // & .service-3{
  //     background-color: rgb(249, 123, 139);
  //     box-shadow: 0px 10px 30px -8px rgba(249, 123, 139, 0.5);
  //     & h3 {
  //         color: rgb(248,249,250);
  //     }
  //     & p.card-subtitle {
  //         color: rgba(248,249,250, .8);
  //     }
  // }
`

const ServicesContainer = styled.div`
  display: flex;
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
  margin-top: 2rem;
`

export default function Services() {
  if (servicesSection.services) {
    return (
      <div id="services" style={{ paddingTop: "20px" }}>
        <Fade top duration={1000} distance="20px">
          <ServicesContainer className="service-container" id="serviceSection">
            <div style={{ width: "100%" }}>
              <Title className="service-heading">{servicesSection.title}</Title>
              <ServiceCards>
                {servicesSection.services.map((service, index) => {
                  return (
                    <ServiceCard
                      cardInfo={service}
                      className={`service-card service-${index + 1}`}
                      key={index}
                    />
                  )
                })}
              </ServiceCards>
            </div>
          </ServicesContainer>
        </Fade>
      </div>
    )
  }
  return null
}
