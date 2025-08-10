import Image from "next/image";

export default function ArrowRight({ width = 11, height = 6 }) {
  return (
    <Image
        src="/right-arrow.svg"
        alt="Logo"
        width={width}
        height={height}
        priority
        className="inline-block ml-2"
    />
  );
}
