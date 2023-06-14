
import React from 'react';
import { Wrapper , HeroWrapper , BannerText , SubHeading , Heading , Paragraph , BtnBox , HeroImage , HeroImageBox} from './HeroSection.style';

import Container from '@mui/material/Container';
export const HeroSection = () => {
  return (
    <Wrapper>
      <Container maxWidth="xl">
         <HeroWrapper>
            <BannerText>
            <SubHeading>
                Netbook community
            </SubHeading>
                <Heading >Your Solutions For Community!</Heading>
                <Paragraph class="para">
                More than 2 billion people in over countries use socibook to stay in
                touch with friends & family.
                </Paragraph>
                <BtnBox>
                <button className="about-btn">About More</button>
                <button className="invite-btn">Invite Friend</button>
                </BtnBox>
            </BannerText>
            <HeroImageBox sx={{textAlign:'center'}}>
              <HeroImage />
            </HeroImageBox>
        </HeroWrapper>
      </Container>
    </Wrapper>
  );
};
