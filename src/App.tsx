import styles from "./dashboard.module.css";
import iconSidebar from "./screenshots/iconSidebar.png";
import activity from "./screenshots/activity.png";
import library from "./screenshots/library.png";
import security from "./screenshots/security.png";
import schedules from "./screenshots/schedules.png";
import payouts from "./screenshots/payouts.png";
import settings from "./screenshots/settings.png";
import logout from "./screenshots/logout.png";
import vector from "./screenshots/vector.png";

function App() {
  return (
    <div className={styles.page}>
      {/* SIDEBAR */}
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
          <button className="bg-[#4318FF] text-white w-[214px] h-[45px] rounded-lg flex items-center gap-[14px] px-4">
            <img src={vector} alt="vector" className="w-4 h-4" />
            <span>Dashboard</span>
          </button>

          <button className={styles.sideBarButton + " group"}>
            <img
              src={activity}
              alt="activity"
              className="w-5 h-[13px] group-hover:brightness-0 group-hover:invert"
            />
            Activity
          </button>
          <button className={styles.sideBarButton + " group"}>
            <img
              src={library}
              alt="library"
              className="w-4 h-[21px] group-hover:brightness-0 group-hover:invert"
            />
            Library
          </button>
          <button className={styles.sideBarButton + " group"}>
            <img
              src={security}
              alt="security"
              className="w-4 h-[21px] group-hover:brightness-0 group-hover:invert"
            />
            Security
          </button>
          <button className={styles.sideBarButton + " group"}>
            <img
              src={schedules}
              alt="schedules"
              className="w-4 h-[21px] group-hover:brightness-0 group-hover:invert"
            />
            Schedules
          </button>
          <button className={styles.sideBarButton + " group"}>
            <img
              src={payouts}
              alt="payouts"
              className="w-4 h-[19px] group-hover:brightness-0 group-hover:invert"
            />
            Payouts
          </button>
          <button className={styles.sideBarButton + " group"}>
            <img
              src={settings}
              alt="settings"
              className="w-5 h-5 group-hover:brightness-0 group-hover:invert"
            />
            Settings
          </button>
        </div>

        {/* Log Out  */}
        <div className="mb-[58px]">
          <button className={styles.sideBarButton + " group"}>
            <img
              src={logout}
              alt="logout"
              className="w-5 h-4 group-hover:brightness-0 group-hover:invert"
            />
            Log Out
          </button>
        </div>
      </div>

      <main className="ml-[290px] flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between h-[146px] px-6">
          <div>
            <p className="text-[#707EAE] font-dm-sans text-[14px] leading-[24px] tracking-[-0.02em]">
              Hi Andrei,
            </p>
            <p className="font-dm-sans text-[34px] font-bold text-[#2B3674] tracking-[-0.02em] leading-[42px]">
              Welcome to Venus!
            </p>
          </div>

          <input className={styles.input} placeholder="Search..." />
        </header>

        {/* Page content */}
        <div className="flex gap-5 px-[31px] py-4">
          <button className={styles.button}>1</button>
          <button className={styles.button}>2</button>
          <button className={styles.button}>3</button>
          <button className={styles.button}>4</button>
        </div>

        <section className="flex gap-5 px-[31px] ">
          <div className="bg-white h-[345px] w-[720px]"></div>
          <div className={styles.smallCard}></div>
        </section>

        <section className="flex gap-5 px-[31px] mt-5 ">
          <div className={styles.smallCard}></div>
          <div className={styles.smallCard}></div>
          <div className={styles.smallCard}></div>
        </section>
      </main>
    </div>
  );
}

export default App;
