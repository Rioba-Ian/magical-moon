import A from "../ui/A.astro";
import { useSelectedTab } from "./context/use-tabs";
import PlanetTesimalLayout from "./PlanetTesimalLayout";

export default function DestinationTab() {
 const tabs = ["moon", "mars", "europa", "titan"];
 const selectedTab = useSelectedTab();

 const handleTabClick = (value: string) => {
  selectedTab.value = value;
 };
 return (
  <PlanetTesimalLayout className="">
   <ul class=" flex items-center gap-8 " id="tabs-destination">
    {tabs?.map((tab) => (
     <li
      class="uppercase font-light font-font-sans-cond"
      onClick={() => {
       handleTabClick(tab);
      }}
     >
      {/* @ts-expect-error */}
      <a
       href={`#${tab}`}
       class={"text-base sm:text-xl"}
       id={tab}
       aria-selected={tab}
      >
       {tab}
      </a>
     </li>
    ))}
   </ul>
  </PlanetTesimalLayout>
 );
}
