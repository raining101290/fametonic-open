import ArrowRight from "@/components/icons/arrow-right";
import Header from "@/components/header";
import Logo from "@/components/icons/logo";
import MainBody from "@/components/main-body";
import StarIcon from "@/components/icons/star";
import TopBar from "@/components/top-bar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TOP GRADIENT BAR */}
      <TopBar />
      {/* HEADER */}
      <Header />
      {/* HERO SECTION */}
      <MainBody />
    </div>
  );
}