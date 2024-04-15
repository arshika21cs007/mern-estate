//to use icons,import it
import { FaSearch } from "react-icons/fa";
//to bring one page to other page without refreshing the page
import { Link } from "react-router-dom";

export default function Header() {
  return (
    //Tag name to header which will be useful for SEO Purpose i.e Search Engine optimization
    <header className='bg-slate-200 shadow-md'>
        {/* text-sm---Mobile size, after the mobile size--sm:text-xl */}
        {/* justify-between--to get space between title and searchbar, to bring them center use mx auto--margin x auto,p-3--padding,flex--used to wrap those in single line */}
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
           {/* if we click title, it navigate to home page where that is indicated as / */}
            <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
      <span className='text-slate-500'>Serenity</span>
      <span className='text-slate-700'>Estate</span>
      </h1>
      </Link>
      {/* rounded-lg--for corners of searchbar */}
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        {/* focus:outline:none--to remove box within searchbar */}
        <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-600'/>
      </form>
      <ul className='flex gap-4'>
      {/* hidden sm:inline--used to visible that line only in desktop screen */}
      <Link to='/'>
        <li className="hidden sm:inline text-gray-700 hover:underline">Home</li>
        </Link>
        <Link to='/about'>
        <li className="hidden sm:inline text-gray-700 hover:underline">About</li>
        </Link>
        <Link to='/sign-in'>
        <li className=" text-gray-700 hover:underline">Sign in</li>
        </Link>
    </ul>
      </div>
        </header>
  );
}
