import { signal } from "@preact/signals";
import { createContext } from "preact";
import { useContext } from "preact/hooks";

const selectedTab = signal("moon");

const SelectedTabContext = createContext(selectedTab);

function useSelectedTab() {
 return useContext(SelectedTabContext);
}

export { useSelectedTab, SelectedTabContext, selectedTab };
