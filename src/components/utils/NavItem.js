import Link from "next/link";

const NavItem = ({ href, icon, label }) => (
  <div className="bg-gray-400 rounded-md px-2 py-1">
    <Link href={href} className="flex items-center gap-2">
      <i className={`${icon} ri-2x`}>
        <p className="text-xl">{label}</p>
      </i>
    </Link>
  </div>
);

export default NavItem;
