import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Router/Routes'

const Sidebar = () => {
  return (
    <aside className="bg-[#f7f7f8] w-64 fixed h-full py-6 px-4 shadow-md">
        <div className="relative">
          <Link href="#javascript">
            <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-[160px]" />
          </Link>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <Link to={routes.Todo} className="flex items-center px-4 py-3 text-black hover:text-blue-600 hover:bg-white rounded-md">
                <span>🏠 Tasks </span>
              </Link>
            </li>            
          </ul>
        </nav>
      </aside>
  )
}

export default Sidebar