import React from "react";
export default function TopHeader() {
  return (
    <div className="flex justify-between items-center w-[100vw] border-b-2 border-gray-200 py-1 px-[12px]">
      <div className="flex list-none text-[12px] text-gray-500 [&>li]:px-[8px]">
        <li>About Us</li>
        <li>My Account</li>
        <li>Wishlist</li>
        <li>Order Tracking</li>
      </div>
      <div className="text-gray-500 text-[12px]">
        Get great devices for 50% off.
        <span className="text-green-500">View Details</span>
      </div>
      <div className="text-gray-500 text-[12px] [&>select]:px-[8px]">
        Need help?Call Us:
        <span className="text-green-500">+1-800-234-5678</span>
        <select onfocus:border-none>
          <option>English</option>
          <option>France</option>
          <option>Germany</option>
          <option>Italy</option>
        </select>
        <select>
          <option>USD</option>
          <option>Ruble</option>
          <option>Pound</option>
          <option>Penny</option>
        </select>
      </div>
      <div>
        <div>Hot Deals</div>
      </div>
    </div>
  );
}
