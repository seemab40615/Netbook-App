import React from "react";
import { Box } from "@mui/material";
import { FooterWrapper, StyledContainer, Wrapper } from "./Footer.style";
import { ReactComponent as FooterLogo } from "../../images/footerImage.svg";
import { ReactComponent as FbIcon } from "../../images/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/Twitter.svg";
import { ReactComponent as InstaIcon } from "../../images/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../images/Linkedin.svg";

export const Footer = () => {
  const MenuItem = ["Home", "Resources", "Comunity", "Members"];
  return (
    <Wrapper>
      <StyledContainer maxWidth="xl">
        <FooterWrapper>
          <Box className="footerlogo">
            <FooterLogo />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-around" }}
            className="footeritem"
          >
            {MenuItem.map((item, index) => (
              <Box Key={index}>{item}</Box>
            ))}
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "space-around" }}
            className="footericon"
          >
            <TwitterIcon sx={{ p: 1 }} />
            <InstaIcon sx={{ p: 1 }} />
            <FbIcon sx={{ p: 1 }} />
            <LinkedinIcon sx={{ p: 1 }} />
          </Box>
        </FooterWrapper>
      </StyledContainer>
    </Wrapper>
  );
};
