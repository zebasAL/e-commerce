import React from 'react';
import { Paragraph, Text } from 'evergreen-ui';

const HomePageHeader = () => (
  <div className="headline">
    <Text
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin={40}
      fontWeight={400}
      textAlign="center"
      fontSize={40}
      lineHeight="55px"
      color="black"
      letterSpacing="1px"
      fontFamily="poppins"
    >
      Obsessive Attention. Intelligent Effort.
    </Text>
    <Paragraph
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      fontSize={15}
      fontWeight="500"
      margin={40}
      letterSpacing="1px"
      fontFamily="poppins"
    >
      Functional items made of luxurious and honest materials to
      improve people&lsquo;s lives in small but mighty ways.
    </Paragraph>
  </div>
);

export default HomePageHeader;
