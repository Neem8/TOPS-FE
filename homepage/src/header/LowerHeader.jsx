import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFire,faHeadphones } from '@fortawesome/free-solid-svg-icons'

export default function LowerHeader() {
  return (
    <div className="flex items-center justify-around ">
      <div className="flex items-center gap-8">
        <div className="flex  text-white bg-green-500 p-2 m-2  rounded-md">
          <h4>Browse</h4>
          <select className="bg-green-500  text-white h-[100%] rounded-lg">
            <option>all categories</option>
            <option>all categories</option>
            <option>all categories </option>
          </select>
        </div>
      <div>
      <FontAwesomeIcon className="text-green-600" icon={faFire} />Hot Deals
      </div>
      </div>
      <div className="flex items-center gap-[40px]">
      <div className="">
        <select>
          <option>Shop</option>
          <option>Shop</option>
          <option>Shop</option>
          <option>Shop</option>
        </select>
      </div>
      <div>
        <select>
          <option>Vendors</option>
          <option>Vendors</option>
          <option>Vendors</option>
          <option>Vendors</option>
        </select>
      </div>
      <div>
        <select>
          <option>Mega Menu</option>
          <option>Mega Menu</option>
          <option>Mega Menu</option>
          <option>Mega Menu</option>
        </select>
      </div>
      <div>
        <select>
          <option>Blog</option>
          <option>Blog</option>
          <option>Blog</option>
          <option>Blog</option>
        </select>
      </div>
      <div>
        <select>
          <option>Pages</option>
          <option>Pages</option>
          <option>Pages</option>
          <option>Pages</option>
        </select>
      </div>
      <div>Contact</div>
      </div>
      <div className="flex">
            <FontAwesomeIcon className="w-[35px] h-[35px] text-gray-600" icon={faHeadphones} />
        <div>
            <span className="flex flex-col text-green-500 !font-semibold justify-center w-[100%]">
              1900 - 888</span>
        
            <p className="text-xs">24/7 Support Center</p>
        </div>
      </div>
    </div>
  );
}
