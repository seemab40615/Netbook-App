import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { ReactComponent as circle } from "../../images/Abstrack.svg";
import { ReactComponent as imgOne } from "../../images/Image1.svg";
export const Wrapper = styled(Box)`
  max-width:1440px,
  margin:auto,
  display: flex;
  align-items: center;
  widht: 100%;
  flex-direction: column;
  row-gap: 1rem;

  .MuiTabs-flexContainer {
    padding: 0.5rem;
    background-color: rgba(33, 123, 244, 0.1);
    border-radius: 10px;
  }
  .MuiTabs-indicator {
    display: none;
  }
  .MuiTab-root.Mui-selected {
    color: #fff;
    background-color: #1976d2;
    border-radius: 10px;
  }
  margin-bottom: 100px;

  @media(max-width: 550px){
    .MuiTabs-flexContainer{
      flex-direction: column;
      max-width: 500px;
    }
  }
`;

export const TabWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}))

export const Header = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

}));

export const HeaderTitle = styled(Typography)(() => ({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  textAlign: "center",
  color: "#217BF4",
}));

export const HeaderBigTitle = styled(Typography)(() => ({
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "36px",
  textAlign: "center",
  color: "#0A093D",
  "@media (max-width: 1366px)": {
    fontSize: "28px",
  },
}));

export const HeaderDescription = styled(Typography)(() => ({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  textAlign: "center",
  paddingInline:'30px',
  color: "#656464",
}));

export const CardWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  flex-wrap: wrap;
  row-gap: 1rem;
`;
export const Card = styled(Box)`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #eee;
  flex-basis: 20%;

  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
    color: #2f2c4a;
    text-align: center;
  }

  .subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #656464;
    text-align: center;
  }
`;

export const CircleIcon = styled(circle)`
  position: absolute;
  z-index: 2;
`;
export const ImageOne = styled(imgOne)`
  position: absolute;
  z-index: 1;
  top: 14px;
`;
export const ImageTwo = styled(imgOne)`
  position: absolute;
  z-index: 1;
  top: 14px;
`;
export const ImageThree = styled(imgOne)`
  position: absolute;
  z-index: 1;
  top: 14px;
`;
export const ImageFour = styled(imgOne)`
  position: absolute;
  z-index: 1;
  top: 14px;
`;

export const ImageBox = styled(Box)`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 210px;
  position: relative;
`;
