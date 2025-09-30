import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import Logo from '../images/kc-logo2.png';

//navbar imports
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [


  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Pricing', href: '/pricing' },


]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
// end navbar added imports

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (

    <header className="absolute w-full z-30">
      <div>
        <div>

          {/* Desktop navigation */}
          <Disclosure as="nav" className="bg-gray-800 fixed" style={{ width: '100%' }}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img className="h-10 w-auto hidden md:block" src={Logo} />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4"  style={{justifyContent: 'right', alignItems: 'center', whiteSpace: 'nowrap'}}>
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}

                          aria-current={item.current ? 'page' : undefined}

                          className={({ isActive }) => {
                            console.log(item.href + ' ' + isActive)
                            return 'rounded-md px-3 py-2 text-sm font-medium' +
                              (!isActive ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : ' text-white bg-gray-900')
                          }}

                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  <div className="" style={{ display: 'flex', alignItems: 'right', justifyContent: 'right', width: '100%', alignItems: 'center'}}>
                    <NavLink to="/servicetype">
                      <button
                        class="sm:w-fit w-full px-3.5 py-2 bg-blue-600 hover:bg-white transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span class="px-1.5 text-white hover:text-blue-600 text-sm font-medium leading-6">+ Get Quote</span>
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>

        </div>
      </div>
    </header>
  );
}

export default Header;
