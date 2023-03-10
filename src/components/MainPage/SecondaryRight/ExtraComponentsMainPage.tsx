import * as React from "react";
import { Stack, Paper } from "@mui/material";
import {
  FileCard,
  ExtFile,
  FullScreen,
  ImagePreview,
  VideoPreview,
} from "../../../files-ui";
import AnchorToTab from "../../util-components/AnchorToTab";
import TypeHighlight from "../../typeHighlight/TypeHighlight";
import { ThorArrivesWakandaES } from "../../../data/videoLinks";

interface ExtraComponentsMainPageProps {
  darkMode?: boolean;
}
const ExtraComponentsMainPage: React.FC<ExtraComponentsMainPageProps> = (
  props: ExtraComponentsMainPageProps
) => {
  const { darkMode } = props;
  const [imageSrc, setImageSrc] = React.useState<string | undefined>(undefined);
  const [videoSrc, setVideoSrc] = React.useState<File | string | undefined>(
    undefined
  );

  const handleSee = (imageSource: string | undefined) => {
    console.log("handleSee-imageSource", imageSource);
    setImageSrc(imageSource);
  };

  const handleWatch = (videoSource: File | string | undefined) => {
    console.log("handleWatch videoSource", videoSource);
    //setVideoSrc(videoSource);
    //
    setVideoSrc(videoSource);
    // setVideoSrc("https://www.w3schools.com/tags/movie.mp4");
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
        boxSizing: "border-box",
        backgroundColor: darkMode ? "#121212" : "rgba(0, 0, 0, 0.06)",
        height: "100%",
      }}
    >
      <TypeHighlight size="1.1rem">
        <AnchorToTab href="/components/filecard">
          <h3 style={{ margin: 0 }}>{"<FileCard/>"}</h3>
        </AnchorToTab>
      </TypeHighlight>
      <Stack
        direction={"column"}
        spacing={2}
        alignItems="center"
        justifyContent={"space-evenly"}
        sx={{
          flexWrap: "wrap",
          flexGrow: 1,
        }}
      >
        {files.map((f: ExtFile, index: number) => (
          <FileCard
            onClick={() => {
              alert("haaa");
            }}
            key={index}
            //darkMode={darkMode}
            {...f}
            onSee={handleSee}
            onWatch={handleWatch}
            {...f.extraData}
            info
            darkMode={darkMode}
          />
        ))}
        <FullScreen
          open={imageSrc !== undefined}
          onClose={() => setImageSrc(undefined)}
        >
          <ImagePreview src={imageSrc} />
        </FullScreen>
        <FullScreen
          open={videoSrc !== undefined}
          onClose={() => setVideoSrc(undefined)}
        >
          <VideoPreview src={videoSrc} autoPlay controls />
        </FullScreen>
      </Stack>
    </Paper>
  );
};
export default ExtraComponentsMainPage;

const files: ExtFile[] = [
  /* {
    id: 0,
    name: "image-preview.png",
    type: "image/png",
    size: 282000,
    imageUrl: "https://i.ytimg.com/vi/98FO19TuI9A/maxresdefault.jpg",
  }, */

  {
    id: 2,
    name: "ThorArrivesWakandaES.mp4",
    type: "video/mp4",
    size: 282000,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/626/685/desktop-wallpaper-avengers-infinity-war-thor-arrives-in-wakanda-bring-me-thanos.jpg",
    downloadUrl: ThorArrivesWakandaES,
    extraData: { videoUrl: ThorArrivesWakandaES },
  },
  {
    id: 3,
    name: "downloadable-file.png",
    type: "image/png",
    size: 282000,
    imageUrl: "/static/media/files-ui-logo-blue.e28c57506796630aebb5.png",
    downloadUrl: "/static/media/files-ui-logo-blue.e28c57506796630aebb5.png",
    extraData: {
      backgroundBlurImage: false,
    },
  },
  {
    id: 1,
    name: "ironman.png",
    type: "image/png",
    size: 282000,
    downloadUrl:
      "https://i.pinimg.com/236x/3e/e9/46/3ee946b27fd1cc5eb0b485e4a0669534.jpg",

    imageUrl:
      "https://i.pinimg.com/236x/3e/e9/46/3ee946b27fd1cc5eb0b485e4a0669534.jpg",
  },
];