import { Menu, Transition } from '@headlessui/react';
import { AiFillGithub } from 'react-icons/ai';
import { SiZenn } from 'react-icons/si';
import { IoMdHome } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { PiCodeDuotone } from 'react-icons/pi';

export default function DropDownMenu() {
  return (
    <Menu as="div" className="md:hidden">
      <Menu.Button>
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
          className="flex flex-col gap-2 absolute right-0 w-32 mt-0 py-2 px-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 bg-[#F7F7F7]"
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
                className={`py-1 pl-1.5 ${
                  active ? 'text-white bg-blue-200 rounded-md' : ''
                }`}
                href="/products"
              >
                <PiCodeDuotone color="#3c456c" size="1.2em" />
                Products
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
