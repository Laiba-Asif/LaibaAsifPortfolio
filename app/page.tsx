import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from '@/components/ui/FloatingNav';
import Footer from "@/components/Footer";
import { IconBrandDatabricks, IconChartBubbleFilled, IconHome, IconMicroscope, IconUserScreen } from "@tabler/icons-react";
import Certification from "@/components/Certification";
import Experience from "@/components/Experience";
import Cursor from "@/components/Cursor";
export default function Home() {
  const navItems = [
    { name: "Home", link: "#home", icon: <IconHome /> },
    { name: "About", link: "#about", icon: <IconUserScreen /> },
    { name: "Projects", link: "#projects", icon: <IconBrandDatabricks /> },
    { name: "Experience", link: "#experience", icon: <IconMicroscope /> },
    { name: "Contact", link: "#contact", icon: <IconChartBubbleFilled /> },
  ];


  return (
    <div>
      <Cursor />

      <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full z-50">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Experience />
          <RecentProjects />
          <Certification />
          <Footer />

        </div>
      </main>
    </div>
  );
}


// aceternity ui
// shadcn ui
// next-themes
