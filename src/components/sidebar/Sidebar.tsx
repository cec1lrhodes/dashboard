import styles from "../../dashboard.module.css";
import iconSidebar from "../../screenshots/iconSidebar.png";
import activity from "../../screenshots/activity.png";
import library from "../../screenshots/library.png";
import security from "../../screenshots/security.png";
import schedules from "../../screenshots/schedules.png";
import payouts from "../../screenshots/payouts.png";
import settings from "../../screenshots/settings.png";
import logout from "../../screenshots/logout.png";
import vector from "../../screenshots/vector.png";

type SidebarButtonItem = {
  id: string;
  label: string;
  icon: string;
  alt: string;
  iconClassName: string;
};

const sidebarButtons: SidebarButtonItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: vector,
    alt: "vector",
    iconClassName: styles.dashboardIcon + " w-4 h-4",
  },
  {
    id: "activity",
    label: "Activity",
    icon: activity,
    alt: "activity",
    iconClassName: "w-5 h-[13px] group-hover:brightness-0 group-hover:invert",
  },
  {
    id: "library",
    label: "Library",
    icon: library,
    alt: "library",
    iconClassName: "w-4 h-[21px] group-hover:brightness-0 group-hover:invert",
  },
  {
    id: "security",
    label: "Security",
    icon: security,
    alt: "security",
    iconClassName: "w-4 h-[21px] group-hover:brightness-0 group-hover:invert",
  },
  {
    id: "schedules",
    label: "Schedules",
    icon: schedules,
    alt: "schedules",
    iconClassName: "w-4 h-[21px] group-hover:brightness-0 group-hover:invert",
  },
  {
    id: "payouts",
    label: "Payouts",
    icon: payouts,
    alt: "payouts",
    iconClassName: "w-4 h-[19px] group-hover:brightness-0 group-hover:invert",
  },
  {
    id: "settings",
    label: "Settings",
    icon: settings,
    alt: "settings",
    iconClassName: "w-5 h-5 group-hover:brightness-0 group-hover:invert",
  },
];

const logoutButton: SidebarButtonItem = {
  id: "logout",
  label: "Log Out",
  icon: logout,
  alt: "logout",
  iconClassName: "w-5 h-4 group-hover:brightness-0 group-hover:invert",
};

function SidebarButton({ item }: { item: SidebarButtonItem }) {
  return (
    <button className={styles.sideBarButton + " group"}>
      <img src={item.icon} alt={item.alt} className={item.iconClassName} />
      {item.label}
    </button>
  );
}

export function Sidebar() {
  return (
    <div className={styles.sidebar + " flex flex-col text-gray-600"}>
      {/* Верхня частина */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <img src={iconSidebar} alt="logo" className="w-11 h-11" />
          <div className="flex flex-col">
            <p className="font-['Poppins'] text-[26px] font-bold text-[#4318FF] leading-none">
              VENUS
            </p>
            <p className="font-['Poppins'] text-[12px] font-medium text-[#4318FF] leading-none">
              DASHBOARD
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-[#F4F7FE] my-2"></div>

        {/* SIDEBAR BUTTONS */}
        {sidebarButtons.map((item) => (
          <SidebarButton key={item.id} item={item} />
        ))}
      </div>

      {/* Log Out  */}
      <div className="mb-[58px]">
        <SidebarButton item={logoutButton} />
      </div>
    </div>
  );
}
