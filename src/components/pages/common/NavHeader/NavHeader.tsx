import { FlexBox, Typography } from "@/components/common";

import styles from "./NavHeader.module.scss";

const NavHeader = () => {
  return (
    <header>
      <FlexBox
        alignItems="center"
        justifyContent="left"
        className={styles.headerContainer}
      >
        <Typography color="w1" fontWeight={600} fontSize="1.6rem">
          都道府県別の人口推移グラフ
        </Typography>
        <div className={styles.bg} />
      </FlexBox>
    </header>
  );
};

export default NavHeader;
