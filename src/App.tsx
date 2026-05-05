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
import searchicon from "./screenshots/searchicon.png";
import group from "./screenshots/group.png";
import staravatar from "./screenshots/staravatar.png";
import arrowright from "./screenshots/arrowright.png";

import { BarChart, Bar, ResponsiveContainer, LineChart, Line } from "recharts";

const TOTAL = 45;

const data = [
  { value: 20, max: TOTAL - 20 },
  { value: 30, max: TOTAL - 30 },
  { value: 25, max: TOTAL - 25 },
  { value: 35, max: TOTAL - 35 },
  { value: 15, max: TOTAL - 15 },
];

const lineData = [{ value: 10 }, { value: 35 }, { value: 30 }, { value: 50 }];

const earningsIconData = [{ value: 17 }, { value: 23 }, { value: 10 }];
const earningsActivityData = [
  { value: 3 },
  { value: 9 },
  { value: 4 },
  { value: 7 },
  { value: 9 },
  { value: 10 },
];

const events = [
  { title: "Meet w/ Simmmple", time: "01:00 PM - 02:00 PM" },
  { title: "Fitness Training", time: "02:00 PM - 03:00 PM" },
  { title: "Reading Time", time: "03:00 PM - 04:00 PM" },
];

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

          <div className={styles.input + " flex items-center gap-3"}>
            <img
              src={searchicon}
              alt="searchicon"
              className="w-[11px] h-[11px]"
            />
            <input
              className="outline-none text-[#707EAE] w-full"
              placeholder="Search..."
            />
          </div>
        </header>

        {/* Page content */}
        <div className="flex gap-5 px-[31px] py-4">
          {/* CARD 1 */}
          <div className={styles.mainCard}>
            <div className="flex flex-col px-6">
              <p className="text-[#A3AED0] text-[14px] whitespace-nowrap font-dm-sans font-medium leading-[24px] tracking-[-0.02em]">
                Spent this month
              </p>
              <p className="text-[#1B2559] text-[24px]  font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
                $682.5
              </p>
            </div>

            <div className="mr-[29px]">
              <ResponsiveContainer width={85} height={80}>
                <BarChart data={data} barSize={8} barCategoryGap="20%">
                  <Bar
                    dataKey="value"
                    fill="#4318FF"
                    radius={[8, 8, 8, 8]}
                    stackId="a"
                  />
                  <Bar
                    dataKey="max"
                    fill="#E9EDF7"
                    radius={[8, 8, 8, 8]}
                    stackId="a"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles.mainCard}>
            <div className="flex gap-3  px-6">
              <div className="w-[50px] h-[50px] rounded-full bg-linear-to-b from-[#868CFF] shrink-0 to-[#4318FF] flex items-center justify-center">
                <img src={group} alt="clients" className="w-[25px] h-[18px]" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#A3AED0] text-[16px] whitespace-nowrap font-dm-sans font-bold leading-[28px] tracking-[-0.02em]">
                  New clients
                </p>
                <p className="text-[#1B2559] text-[28px]  font-dm-sans font-bold leading-[30px] tracking-[-0.02em]">
                  321
                </p>
              </div>
            </div>

            <div className="ml-auto mr-[22.5px] w-[58px] overflow-hidden">
              <ResponsiveContainer width="100%" height={90}>
                <LineChart
                  data={lineData}
                  margin={{ top: 5, right: 0, left: 2, bottom: 5 }}
                >
                  <defs>
                    <linearGradient
                      id="clientsLineGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#4F2CFF" />
                      <stop offset="100%" stopColor="#CBBEFF" />
                    </linearGradient>
                  </defs>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="url(#clientsLineGradient)"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CARD 3 */}
          <div className={styles.mainCard}>
            <div className="flex gap-3 px-6">
              <div className="w-[50px] h-[50px] rounded-full bg-[#F4F7FE] flex items-center justify-center ">
                <ResponsiveContainer width={25} height={25}>
                  <BarChart
                    data={earningsIconData}
                    barSize={5}
                    margin={{ top: 1, right: 0, left: 0, bottom: 0 }}
                  >
                    <Bar dataKey="value" fill="#4318FF" radius={[8, 8, 8, 8]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col">
                <p className="text-[#A3AED0] text-[14px] whitespace-nowrap font-dm-sans font-medium leading-[24px] tracking-[-0.02em]">
                  Earnings
                </p>
                <p className="text-[#1B2559] text-[24px]  font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
                  $350.40
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className={styles.mainCard}>
            <div className="flex gap-3 px-6">
              <div className="flex flex-col">
                <p className="text-[#A3AED0] text-[16px] whitespace-nowrap font-dm-sans font-medium leading-[28px] tracking-[-0.02em]">
                  Activity
                </p>
                <p className="text-[#1B2559] text-[24px]  font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
                  $540.50
                </p>
              </div>
            </div>
            <div className="ml-auto mr-[22.5px] w-[58px] overflow-hidden right-[20px] relative">
              <ResponsiveContainer width="100%" height={90}>
                <LineChart
                  data={earningsActivityData}
                  margin={{ top: 5, right: 0, left: 1, bottom: 5 }}
                >
                  <defs>
                    <linearGradient
                      id="clientsLineGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#4F2CFF" />
                      <stop offset="100%" stopColor="#CBBEFF" />
                    </linearGradient>
                  </defs>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="url(#clientsLineGradient)"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <section className="flex gap-5 px-[31px] ">
          {/* BIG CARD */}
          <div className="bg-white h-[345px] w-[720px] rounded-[20px] "></div>

          {/* AVATAR CARD */}
          <div className={styles.smallCard}>
            <div className="flex flex-col items-center justify-center mt-8">
              <div className="w-[127px] h-[127px] rounded-full bg-[#F4F7FE] flex items-center justify-center overflow-hidden ">
                <img
                  src={staravatar}
                  alt="staravatar"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-3">
                <p className="text-[#1B2559] text-[24px] whitespace-nowrap font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
                  Charles Robbie
                </p>
                <p className="text-[#A3AED0] text-[14px]  font-dm-sans font-medium leading-[24px] tracking-[-0.02em]">
                  New York, USA
                </p>
              </div>
              <div className="flex items-center justify-center gap-[40px] mt-3">
                <div className="flex flex-col items-center">
                  <p className="text-[#A3AED0] text-[12px] font-dm-sans font-medium leading-[20px] tracking-[-0.02em]">
                    Projects
                  </p>
                  <p className="text-[#1B2559] text-[24px] font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
                    28
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-[#A3AED0] text-[12px] font-dm-sans font-medium leading-[20px] tracking-[-0.02em]">
                    Followers
                  </p>
                  <p className="text-[#1B2559] text-[24px] font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
                    643
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-[#A3AED0] text-[12px] font-dm-sans font-medium leading-[20px] tracking-[-0.02em]">
                    Following
                  </p>
                  <p className="text-[#1B2559] text-[24px] font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
                    76
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex gap-5 px-[31px] mt-5 ">
          <div className={styles.smallCard}></div>
          <div className={styles.smallCard}></div>
          <div className={styles.smallCard + " relative"}>
            <div>
              <p className="text-[#1B2559] px-7 text-[34px] mt-5 whitespace-nowrap font-dm-sans font-bold leading-[42px] tracking-[-0.02em]">
                27 May
              </p>
            </div>

            {events.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-[10px] mt-5 pl-[28px]"
              >
                <div className="w-[4px] h-[41px] bg-[#4318FF] rounded-full shrink-0" />
                <div>
                  <p className="text-[#1B2559] text-[16px] whitespace-nowrap font-dm-sans font-bold leading-[28px] tracking-[-0.02em]">
                    {item.title}
                  </p>
                  <p className="text-[#A3AED0] text-[12px] whitespace-nowrap font-dm-sans font-medium leading-[20px] tracking-[-0.02em]">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}

            <div className=" flex items-center gap-[5px] absolute bottom-[22px] right-[51px] text-[#4318FF] text-[16px] font-dm-sans font-bold leading-[28px] tracking-[-0.02em] cursor-pointer">
              View all Tasks
              <img
                src={arrowright}
                alt="arrowright"
                className="w-[18px] h-[12px]"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
