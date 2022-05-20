import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  a.main-button{
      background: ${({ theme }) => theme.buttonBackground};
      border: 1px solid ${({ theme }) => theme.buttonBorder};
  }

  .border-primary-hover:hover{
    border: 1px solid ${({ theme }) => theme.buttonBorder};
  }

  .header .menu-icon .navicon {
    background: ${({ theme }) => theme.text};
  }

  .header .menu-icon .navicon:before,
    .header .menu-icon .navicon:after {
        background: ${({ theme }) => theme.text};
    }
    .header .logo-name {
        color: ${({ theme }) => theme.logoColor};
    }
  
  .main-button:hover{
      background: ${({ theme }) => theme.buttonHoverBackGround};
      color: ${({ theme }) => theme.buttonHoverColor};
  }
  .header li a{
      color: ${({ theme }) => theme.text};
  }
  .header li a:hover,
  .header .menu-btn:hover{
      background: ${({ theme }) => theme.menuItemHoverBackground};
  }
  .show-header {
      background: ${({ theme }) => theme.scrollMenuItemBackground}
  }
  .show-header .header li a:hover,
   .show-header .header .menu-btn:hover{
      background: ${({ theme }) => theme.scrollMenuItemHoverBackground}
  }
  .subTitle {
    color: ${({ theme }) => theme.subTitle};
    }
    .meter{
        background: ${({ theme }) => theme.progressBackground}
    }
    .experience-card{
        background-color: ${({ theme }) => theme.cardBackground};
        box-shadow: ${({ theme }) => theme.cardShadow};
    }
    .experience-card:hover{
        box-shadow: ${({ theme }) => theme.cardHoverShadow};
    }
    .experience-roundedimg {
        box-shadow: ${({ theme }) => theme.cardShadow};
    }
    .certificate-card,
    .service-card,
    .repo-card-div{
        background-color: ${({ theme }) => theme.cardBackground};
        box-shadow: ${({ theme }) => theme.cardShadow};
    }
    .certificate-card:hover,
    .profile-image:hover,
    .service-card:hover,
    .repo-card-div:hover {
        box-shadow: ${({ theme }) => theme.cardHoverShadow};
    }

    .card-title,
    .repo-name {
        color: ${({ theme }) => theme.text};
    }

    .card-subtitle,
    .certificate-card-footer>p,
    .repo-description{
        color: ${({ theme }) => theme.subTitle};
    }
    
    .certificate-card-footer>p:hover{
        color: ${({ theme }) => theme.subTitleHover};
    }

    .desc-prof svg,
    .repo-svg {
        fill: ${({ theme }) => theme.text};
    }
    .repo-stats {
        color: ${({ theme }) => theme.subTitle};
    }
  `
