
import LeftNav from '@/lib/LeftNavBar';
import { auth, signIn, signOut } from './auth';
import Link from 'next/link';
import { FaBug } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';





const NavBar = async () => {
    const session = await auth()

    return (
        <div className='grid grid-cols-12 border-b py-4 mb-4 space-x-4   '>
            <div className='grid col-span-1 content-center'><Link className='mx-6 flex items-center' href={'/'}><FaBug /></Link></div>
            <div className='grid col-span-8 '>
                <div className='flex items-center'>
                    <div className='mx-4'>
                        <Link href={'/'} className='hover:font-bold'> Dashboard</Link>
                    </div>
                    <div>
                        <Link href={'/issues'} className='hover:font-bold'>Issues</Link>
                    </div>
                </div>
            </div>
            <div className=' grid justify-items-end'>
                {session && session.user ?
                    <div className='flex space-x-3'>
                        <div className='text-nowrap flex items-center md:visible invisible'>{session.user.name}</div>
                        <div className='flex justify-end'><form action={async () => {
                            "use server"
                            await signOut()
                        }}>
                            <Button className='h-[35px]'>SignOut</Button>
                        </form></div>
                    </div>
                    :
                    <div className=''>
                        <form action={async () => {
                            "use server"
                            await signIn()
                        }}>
                            <Button className='h-[35px]'>SignIn</Button>
                        </form>
                    </div>}
            </div>
        </div>
    )
}

export default NavBar