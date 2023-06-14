import  styled from '@emotion/styled';
import { Box } from '@mui/material';
import { ReactComponent as HeroImg } from '../../images/HeroImage.svg';
export const Wrapper = styled(Box)`
padding-inline:80px;
maxWidth:'1440px';
  margin:'auto';
  @media (max-width: 980px) {
    padding-inline:30px;
}
`;

export const HeroWrapper = styled(Box)`
display: flex;
width: 100%;
justify-content:space-between;
@media (max-width: 980px) {
    flex-direction:column;
    justify-content:center;
}
`;

export const BannerText = styled(Box)`
    margin:auto 0;
}

button{
    margin-top: 2.5rem;
    height: 50px;
    width: 160px;
    border-radius: 10px;
}
.invite-btn{
    color: #217BF4;
    margin-left: 12px;
    background: none;
    border: 1px solid #217BF4;
    &:hover{
        box-shadow: 0px 10px 22px rgba(33, 123, 244, 0.26);
      }
}
.about-btn{
    background-color: #217BF4;
    color: white;
    border: 0;
    &:hover{
        box-shadow: 0px 10px 22px rgba(33, 123, 244, 0.26);
      }
}
`;

export const SubHeading = styled(Box)`
margin-top:20px;
padding: 12px 30px;
font-size:12px;
border-radius: 10px;
background-color: rgba(33, 123, 244, 0.1);
color: #217BF4;
width:150px;
`;
export const Heading = styled(Box)`
font-family: 'Inter';
font-size: 56px;
line-height: 60px;
margin: 22px 0;
@media (max-width:1080px) {
    font-size: 45px;
    line-height: 50px;
}
@media (max-width:980px) {
    font-size: 36px;
    line-height: 40px;
}
`;
export const Paragraph = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 28px;
`;
export const BtnBox = styled(Box)`
display:flex;
justify-content:start;

`;

export const HeroImage = styled(HeroImg)`
width:100%;
@media (max-width:980px) {
   height:300px;
}
`;
export const HeroImageBox = styled(Box)`
width:100%;
@media (max-width:980px) {
    width:80%;
margin:auto;
}
`;


