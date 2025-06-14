import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between relative m-0">
        <div className="text-2xl font-bold">
            <Link to="/">Flickwise</Link>
        </div>
        <div className="flex items-center gap-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/watchlist" className="nav-link">Watchlist</Link>

            <div className="nav-link"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ cursor: 'pointer' }}>
                Explore ▼
            </div>

                {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white text-black shadow-md rounded-md flex flex-col w-40 z-50">
                    <Link to="/popular" className="nav-link">Popular</Link>
                    <Link to="/top-rated" className="nav-link">Top Rated</Link>
                    <Link to="/upcoming" className="nav-link">Upcoming</Link>
                 </div>
            )}


        </div>
    </nav>
    )
}

export default NavBar