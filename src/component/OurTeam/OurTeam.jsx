import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Wrapper,
  Card,
  CircleIcon,
  ImageOne,
  ImageBox,
  CardWrapper,
  Header,
  HeaderTitle,
  HeaderBigTitle,
  HeaderDescription,
  TabWrapper,
} from "./OurTeam.style";

export const OurTeam = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Valueable Team</HeaderTitle>
        <HeaderBigTitle>Our Active Members</HeaderBigTitle>
        <HeaderDescription>
          when an unknown printer took a galley of type and meeting fari <br />
          scrambled it.
        </HeaderDescription>
      </Header>
      <Box sx={{ maxWidth: "1440px", margin: "auto", typography: "body1" }}>
        <TabContext value={value}>
          <TabWrapper>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Newest" value="1" />
              <Tab label="Popular" value="2" />
              <Tab label="Active" value="3" />
            </TabList>
          </TabWrapper>
          <TabPanel value="1">
            <CardWrapper>
              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Fahim Rahman</Box>
                <Box className="subtitle">@rahman</Box>
              </Card>
              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Masterero Ali</Box>
                <Box className="subtitle">@Master</Box>
              </Card>
              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Kazi Rahman</Box>
                <Box className="subtitle">@Rahman</Box>
              </Card>

              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Alia Karon</Box>
                <Box className="subtitle">@Ali</Box>
              </Card>
            </CardWrapper>
          </TabPanel>
          <TabPanel value="2">
            <CardWrapper>
              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Kazi Rahman</Box>
                <Box className="subtitle">@Rahman</Box>
              </Card>
              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Fahim Rahman</Box>
                <Box className="subtitle">@rahman</Box>
              </Card>

              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Alia Karon</Box>
                <Box className="subtitle">@Ali</Box>
              </Card>
              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Masterero Ali</Box>
                <Box className="subtitle">@Master</Box>
              </Card>
            </CardWrapper>
          </TabPanel>
          <TabPanel value="3">
            <CardWrapper>
              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Fahim Rahman</Box>
                <Box className="subtitle">@rahman</Box>
              </Card>
              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Alia Karon</Box>
                <Box className="subtitle">@Ali</Box>
              </Card>
              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Masterero Ali</Box>
                <Box className="subtitle">@Master</Box>
              </Card>

              <Card>
                <ImageBox>
                  <CircleIcon />
                  <ImageOne />
                </ImageBox>
                <Box className="title">Kazi Rahman</Box>
                <Box className="subtitle">@Rahman</Box>
              </Card>
            </CardWrapper>
          </TabPanel>
        </TabContext>
      </Box>
    </Wrapper>
  );
};
