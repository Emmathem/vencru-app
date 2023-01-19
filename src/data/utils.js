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

export const menuItemsStyle = {
    menuItem: `flex textbrandColor justify-between mb-1 border-b border-[#E2E2E2] py-4 cursor-pointer`,
    count: `rounded-[16px] w-[36px] flex justify-center items-center bg-[#F2F4F7]`,
};

export const settingMenu = [
    { id: 0, name: 'My details', key: 'my-details' },
    { id: 1, name: 'Profile', key: 'profile' },
    { id: 2, name: 'Password', key: 'password' },
    { id: 3, name: 'Team', key: 'team' },
    { id: 4, name: 'Plan', key: 'plan' },
    { id: 5, name: 'Billing', key: 'billing' },
    { id: 6, name: 'Notifications', key: 'notifications' },
    { id: 7, name: 'Integration', key: 'integration' },
    { id: 8, name: 'API', key: 'api' },
];

export const planRecord = [
    { id: 0, planName: 'Basic Plan – Dec 2022', amount: '10', date: 'Dec 1, 2022', status: 'Paid' },
];
