import React from 'react';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
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
                <TopLine lightTopLine="true">#Team</TopLine>
                <Heading lightText="true">Lorem ipsum dolor sit amet consectetur </Heading>
                <Subtitle lightTextDesc="true">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consec </Subtitle>
                <Button > Let's meet all</Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start="true">
                <Img src="https://github.com/Aniket762/Webwiz-revamp/blob/main/src/assets/images/team-webwiz.png?raw=true" alt="team" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default team
