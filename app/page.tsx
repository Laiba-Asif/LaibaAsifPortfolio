
import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from '@/components/ui/FloatingNav';
// import Approach from "@/@/components/Certification
import Footer from "@/components/Footer";
import { IconBrandDatabricks, IconChartBubbleFilled, IconHome, IconMicroscope, IconUserScreen } from "@tabler/icons-react";
import ParticlesContainer from "@/components/ParticlesContainer";
import EncryptionLoader from "@/components/EncryptionLoader";
import Certification from "@/components/Certification";
export default function Home() {
  const navItems = [
    { name: "Home", link: "#home", icon: <IconHome /> },
    { name: "About", link: "#about", icon: <IconUserScreen /> },
    { name: "Projects", link: "#projects", icon: <IconBrandDatabricks /> },
    { name: "Experience", link: "#experience", icon: <IconMicroscope /> },
    { name: "Contact", link: "#contact", icon: <IconChartBubbleFilled /> },
  ];


  return (
    // <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
    //   <div className="h-full w-full  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
    //     <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    //   </div>
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      {/* Static Grid Background */}
      <div className="h-full w-full dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 bg-fixed">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="max-w-7xl w-full z-50">
        <FloatingNav navItems={navItems} />
        <ParticlesContainer />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* will add clients when have testimonial and clients/companies */}
        {/* <Clients /> */}
        {/* will add experiences after once i'll have them */}
        <Certification />
        {/* <Approach /> */}
        <Footer />
        {/* <EncryptionLoader /> */}

      </div>
    </main>
  );
}


// aceternity ui
// shadcn ui
// next-themes
