import { Menu, Transition } from '@headlessui/react';
import { AiFillGithub } from 'react-icons/Ai';
import { SiZenn } from 'react-icons/Si';
import { IoMdHome } from 'react-icons/Io';
import { FiMenu } from 'react-icons/Fi';

export default function DropDownMenu() {
  return (
    <Menu as="div" className="relative md:hidden">
      <Menu.Button className="">
        <FiMenu size="2em" />
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="flex flex-col gap-2 absolute right-0 w-32 mt-6 py-2 px-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2"
        >
          <Menu.Item as="li">
            {({ active }) => (
              <a
                className={`py-1 pl-1.5 ${
                  active ? 'text-white bg-blue-200 rounded-md' : ''
                }`}
                href="/"
              >
                <IoMdHome color="#3c456c" size="1.2em" />
                Home
              </a>
            )}
          </Menu.Item>
          <Menu.Item as="li">
            {({ active }) => (
              <a
                className={`p-0.5 pl-1 ${
                  active ? 'bg-blue-200 rounded-md' : ''
                }`}
                href="/blog"
              >
                <SiZenn color="#3c456c" size="1.2em" />
                Blog
              </a>
            )}
          </Menu.Item>
          <Menu.Item as="li">
            {({ active }) => (
              <a
                className={`p-0.5 pl-1 ${
                  active ? 'bg-blue-200 rounded-md' : ''
                }`}
                href="https://github.com/H-ymt/my-portfolio"
                target="blank"
              >
                <AiFillGithub color="#3c456c" size="1.2em" />
                Source
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
