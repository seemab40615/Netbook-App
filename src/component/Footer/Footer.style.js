import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
export const FooterWrapper = styled(Box)`
  height: 140px;
  widht: 100%;
  background-color: #2b2b39;
  display: flex;
  align-items: center;
  padding-inline: 80px;
  justify-content: space-around;
  color: #fff;
  .footerlogo {
    width: 20%;
  }
  .footeritem {
    width: 60%;
  }
  .footericon {
    width: 20%;
  }
  @media (max-width: 900px) {
    padding-inline: 30px;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    padding-inline: 30px;
    .footerlogo {
      width: 100%;
      justify-content: center;
      display: flex;
      padding-block: 10px;
    }
    .footeritem {
      width: 100%;
      padding-block: 10px;
    }
    .footericon {
      width: 40%;
      padding-block: 10px;
    }
  }
  @media (max-width: 460px) {
    .footericon {
      width: 60%;
      padding-block: 10px;
    }
  }
`;

export const StyledContainer = styled(Container)`
  height: 140px;
  widht: 100%;
  background-color: #2b2b39;
`;

export const Wrapper = styled(Box)`
  height: 140px;
  widht: 100%;
  background-color: #2b2b39;
  margin-top: 50px;
`;
