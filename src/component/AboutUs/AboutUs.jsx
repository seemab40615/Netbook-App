import {
  Wrapper,
  Link,
  LeftSection,
  Heading,
  Detail,
  BulletPoint,
  Group,
  Bullet,
  BulletInside,
  RightSection,
  LeftImage,
  RightImages,
  AboutUsImageOne,
  AboutUsImageTwo,
  AboutUsImageThree,
} from "./AboutUs.style";
import AboutUsImageOneUrl from "../../images/aboutUs1.svg";
import AboutUsImageUrl2 from "../../images/aboutUs2.svg";
import AboutUsImageUrl3 from "../../images/aboutUs3.svg";

export const AboutUs = () => {
  return (
    <Wrapper>
      <LeftSection>
        <Link href="#">Whats Netboks?</Link>
        <Heading>
          Why Join to Netbook <br /> Social Network?
        </Heading>
        <Detail component="p">
          Recent surveys have indicated that small businesses <br /> recognise
          the need they have to connect with consumer.
        </Detail>
        <Group>
          <BulletPoint>
            <Bullet>
              <BulletInside />
            </Bullet>
            Groups
          </BulletPoint>
          <BulletPoint>
            <Bullet>
              <BulletInside />
            </Bullet>{" "}
            Message
          </BulletPoint>
          <BulletPoint>
            <Bullet>
              <BulletInside />
            </Bullet>{" "}
            Share
          </BulletPoint>
        </Group>
      </LeftSection>
      <RightSection>
        <LeftImage>
          <AboutUsImageOne src={AboutUsImageOneUrl} alt="About Us Image 1" />
        </LeftImage>
        <RightImages>
          <AboutUsImageTwo src={AboutUsImageUrl2} alt="About Us Image 2" />
          <AboutUsImageThree src={AboutUsImageUrl3} alt="About Us Image 3" />
        </RightImages>
      </RightSection>
    </Wrapper>
  );
};
