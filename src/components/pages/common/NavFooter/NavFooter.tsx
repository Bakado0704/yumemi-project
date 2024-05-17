import { FlexBox, Typography } from "@/components/common";

import styles from "./NavFooter.module.scss";

const NavFooter = () => {
  return (
    <footer>
      <FlexBox
        justifyContent="center"
        alignItems="center"
        className={styles.footerContainer}
      >
        <Typography color="w1">created by Hiroki Kado</Typography>
        <div className={styles.bg} />
      </FlexBox>
    </footer>
  );
};

export default NavFooter;
