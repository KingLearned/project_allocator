import { AcademicCapIcon, ArrowRightOnRectangleIcon, CheckBadgeIcon, ClipboardDocumentCheckIcon, HomeIcon, PresentationChartLineIcon, RectangleStackIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import MainDashBoard from "../DashBoardComponents/MainDashBoard"

const Dashboard = () => {
  const sideStyle = 'flex cursor-pointer border-[1px] p-3 rounded-md hover:bg-primary-300'

  const [activeNav, setActiveNav] = useState('View DashBoard')

  return (
    <div className="h-[100vh] flex">
        <div className="bg-navy text-white font-bold flex flex-col justify-between p-5 min-w-[300px]">
            <h1 className={`${sideStyle} ${activeNav == 'View DashBoard' ? 'bg-primary-300' : ''}`} onClick={() => {setActiveNav('View DashBoard')}}><HomeIcon className="w-[25px] mr-2"/> View DashBoard</h1>
            <h1 className={`${sideStyle} ${activeNav == 'View Admins' ? 'bg-primary-300' : ''}`} onClick={() => {setActiveNav('View Admins')}}><UserGroupIcon className="w-[25px] mr-2" /> View Admins</h1>
            <h1 className={`${sideStyle} ${activeNav == 'View Supervisor Records' ? 'bg-primary-300' : ''}`} onClick={() => {setActiveNav('View Supervisor Records')}}><ClipboardDocumentCheckIcon className="w-[25px] mr-2"/> View Supervisor Records</h1>
            <h1 className={`${sideStyle} ${activeNav == 'View Students' ? 'bg-primary-300' : ''}`} onClick={() => {setActiveNav('View Students')}}><AcademicCapIcon className="w-[25px] mr-2" /> View Students</h1>
            <h1 className={`${sideStyle} ${activeNav == 'Approve Projects Topic' ? 'bg-primary-300' : ''}`} onClick={() => {setActiveNav('Approve Projects Topic')}}><CheckBadgeIcon className="w-[25px] mr-2"/> Approve Projects Topic</h1>
            <h1 className={`${sideStyle} ${activeNav == 'View Project Records' ? 'bg-primary-300' : ''}`} onClick={() => {setActiveNav('View Project Records')}}><PresentationChartLineIcon className="w-[25px] mr-2"/> View Project Records</h1>
            <h1 className={`${sideStyle} ${activeNav == 'View All Projects' ? 'bg-primary-300' : ''}`} onClick={() => {setActiveNav('View All Projects')}}><RectangleStackIcon className="w-[25px] mr-2"/>View All Projects</h1>
            <h1 className={`${sideStyle}`}><ArrowRightOnRectangleIcon className="w-[25px] mr-2"/> Logout</h1>
        </div>
        <div className="w-full p-5">
          {activeNav == 'View DashBoard' && <MainDashBoard/>}
        </div>
    </div>
  )
}

export default Dashboard