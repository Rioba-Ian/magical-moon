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
      class="uppercase font-light font-font-sans-cond  border-b-2 border-b-white/0 py-4 hover:border-b-white/50 has-[a.current]:border-b-2 has-[a.current]:border-b-white"
      onClick={() => {
       handleTabClick(tab);
      }}
     >
      {/* @ts-expect-error */}
      <a
       href={`#${tab}`}
       class={
        selectedTab.value === tab
         ? "current sm:text-xl"
         : "text-accent hover:text-white aria-[selected=true]:text-white sm:text-xl"
       }
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
