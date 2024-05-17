import { NavFooter } from "@/components/pages/common/NavFooter";
import { NavHead } from "@/components/pages/common/NavHead";
import { NavHeader } from "@/components/pages/common/NavHeader";

import styles from "./HeaderLayout.module.scss";
import { HeaderLayoutProps } from "./HeaderLayout.types";

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  return (
    <div className={styles.sectionWrap}>
      <div className={styles.sectionWrapInner}>
        <NavHead />
        <NavHeader />
        <div>{children}</div>
        <NavFooter />
      </div>
    </div>
  );
};
export default HeaderLayout;
