import { AcademicCapIcon, ArrowRightOnRectangleIcon, CheckBadgeIcon, ClipboardDocumentCheckIcon, HomeIcon, PresentationChartLineIcon, RectangleStackIcon, UserGroupIcon } from "@heroicons/react/24/solid"

const Dashboard = () => {
  return (
    <div className="h-[100vh] flex">
        <div className="bg-navy text-white font-bold flex flex-col justify-between p-5">
            <h1 className="flex cursor-pointer border-[1px] p-3 rounded-md"><HomeIcon className="w-[25px] mr-2"/> View DashBoard</h1>
            <h1 className="flex cursor-pointer border-[1px] p-3 rounded-md"><UserGroupIcon className="w-[25px] mr-2" /> View Admins</h1>
            <h1 className="flex cursor-pointer border-[1px] p-3 rounded-md"><ClipboardDocumentCheckIcon className="w-[25px] mr-2"/> View Supervisor Records</h1>
            <h1 className="flex cursor-pointer border-[1px] p-3 rounded-md"><AcademicCapIcon className="w-[25px] mr-2" /> View Students</h1>
            <h1 className="flex cursor-pointer border-[1px] p-3 rounded-md"><CheckBadgeIcon className="w-[25px] mr-2"/> Approve Projects Topic</h1>
            <h1 className="flex cursor-pointer border-[1px] p-3 rounded-md"><PresentationChartLineIcon className="w-[25px] mr-2"/> View Project Records</h1>
            <h1 className="flex cursor-pointer border-[1px] p-3 rounded-md"><RectangleStackIcon className="w-[25px] mr-2"/>View All Projects</h1>
            <h1 className="flex cursor-pointer border-[1px] p-3 rounded-md"><ArrowRightOnRectangleIcon className="w-[25px] mr-2"/> Logout</h1>
        </div>
        <div></div>
    </div>
  )

//   UserCircleIcon
}

export default Dashboard