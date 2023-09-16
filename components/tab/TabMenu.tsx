import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { tabList } from "./tab-list";
import styles from "./tab.module.css";

const TAB_WIDTH = { fontSize: "1rem" };

const TABS_CONTAINER = {
  "& .MuiTab-root": {
    textTransform: "none",
  },
  fontSize: "1rem",
  "& .MuiTabs-flexContainer": {
    justifyContent: "space-between",
  },
};

export function TabMenu() {
  const [value, setValue] = useState(tabList[0].id);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <section>
      <nav className={styles.nav}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          sx={TABS_CONTAINER}
        >
          {tabList.map(({ id, title }) => (
            <Tab key={id} value={id} label={title} sx={TAB_WIDTH} />
          ))}
        </Tabs>
      </nav>
    </section>
  );
}
