import styled from '@emotion/styled';
import {Box} from '@mui/material';
export const NavMenuItem = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 14px;
color: #656464;
padding:5px 25px;
cursor:pointer;

&:hover {
    color: #000;
}
`;

export const Wrapper = styled(Box)`
padding-inline:5rem;
border-bottom:1px solid rgba(33, 123, 244, 0.1);
height:90px;
display:flex;
justify-content:center;
align-items: center;
@media(max-width: 980px){
    padding-inline:2rem;
}
`;

export const StyledButton = styled(Box)`
background-color:#217BF4;
color:#fff;
border-radius:14px;
padding-block: 10px;
padding-inline: 20px;
font-size: 14px;
pb:2px;
width:50px;
`; 

export const SearchWrapper = styled(Box)`
margin-right:20px;

`;

export const Navbar = styled(Box)`
display:flex;
column-gap:3rem;
align-items:center;

@media(max-width: 980px){
    column-gap:10px;
}
`;
