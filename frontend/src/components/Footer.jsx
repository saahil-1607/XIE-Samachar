import React from "react";

function Footer() {
  return (
    <div className="py-3 px-4 shadow bg-gray-600 bottom-0 text-white">
      <div className="font-medium my-3">
        <p>KNOW MORE ABOUT OUR</p>
        <ul className="ml-3">
          <li>
            <a className="hover:text-gray-900" href="#">
              College
            </a>
          </li>
          <li>
            <a className="hover:text-gray-900" href="#">
              Departments
            </a>
          </li>
        </ul>
        <ul className="ml-8 list-disc">
          <li>
            <a className="hover:text-gray-900" href="#">
              Applied Science and Humanities
            </a>
          </li>
          <li>
            <a className="hover:text-gray-900" href="#">
              Computer Engineering
            </a>
          </li>
          <li>
            <a className="hover:text-gray-900" href="#">
              Information Technology
            </a>
          </li>
          <li>
            <a className="hover:text-gray-900" href="#">
              Electronics & Telecommunication
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 text-center text-sm text-gray-400 hover:text-gray-900">
        Copyright &copy; 2025 XIE Samachar. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
