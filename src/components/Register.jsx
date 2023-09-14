import {UserCircleIcon} from '@heroicons/react/24/solid'
export const Register = () => {

    const inputStyle = 'p-2 my-2 outline-primary-500 border-2 placeholder-gray-500 w-full rounded-lg'

  return (
    <div className='flex justify-center items-center md:h-[90vh] bg-gray-50 my-5'>
        <form className='md:w-[70%] md:flex mx-3 md:h-[70%]'>
            <div className='bg-navy flex flex-col justify-center items-center p-5 rounded-md'>
                <div className='md:flex md:gap-5'>
                    <div>
                        <input type="text" placeholder="Full Name" className={inputStyle} />
                        <input type="text" placeholder="Username" className={inputStyle} />
                        <input type="password" placeholder="Password" className={inputStyle} />
                        <input type="password" placeholder="Confirm Password" className={inputStyle} />
                    </div>
                    <div>
                        <input type="text" placeholder="Select College" className={inputStyle} />
                        <input type="text" placeholder="Select Department" className={inputStyle} />
                        <input type="email" placeholder="Email" className={inputStyle} />
                        <input type="text" placeholder="Select User" className={inputStyle} />
                    </div>
                </div>
                <button className='bg-success-400 py-2 px-5 rounded font-bold text-white hover:bg-success-300'>Sign Up</button>
                <p className='text-white text-center my-2'>Make sure that you remember your username and password!</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <UserCircleIcon className='w-[250px]'/>
                <input type='file' name='Image' id='uploadImage' hidden />
                <label htmlFor='uploadImage' className='font-bold bg-navy p-2 rounded-md text-white cursor-pointer'>Browse Pictures</label>

            </div>
        </form>
    </div>
  )
}
