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
                <Heading lightText="true">Meet the Team.  </Heading>
                <Subtitle lightTextDesc="true">The Dreamers who make it possible. <br/>Be part of an amazing team that is available for you everytime you raise a hand.</Subtitle>
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
