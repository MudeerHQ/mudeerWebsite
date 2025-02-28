import HomeHeader from "./_components/HomeHeader";
import HomeMissions from "./_components/HomeMissions";
import HomeProjects from "./_components/HomeProjects";
import HomeWays from "./_components/HomeWays";

export default function Home() {
  return (
    <div >
      <HomeHeader />
      <HomeMissions />
      <HomeWays />
      <HomeProjects />
    </div>
  );
}
