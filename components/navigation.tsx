import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, CloseIcon } from './icons'

type NavigationProps = {
  href: string
  children: React.ReactNode
}

const navigation = [
  { name: 'Aktuelles', href: '/#aktuelles' },
  { name: 'Team', href: '/#team' },
  { name: 'Kurse', href: '/#kurse' },
  { name: 'Seminare', href: '/#seminare'},
  { name: 'Vorträge', href: '/#vortrag'},
  { name: 'Coaching', href: '/#coaching' },
  { name: 'Partner', href: '/#partner' },
  { name: 'Kontakt', href: '/#kontakt' },
]

const NavItem = ({ href, children }: NavigationProps) => {
  const isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        scroll={false}
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-red-700'
            : 'hover:text-red-900 '
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-red-500/40 to-red-500/0" />
        )}
      </Link>
    </li>
  )
}

const MobileNavItem = ({ href, children }: NavigationProps) => {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2" scroll={false}>
        {children}
      </Popover.Button>
    </li>
  )
}

const MobileNavigation = () => {
  return (
    <div className='flex justify-between items-center'>
      <Image src="/total_logo_color.svg" alt="Logo" width={150} height={150} className="h-20 w-auto md:hidden" priority/>
      <Popover className="pointer-events-auto md:hidden">
        <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur ">
          Menu
          <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" />
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5"
            >
              <div className="flex flex-row-reverse items-center justify-between">
                <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                  <CloseIcon className="h-6 w-6 text-zinc-500 " />
                </Popover.Button>
                <h2 className="text-sm font-medium text-zinc-600 ">
                  Navigation
                </h2>
              </div>
              <nav className="mt-6">
                <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                  {
                    navigation.map(item => <MobileNavItem key={item.name} href={item.href}>{item.name}</MobileNavItem>)
                  }
                </ul>
              </nav>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    </div>
  )
}


const DesktopNavigation = () => {
  const router = useRouter()
  return (
    <div className="pointer-events-auto hidden md:block md:space-y-4">
      <div className="flex justify-center items-center">
        <Image onClick={() => router.push('/')} src="/total_logo_color.svg" alt="Logo" width={150} height={150} className="h-24 w-auto cursor-pointer" priority/>
      </div>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur p-3">
        {
          navigation.map(item => <NavItem key={item.name} href={item.href}>{item.name}</NavItem>)
        }
      </ul>
    </div>
  )
}

export const Navigation = () => {
    return (
      <header>
        <nav className="mx-auto md:flex max-w-7xl md:items-center md:justify-center p-6 lg:px-8" aria-label="Global">
            <MobileNavigation />
            <DesktopNavigation />
        </nav>
      </header>
    )
}
