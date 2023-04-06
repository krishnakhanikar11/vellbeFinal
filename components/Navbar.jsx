import { Fragment } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const solutions = [
  {
    id: 1,
    name: "Emotional Well-Being",
    description:
      "One-to-one psychotherapy sessions to help you uncover your true potential and heal your traumas.",
    href: "/Service/Emotional-Well-Being",
    icon: ChartBarIcon,
  },
  {
    id: 2,
    name: "Physical Well-Being",
    description:
      "Nutritional consultation with experts committed to bring a medicine free life.",
    href: "/Service/Physical-Well-Being",
    icon: CursorArrowRaysIcon,
  },
  {
    id: 3,
    name: "Relationship Well-Being",
    description:
      "Empowering healthy relationships through personalized coaching .",
    href: "/Service/Relationship-Well-Being",
    icon: Squares2X2Icon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="w-full paddingX  fixed top-0 right-0 left-0 z-50  ">
      <div className="container-fluid mt-5 px-6 bg-white rounded-full">
        <div className="flex items-center justify-between border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Vellbe</span>
              <img className="h-8 w-auto sm:h-10" src="/logo.png" alt="1" />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a href="/Aboutus" className="paragraph3">
              About us
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none "
                    )}
                  >
                    <span className="paragraph3">Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform  sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden  shadow-lg  ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-1 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.id}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="/Expert" className="paragraph3">
              Experts
            </a>
            <a href="/Event" className="paragraph3">
              Events
            </a>
            <a href="/Blog" className="paragraph3">
              Blogs
            </a>

            <a href="/FAQ" className="paragraph3">
              FAQs
            </a>
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="https://wa.me/message/5YDDLL4SIQZYO1"
              className="flex items-center"
            >
              <img
                src="WhatsApp.png"
                className="h-8 md:h-11 sm:h-9"
                alt="Logo"
              />
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfKK5XB5pIs3hFlVjz9_GXgqxFR2ZiYVbHkmskcJvzSTTzjHw/viewform"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              UPCOMING EVENTS
            </a>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/logo.png" alt="vellbe" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              
              <div className="flex flex-col gap-6 mt-4">
                {" "}
                <a href="/Aboutus" className="paragraph3">
                  About us
                </a>
                
              </div>
              {/* list */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="my-4 flex w-full justify-between rounded-lg bg-white  py-2 text-left text-sm font-medium text-black  focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-75">
                      <span className="paragraph3">Services</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-secondary`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="p-4 text-sm text-gray-500">
                      {solutions.map((solution, index) => (
                        <a
                          href={solution.href}
                          key={index}
                          className="paragraph3 mr-2"
                        >
                          <p>{solution.name}</p>
                        </a>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/* ends here */}

              <div className="flex flex-col gap-6">
                {" "}
                <a href="/Expert" className="paragraph3">
                  Experts
                </a>
                <a href="/Blog" className="paragraph3">
                  Blogs
                </a>
                <a href="/Event" className="paragraph3">
                  Events
                </a>
                <a href="/FAQ" className="paragraph3">
                  FAQs
                </a>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfKK5XB5pIs3hFlVjz9_GXgqxFR2ZiYVbHkmskcJvzSTTzjHw/viewform"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary"
                >
                  Upcoming events
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Want to connect with us?{" "}
                  <a
                    href="https://wa.me/message/5YDDLL4SIQZYO1"
                    className="text-secondary hover:text-primary"
                  >
                    Whatsapp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
