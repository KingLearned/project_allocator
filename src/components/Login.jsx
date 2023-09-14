export const Login = () => {

    const inputStyle = 'p-2 my-2 outline-primary-500 border-2 placeholder-gray-500 w-full rounded-lg'

  return (
    <div className='flex justify-center items-center h-[100vh] bg-gray-50 py-5'>
        <form className='md:w-1/2 w-full mx-3 h-[70%] flex flex-col justify-center items-center bg-navy rounded-lg'>
            <h1 className='text-xl text-white font-bold mb-5'>Welcome Back!</h1>
            <div>
                <input type="text" placeholder="Username" className={inputStyle} />
                <input type="password" placeholder="Password" className={inputStyle} />
            </div>
            <button className='bg-success-400 py-2 my-3 w-1/3 px-5 rounded font-bold text-white hover:bg-success-300'>Login</button>
        </form>
    </div>
  )
}
