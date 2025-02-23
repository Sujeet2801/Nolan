import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'About Us', href: '#', current: false },
    { name: 'Pricing', href: '#', current: false },
    { name: 'Features', href: '#', current: false },
    { name: 'New Project', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {
    return (
        <Disclosure as="nav" className="bg-gray-800 fixed z-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Left side: Nolan Icon */}
                    <div className="flex items-center">
                        <svg width="64" height="33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#headerLogo_svg__clip0_3086_248)" fill="#fff" fillOpacity="0.96">
                                <path d="M9.998 31.964l-7.377-7.339v7.34H0V19.386h.825l7.247 7.032v-7.032h2.62v12.577h-.694zM19.733 19.154c-3.744 0-6.796 2.924-6.796 6.512 0 3.588 3.052 6.513 6.796 6.513s6.796-2.925 6.796-6.513-3.052-6.512-6.796-6.512zm0 2.582c2.266 0 4.101 1.759 4.101 3.93 0 2.172-1.835 3.93-4.1 3.93-2.267 0-4.102-1.758-4.102-3.93 0-2.171 1.835-3.93 4.101-3.93zM31.4 19.385h-2.622v12.56h7.508v-2.494H31.4V19.385zM44.467 19.385l-6.685 12.577h2.939l4.062-7.643 3.744 7.643h2.901l-6.197-12.577h-.766.002zM63.303 31.964l-7.377-7.339v7.34h-2.62V19.386h.822l7.247 7.032v-7.032h2.62v12.577h-.692zM9.069 4.065H9.06c-1.304 0-2.368 1.014-2.373 2.265l-.187 6.4v.042c0 1.256 1.062 2.274 2.373 2.274.474 0 1.154-.236 1.517-.526 2.835-2.259 5.155-4.74 7.306-6.523 2.15-1.781 3.944-2.762 5.877-2.762.747 0 1.01.132 1.298.338.285.207.614.599.975 1.237.723 1.277 1.384 3.436 3.183 5.364 1.798 1.925 4.904 3.197 9.14 2.785 4.234-.414 9.818-2.22 17.983-6.142.74-.342 1.341-1.26 1.341-2.049 0-1.253-1.062-2.273-2.373-2.273-.32 0-.81.114-1.094.256-7.9 3.795-13.116 5.368-16.34 5.683-3.222.315-4.227-.334-5.122-1.292-.895-.957-1.5-2.647-2.547-4.497-.523-.924-1.204-1.917-2.29-2.702C26.64 1.157 25.169.687 23.573.687c-3.596 0-6.491 1.807-8.98 3.872-1.114.922-2.18 1.92-3.245 2.915l.085-1.06V6.34c0-1.252-1.06-2.27-2.366-2.274l.002-.002z"></path>
                            </g>
                            <defs>
                                <clipPath id="headerLogo_svg__clip0_3086_248">
                                    <path fill="#fff" transform="translate(0 .688)" d="M0 0h64v31.5H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    {/* Right side: Navigation and Login Button */}
                    <div className="flex flex-1 items-center justify-end">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-[16px] font-bold',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <button className='bg-white text-red-950 w-20 rounded-full font-bold px-3 py-1 ml-4'>
                            Log in
                        </button>
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
    );
}
