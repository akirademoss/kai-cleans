import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import Logo from '../images/kc-logo2.png';

//navbar imports
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [


  { name: 'Home', href: '/' },
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

          {/* Site branding */}{/*
          <div className="shrink-0 mr-4">*/}
          {/* Logo */}{/*
            <Link to="/" className="block" aria-label="Cruip">
              <svg className="w-0 h-16 fill-current text-blue-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

              </svg>
            </Link>
            <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto" src={Logo} width="100" height="120" alt="Hero" />

            </div>
          </div>*/}

          {/* Desktop navigation */}
          <Disclosure as="nav" className="bg-gray-800 fixed" style={{width: '100%'}}>
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
                    {/* <img
                      alt="Your Company"
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                      className="h-8 w-auto"
                    />*/}
                    <img className="h-10 w-auto" src={Logo} />
                  </div>
                  {/* 
                         */}
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
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
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/*<button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>*/}

                  {/* Profile dropdown */}
                  {/* 
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="h-8 w-8 rounded-full"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                          Your Profile
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                          Settings
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                          Sign out
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>*/}
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

          {/* Desktop navigation */}


          {/* <nav className="hidden md:flex md:grow">*/}

          {/* Desktop sign in links */}{/* 
            <ul className="flex grow justify-end flex-wrap items-center">
              <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">

              </p>
              <ul className="text-gray-400">
                <li className="flex items-center mb-2">
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
                    email: info@kaicleans.com
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
                    call/text: 515-686-7566
                  </p>
                </li>
              </ul>
              <br></br>
            </ul>

          </nav>*/}

          {/* Mobile menu */}
          {/*<div className="md:hidden">*/}

          {/* Hamburger button */}
          {/*
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>*/}

          {/*Mobile navigation */}
          {/*
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}>
              <ul className="bg-gray-800 px-4 py-2">
                <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">

                </p>
                <ul className="text-gray-400">
                  <li className="flex items-center mb-2">
                    <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
                      email: info@kaicleans.com
                    </p>
                  </li>
                  <li className="flex items-center">
                    <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
                      call/text: 515-686-7566
                    </p>
                  </li>
                  <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200"></p>
                </ul>
              </ul>
            </nav>

          </div>*/}

        </div>
      </div>
    </header>
  );
}

export default Header;
