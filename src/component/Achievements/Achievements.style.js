import styled from "@emotion/styled";
import { Box, Link as a, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const Wrapper = styled(Box)(() => ({
  maxWidth:'1440px',
  margin:'auto',
  padding: "5rem 5rem",
  backgroundCcolor: "white",
  display: "flex",
  columnGap: "5rem",
  justifyContent: "space-between",
  "@media (max-width: 1366px)": {
    columnGap: "1rem",
  },

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
  alignItems: 'center',
    display: 'flex',
    columnGap: '10px',
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

export const Rating = styled(Box)`
display:flex;
padding:20px;
flex-direction:column;
background-color:#FFFFFFF;
border-radius:14px;
border:1px solid #eee;
row-gap:1rem;
&:hover{
  box-shadow: 0px 26px 49px rgba(146, 165, 184, 0.14);
}
`;
export const Awwards = styled(Box)`
display:flex;
padding:20px;
flex-direction:column;
background-color:#FFFFFFF;
border-radius:14px;
border:1px solid #eee;
row-gap:1rem;
&:hover{
  box-shadow: 0px 26px 49px rgba(146, 165, 184, 0.14);
}
`;

export const OurAchievements = styled(Box)`
row-gap:5px;
display:flex;
justify-content:start;
flex-direction:column;

button{
    background-color: #217BF4;
    color: white;
    border: 0;
    &:hover{
      box-shadow: 0px 10px 22px rgba(33, 123, 244, 0.26);
    }
}
`;

export const HeaderIcon = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    columnGap: '10px',
    fontWeight: '500',
    fontSize: '20px',
    color:'#0A093D',
}));
export const PersonBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  columnGap: '10px',
  fontWeight: '500',
  fontSize: '14px',
}));
export const Span = styled(Box)(() => ({
  color:'#217BF4',
}));


export const GitIcon = styled(GitHubIcon)`
color:red;
`;
export const AccountIcon = styled(AccountCircleIcon)`
  
`;
