import Dashboard from "../components/Dashboard";
import About from "../components/About"; // pastikan file ini ada

export default function Home() {
  return (
    <>
      <Dashboard />
      <div className="pt-96 md:pt-11 sm:pt-11">
        <About />
      </div>
    </>
  );
}
