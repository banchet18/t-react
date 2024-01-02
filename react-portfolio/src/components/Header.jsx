import { MdNightsStay, MdWbSunny } from "react-icons/md";
const Header = () => {
  return (
    <header className=" dark:bg-gray-900 text-gray-900 bg-white  dark:text-white">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-4xl">Chetan Banjara</h1>
        <div className="flex justify-between">
          <MdNightsStay />
          <MdWbSunny />
        </div>
      </nav>
    </header>
  );
};
export default Header;
