import Link from "next/link";
import { IconType } from "react-icons";

interface SocialIconProps {
  href: string;
  icon: IconType;
}

export default function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <Link href={href}>
      {icon({
        className:
          "text-4xl text-gray-500 hover:text-red-400 cursor-pointer transition-all",
      })}
    </Link>
  );
}
