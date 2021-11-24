import React from 'react';
import { Link } from '@material-ui/core';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  // TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
    Img,
    Container,
    Button
} from './teamElements';

function team() {
  return (
    <>
      <InfoSec lightBg="true">
        <Container>
          <InfoRow imgStart="true">
            <InfoColumn>
              <TextWrapper>
                {/* <TopLine lightTopLine="true">#Team</TopLine> */}
                <Heading lightText="true">Let's meet the wonderful Webwiz Team </Heading>
                <Subtitle lightTextDesc="true">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consec </Subtitle>
                <Link href='/team'>
                  <Button > Let's meet all</Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start="true">
                <Img src="https://res.cloudinary.com/webwiznitr/image/upload/v1637761727/webwiz-portfolio/team-images/team-webwiz/WEBWIZ_TEAM_zu2vyj.png" alt="team" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default team
