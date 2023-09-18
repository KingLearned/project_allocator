import { BuildingLibraryIcon, BuildingOffice2Icon, BuildingOfficeIcon, ClockIcon, EnvelopeIcon, UserCircleIcon, UserIcon, UserPlusIcon } from '@heroicons/react/24/solid'

const MainDashBoard = () => {
  return (
    <div>
        <div className="flex justify-between">
            <div className="shadow-md mx-3 p-2 rounded-md">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-navy">No Of Approved Projects</h1>
                <div className="h-[70px] self-end w-[70px] p-2 rounded-full bg-navy  flex flex-col justify-center items-center">
                  <div className="h-[50px] w-[50px] rounded-full bg-white flex flex-col justify-center items-center text-1xl font-bold">100%</div>
                </div>
              </div>
              <div className="h-[20px] bg-navy"></div>
            </div>

            <div className="shadow-md mx-3 p-2 rounded-md">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-success-400">No Of Completed Projects</h1>
                <div className="h-[70px] self-end w-[70px] p-2 rounded-full bg-success-400  flex flex-col justify-center items-center">
                  <div className="h-[50px] w-[50px] rounded-full bg-white flex flex-col justify-center items-center text-1xl font-bold">100%</div>
                </div>
              </div>
              <div className="h-[20px] bg-success-400"></div>
            </div>

            <div className="shadow-md mx-3 p-2 rounded-md">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-danger">Total No Of Targets</h1>
                <div className="h-[70px] self-end w-[70px] p-2 rounded-full bg-danger  flex flex-col justify-center items-center">
                  <div className="h-[50px] w-[50px] rounded-full bg-white flex flex-col justify-center items-center text-1xl font-bold">100%</div>
                </div>
              </div>
              <div className="h-[20px] bg-danger"></div>
            </div>
        </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='bg-navy w-1/2 rounded-xl flex flex-col justify-center items-center py-3 mt-10'>
                <UserCircleIcon className="w-[50px] mr-2 rounded-full bg-white text-navy" />
                <h1 className='text-2xl text-white font-bold text-center'>Logged User Details</h1>
            </div>
            <div className='w-[85%] mt-5 flex justify-between'>
              <div>
                <h1 className='text-navy my-3 font-bold text-[18px] flex items-center'><EnvelopeIcon className='w-[30px]'/> Gino@gmail.com</h1>
                <h1 className='text-navy my-3 font-bold text-[18px] flex items-center'><UserIcon className='w-[30px]'/> Benito</h1>
                <h1 className='text-navy my-3 font-bold text-[18px] flex items-center'><UserPlusIcon className='w-[30px]'/> Created on 2018-09-12 16:35:20</h1>
                <h1 className='text-navy my-3 font-bold text-[18px] flex items-center'><ClockIcon className='w-[30px]'/> LoggedIn @ 10:30pm</h1>
              </div>
              <div>
                <h1 className='text-navy my-3 font-bold text-[18px] flex items-center'><BuildingLibraryIcon className='w-[30px]'/> Micheal Okpara University of Agriculture Umudike</h1>
                <h1 className='text-navy my-3 font-bold text-[18px] flex items-center'><BuildingOffice2Icon className='w-[30px]'/> College of Engineer & Engineering Technology (CEET)</h1>
                <h1 className='text-navy my-3 font-bold text-[18px] flex items-center'><BuildingOfficeIcon className='w-[30px]'/> Mechanical</h1>
              </div>
            </div>
          </div>
    </div>
  )
}

export default MainDashBoard