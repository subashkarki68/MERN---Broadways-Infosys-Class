import Clock from "./Clock";
import useViewCount from "./customHooks/useViewCount";
import ThemeToggler from "./themer/Theme-Toggler";

function Header() {
  const viewCount = useViewCount();
  return (
    <div className='w-full h-20 flex flex-row px-20 justify-between'>
      <div className='text-5xl'>Learning React</div>
      <div>
        <Clock />
      </div>
      <div>
        <h2 className='text-xl'>Page Visits: {viewCount}</h2>
      </div>
      <div className='justify-end'>
        <ThemeToggler />
      </div>
    </div>
  );
}

export default Header;
