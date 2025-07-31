import Link from "next/link";

const BottomNavItem = ({ href, icon, label }) => (
  <Link href={href} className="flex flex-col items-center text-sm">
    <i className={`${icon} ri-xl`} />
    <span>{label}</span>
  </Link>
);

export default BottomNavItem;
