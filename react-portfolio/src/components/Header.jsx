import { MdNightsStay, MdWbSunny } from "react-icons/md";
const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between">
        <h1>Jarvis</h1>
        <div>
          <MdNightsStay />
          <MdWbSunny />
        </div>
      </nav>
    </header>
  );
};
export default Header;
