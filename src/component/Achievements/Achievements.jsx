import {
  Wrapper,
  Link,
  Heading,
  Detail,
  OurAchievements,
  Rating,
  Awwards,
  HeaderIcon,
  PersonBox,
  Span,
  AccountIcon,
  GitIcon,
} from "./Achievements.style";

import { ReactComponent as Star } from "../../images/Star.svg";
import { ReactComponent as Trophy } from "../../images/Trophy.svg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Achievements = () => {
  return (
    <Wrapper>
      <Rating>
        <HeaderIcon>
          <Star /> 4.8 Rating
        </HeaderIcon>
        <PersonBox>
          <AccountIcon /> <Span>+836k</Span> Members
        </PersonBox>
        <Detail component="p">
        More than 2 billion we people  over countries use socibooks we to stay  in touch with friends.
         
        </Detail>
        <Link href="#" sx={{pt:1}}>Join Our Community <ArrowRightAltIcon /> </Link>
      </Rating>
      <Awwards>
      <HeaderIcon>
          <Trophy /> Awwards
        </HeaderIcon>
        <PersonBox>
          <GitIcon color="red" /> Best of <Span>2021</Span> on Github
        </PersonBox>
        <Detail component="p">
        More than 2 billion we people  over countries use socibooks we to stay in touch with friends.
         
        </Detail>
        <Link href="#" sx={{pt:1}}>Go To Awards <ArrowRightAltIcon /></Link> 
      </Awwards>
      <OurAchievements>
        <Link href="#">Our Achievement</Link>
        <Heading>
          We are Connecting <br /> You The Digital Life.
        </Heading>
        <Detail component="p">
          The scope the Social Media becomes crucial Is
          helps the business to directly engage with their 
          needs and wants.
        </Detail>
        <button variant="primary">Discover me </button>
      </OurAchievements>
    </Wrapper>
  );
};
