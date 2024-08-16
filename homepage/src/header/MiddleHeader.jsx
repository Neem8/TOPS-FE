import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faSearch,faRecycle,faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons'

export default function MiddleHeader() {
  return (
        <div className="flex flex-row justify-between items-center text-gray-500">
      <div>
        <img
          className="h-[60px]"
          src="https://imgs.search.brave.com/RUWlw5Bu_Tl-zxfnPrpM_zgwoGYRO5iQL_KMw9PqH4o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZhLzhl/L2Y2LzZhOGVmNmU5/YzYyYTlkOGYzNGZh/YWM0NDI3YzI4NjA5/LmpwZw"
        />
      </div>
      <div className="left-0 ">
        <div className="p-2 flex border border-gray-900 w-[500px] gap-1 items-center h-[100%]">
          <div className="text-sm h-[100%]"><pre>All Categories</pre></div>
          <div className="flex w-[100%] h-[100%] justify-between">
            
          <input  type="text" name="" id="" placeholder="Search"></input>
        <div>
        <FontAwesomeIcon icon={faSearch} />
        </div>
          </div>
        </div>
      </div>
      <div className="flex w-[30%] justify-around h-[100%]">
        <div className="border-none">
          <select >
            <option value="">Your Location</option>
            <option value="">Surat</option>
            <option value="">Vadodara</option>
            <option value="">Ahmedabad</option>
            <option value="">Pune</option>
            <option value="">Mumbai</option>
          </select>
        </div>
        <div className="flex">
          <div>
          <FontAwesomeIcon className="text-gray-800" icon={faRecycle} />
          </div>
          <span className="text-gray-500">Compare</span>
        </div>
        <div className="flex">
          <div>
        <FontAwesomeIcon className="text-gray-800" icon={faHeart} />
          </div>
          <span className="text-gray-500">Wishlist</span>
        </div>
        <div className="flex">
          <div>
        <FontAwesomeIcon icon={faCartShopping}/>
          </div>
          <span className="text-gray-500">Cart</span>
        </div>
        <div className="flex">
        <div>
        <FontAwesomeIcon icon={faUser} />
        </div>
          <span className="text-gray-500">Account</span>
        </div>

      </div>
    </div>
  );
}
