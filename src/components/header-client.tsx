// 'use client'

// import Link from 'next/link'
// import React from 'react'
// import Image from 'next/image'
// import { shadow } from '@/styles/utils'
// import { Button } from '@/components/ui/button'
// import DarkModeToggle from '@/components/DarkModeToggle'
// import LogOutButton from './LogOutButton'
// import { User } from '@/auth/types'

// interface HeaderClientProps {
//   user: User | null
// }

// function HeaderClient({ user }: HeaderClientProps) {
//   return (
//     <header className='relative flex items-center justify-between bg-popover/80 px-3 small:px-8 py-4' 
//       style={{
//         boxShadow: shadow
//       }}>
//       <Link className='flex items-end gap-2' href="/">
//         <Image src="/goatius.png" height={60} width={60} alt="logo" className='rounded-full' priority/>
//         <h1 className='flex flex-col pb-1 text-2xl font-semibold leading-6'>
//           GOAT <span>Notes</span> 
//         </h1>
//       </Link>

//       <div className='flex items-center gap-4'>
//         {user ? (
//           <LogOutButton />
//         ) : (
//           <>
//             <Button asChild>
//               <Link href="/sign-up" className="hidden sm:block">
//                 Sign Up 
//               </Link>
//             </Button>

//             <Button asChild variant="outline">
//               <Link href="/login">
//                 Login
//               </Link>
//             </Button>
//           </> 
//         )}
//         <DarkModeToggle />
//       </div>
//     </header>
//   )
// }

// export default HeaderClient 