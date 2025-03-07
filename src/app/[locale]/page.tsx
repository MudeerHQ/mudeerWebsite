import HomeHeader from "./_components/HomeHeader";
import HomeMissions from "./_components/HomeMissions";
import HomeProjects from "./_components/HomeProjects";
import HomeSolve from "./_components/HomeSolve";
import HomeWays from "./_components/HomeWays";

export default function Home() {
  return (
    <div className="bg-[#F5F5F4]">
      <HomeHeader />
      <HomeMissions />
      <HomeWays />
      <HomeSolve />
      <HomeProjects />
    </div>
  );
}
