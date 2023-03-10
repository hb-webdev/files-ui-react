import * as React from "react";
import MainContentContainer from "../../components/layout-pages/MainContentContainer";
import RightMenuContainer from "../../components/layout-pages/RightMenuContainer";
import MainTitle from "../../components/main-title/MainTitle";
import RightMenu from "../../components/RightMenu/RightMenu";

const rightMenuItems = [
  {
    id: 0,
    label: "Read as URL",
    referTo: "/utilities-methods/file-reader/#read-as-url",
  },
];

interface FileReaderPageProps {}
const FileReaderPage: React.FC<FileReaderPageProps> = (
  props: FileReaderPageProps
) => {
  return (
    <React.Fragment>
      <MainContentContainer>
        <MainTitle>File Reader</MainTitle>
      </MainContentContainer>

      <RightMenuContainer>
        <RightMenu width="240px" items={rightMenuItems} />
      </RightMenuContainer>
    </React.Fragment>
  );
};
export default FileReaderPage;