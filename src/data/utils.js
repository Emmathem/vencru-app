import HomeIcon from '../assets/img/icons/homeIcon.svg';
import DashIcon from '../assets/img/icons/dashIcon.svg';
import ProjectIcon from '../assets/img/icons/projectIcon.svg';
import TaskIcon from '../assets/img/icons/taskIcon.svg';
import ReportIcon from '../assets/img/icons/reportIcon.svg';
import UserIcon from '../assets/img/icons/usersIcon.svg';
import SupportIcon from '../assets/img/icons/supportIcon.svg';
import SettingIcon from '../assets/img/icons/settingsIcon.svg';

export const navMenu = {
    main: [
        { id: 1, name: 'Home', route: '/dashboard/', icon: HomeIcon, hasCount: false },
        { id: 2, name: 'Dashboard', route: '/dashboard/', icon: DashIcon, hasCount: true },
        { id: 3, name: 'Projects', route: '/dashboard/order', icon: ProjectIcon, hasCount: false },
        { id: 4, name: 'Tasks ', route: '/dashboard/result-inbox', icon: TaskIcon, hasCount: false },
        { id: 5, name: 'Reporting', route: '/dashboard/my-patients', icon: ReportIcon, hasCount: false },
        { id: 6, name: 'Users', route: '/dashboard/users', icon: UserIcon },
    ],
    others: [
        { id: 1, name: 'Support', route: '/dashboard/', icon: SupportIcon, hasCount: false },
        { id: 2, name: 'Settings', route: '/dashboard/', icon: SettingIcon, hasCount: false },
    ],
};

export const menuItemsStyle = `flex justify-between gap-3 py-2 transition text-md px-3 mb-1 rounded-md items-center menuItem_text cursor-pointer hover:bg-gray-100 hover:text-[#fff]`;
