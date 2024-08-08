import React from "react";
import user from './../img/user.png'

const Header = ({ searchQuery, onSearchChange }) => {


  return (

    <div className="--pad header">
      <div className="--flex-between">

        <nav class="bg-white border-gray-200 light:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

            <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">


              <form class="max-w-lg mx-auto">
                <div >


                  <div class="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-10 border-s-2 border border-gray-100 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-100 light:border-s-gray-100 light:border-gray-100 light:placeholder-gray-100 light:text-white light:focus:border-blue-500"
                      placeholder="Search by anything"
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      required
                    />
                    <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                      <span class="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>


              <svg class="w-6 h-6 text-gray-800 dark:text-gray-400"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd" />
              </svg>

              <svg class="w-6 h-6 text-gray-800 dark:text-gray-400"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
              </svg>

              {/* <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 light:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom"> */}
              <img class="w-8 h-8 rounded-full" src={user} alt="user photo" />
              {/* </button> */}

            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">

            </div>
          </div>
        </nav>


      </div>
      <hr />
    </div>
  );
};

export default Header;