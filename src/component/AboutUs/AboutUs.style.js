import styled from "@emotion/styled";
import { Box, Link as a, Typography, Avatar } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
  padding: "5rem 5rem",
  maxWidth:'1440px',
  margin:'auto',
  backgroundCcolor: "white",
  display: "flex",
  columnGap: "1rem",
  justifyContent: "space-between",

  "@media (max-width: 980px)": {
    flexDirection: "column",
    rowGap: "1rem",
  },

  "@media(max-width: 450px)": {
    padding: "5rem 2rem",
  },
}));

export const LeftSection = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  justifyContent: "center",
}));

export const Link = styled(a)(() => ({
  color: "#217BF4",
  textDecoration: "none",
  cursor: "pointer",
}));

export const Heading = styled(Box)(() => ({
  fontWeight: "700",
  lineHeight: "3rem",
  fontSize: "36px",
  "@media (max-width: 1366px)": {
    fontSize: "28px",
    lineHeight: "2rem",
  },
}));

export const Detail = styled(Typography)(() => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "28px",
  color: "#656464",
}));

export const Group = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const Bullet = styled(Box)(() => ({
  position: "relative",
  width: "18px",
  height: "18px",
  borderRadius: "50%",
  backgroundColor: "#217bf41a",
  zIndex: 1,
}));

export const BulletInside = styled(Box)(() => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "#217BF4",
  position: "absolute",
  left: "50%",
  top: "50%",
  translate: "-50% -50%",
  zIndex: 2,
}));

export const BulletPoint = styled(Typography)(() => ({
  display: "flex",
  alignItems: "center",
  columnGap: "1rem",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  color: "#171648",
}));

export const RightSection = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  columnGap: "1rem",

  "@media (max-width: 980px)": {
    justifyContent: "center",
  },

  "@media (max-width: 820px)": {
    flexDirection: "column",
    alignItems: "center",
    rowGap: "1rem",
  },
}));

export const AboutUsImageOne = styled(Avatar)(() => ({
  width: "270px",
  height: "368px",
  borderRadius: "14px",

  "@media (max-width: 980px)": {
    width: "200px",
    height: "238px",
  },

  "@media (max-width: 820px)": {
    width: "350px",
    height: "350px",
  },

  "@media (max-width: 450px)": {
    width: "280px",
    height: "280px",
  },

  "@media (max-width: 320px)": {
    width: "100%",
    height: "280px",
  },
}));
export const AboutUsImageTwo = styled(Avatar)(() => ({
  width: "265px",
  height: "238px",
  borderRadius: "14px",

  "@media (max-width: 980px)": {
    width: "200px",
  },

  "@media (max-width: 820px)": {
    width: "350px",
    height: "350px",
  },

  "@media (max-width: 450px)": {
    width: "280px",
    height: "280px",
  },

  "@media (max-width: 320px)": {
    width: "100%",
    height: "280px",
  },
}));
export const AboutUsImageThree = styled(Avatar)(() => ({
  width: "265px",
  height: "238px",
  borderRadius: "14px",

  "@media (max-width: 980px)": {
    width: "200px",
  },

  "@media (max-width: 820px)": {
    width: "350px",
    height: "350px",
  },

  "@media (max-width: 450px)": {
    width: "280px",
    height: "280px",
  },

  "@media (max-width: 320px)": {
    width: "100%",
    height: "280px",
  },
}));

export const LeftImage = styled(Box)(() => ({
  alignSelf: "center",
}));

export const RightImages = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  justifyContent: "center",

  "@media (max-width: 980px)": {
    flexDirection: "row",
    columnGap: "1rem",
  },

  "@media (max-width: 960px)": {
    columnGap: "1rem",
  },

  "@media (max-width: 820px)": {
    flexDirection: "column",
  },
}));
