import React from "react";
import "./Nav.css";
// import { useMsal, useIsAuthenticated, useAccount } from "@azure/msal-react";
// import { loginRequest } from "../../authConfig";
function Nav() {
  // const { instance, accounts } = useMsal();
  // const [isOpen, setIsOpen] = useState(false);
  // const isAuthenticated = useIsAuthenticated();
  // const account = useAccount(accounts[0] || {});
  // const handleLogin = (loginType) => {
  //   if (loginType === "redirect") {
  //     instance.loginRedirect(loginRequest).catch((e) => {
  //       console.log(e);
  //     });
  //   }
  // };

  // const handleLogout = (logoutType) => {
  //   if (logoutType === "redirect") {
  //     instance.logoutRedirect({
  //       postLogoutRedirectUri: "/",
  //     });
  //   }
  // };

  return (
    <div>
      <nav className="bg-white p-2 border border-gray-100 shadow fixed w-full z-50 ">
        <div className="container  mx-auto px-2">
          <div className="flex items-center justify-between container max-w-7xl h-12">
            <div className=" flex items-center">
              <a
                className="text-2xl font-semibold text-gray-800 font-heading"
                href="/"
              >
                SHIFT F5
              </a>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div className="relative inline-block text-left">
                    <div className="flex gap-2">
                      <a
                        class="block mt-4 text-lg text-gray-900 lg:inline-block lg:mt-0 hover:text-gray-600"
                        href="/termsandconditions"
                      >
                        Terms and Conditions
                      </a>

                      {/* {!isAuthenticated && (
                        <button
                          className=" flex justify-center items-center text-xl"
                          onClick={() => handleLogin("redirect")}
                        >
                          login
                        </button>
                      )}
                      {isAuthenticated && (
                        <button
                          className="  flex items-center justify-center w-full rounded-md  px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          <span className="px-2">
                            {account && account.name}
                          </span>
                          <svg
                            width="20"
                            fill="currentColor"
                            height="20"
                            className="text-gray-800"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                          </svg>
                        </button>
                      )} */}
                    </div>
                    {/* {isOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1 "
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <a
                            href="/"
                            className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Settings</span>
                            </span>
                          </a>
                          <a
                            href="/"
                            className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Account</span>
                            </span>
                          </a>
                          <button
                            className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => handleLogout("redirect")}
                          >
                            <span className="flex flex-col">
                              <span>Logout</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
