// import { Hash, Bookmark, Users, Newspaper } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const navigation = [
//   { name: 'Feed', href: '/', icon: Newspaper },
//   //   { name: 'Trending', href: '/trending', icon: Trending },
//   { name: 'Communities', href: '/communities', icon: Users },
//   { name: 'Tags', href: '/tags', icon: Hash },
//   { name: 'Bookmarks', href: '/bookmarks', icon: Bookmark },
// ]

// export default function Sidebar() {
//   return (
//     <div className='hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 pt-16'>
//       <div className='flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white'>
//         <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
//           <nav className='mt-5 flex-1 px-2 space-y-1'>
//             {navigation.map(item => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className='group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//               >
//                 <item.icon
//                   className='mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500'
//                   aria-hidden='true'
//                 />
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </div>
//   )
// }
