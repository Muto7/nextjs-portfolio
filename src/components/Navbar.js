import NavItem from "./utils/NavItem";
import BottomNavItem from "./utils/BottomNavItem";

const Navbar = () => {
  return (
    <>
      {/* Sidebar untuk desktop */}
      <div className="hidden md:fixed fixed md:left-24 md:top-7 md:block bg-gray-300 p-4 rounded-xl shadow">
        <div className="text-2xl font-bold pb-7">Muto7</div>
        <div className="flex flex-col gap-6 mt-6">
          <NavItem href="/" icon="ri-user-3-line" label="About" />
          <NavItem href="/resume" icon="ri-file-list-3-line" label="Resume" />
          <NavItem href="/certificates" icon="ri-briefcase-line" label="Portofolio" />
          <NavItem href="/contact" icon="ri-mail-line" label="Contact" />
        </div>
      </div>

      {/* Bottom navbar untuk mobile & tablet */}
      <div className="block md:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded-t-xl sm:rounded-xl w-full max-w-sm p-2 shadow-lg z-50">
        <div className="flex justify-around py-2">
          <BottomNavItem href="/" icon="ri-user-3-line" label="About" />
          <BottomNavItem href="/resume" icon="ri-file-list-3-line" label="Resume" />
          <BottomNavItem href="/certificates" icon="ri-briefcase-line" label="Portfolio" />
          <BottomNavItem href="/contact" icon="ri-mail-line" label="Contact" />
        </div>
      </div>
    </>
  );
};


export default Navbar;
