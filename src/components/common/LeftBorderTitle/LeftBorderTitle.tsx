import { FlexBox } from "../FlexBox";
import { Heading } from "../Heading";
import { LeftBorder } from "../LeftBorder";

import styles from "./LeftBorderTitle.module.scss";
import { LeftBorderTitleProps } from "./LeftBorderTitle.types";

const LeftBorderTitle = ({
  title,
  color: background,
}: LeftBorderTitleProps) => (
  <FlexBox className={styles.container}>
    <LeftBorder color={background} />
    <Heading headingLevel="h2" className={styles.title}>
      {title}
    </Heading>
  </FlexBox>
);

export default LeftBorderTitle;
