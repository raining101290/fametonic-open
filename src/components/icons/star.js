import Image from "next/image";

export default function StarIcon({ width = 22, height = 22, customClass }) {
  return (
    <Image
        src="/star.png"
        alt="magic-star"
        width={width}
        height={height}
        priority
        className={`inline-block ml-2 ${customClass}`}
    />
  );
}
