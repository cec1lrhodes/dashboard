import { useState } from "react";
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
import transport from "./screenshots/transport.png";
import store from "./screenshots/store.png";
import bus from "./screenshots/bus.png";
import accept from "./screenshots/accept.png";
import buttongraph from "./screenshots/buttongraph.png";

import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
} from "recharts";

const TOTAL = 45;

const data = [
  { value: 20, max: TOTAL - 20 },
  { value: 30, max: TOTAL - 30 },
  { value: 25, max: TOTAL - 25 },
  { value: 35, max: TOTAL - 35 },
  { value: 15, max: TOTAL - 15 },
];

const SPENDING_TOTAL = 70;
const spendingData = [
  { value: 38 },
  { value: 26 },
  { value: 52 },
  { value: 32 },
  { value: 44 },
  { value: 58 },
  { value: 15 },
];

const totalSpentData = [
  { month: "Jan", value: 78 },
  { month: "Feb", value: 145 },
  { month: "Mar", value: 115 },
  { month: "Apr", value: 128 },
  { month: "May", value: 106 },
  { month: "Jun", value: 179, active: true },
  { month: "Jul", value: 92 },
  { month: "Aug", value: 145 },
  { month: "Sep", value: 55 },
  { month: "Oct", value: 128 },
  { month: "Nov", value: 84 },
  { month: "Dec", value: 115 },
];
const activeTotalSpent = totalSpentData.find((item) => item.active);
const activeTotalSpentValue =
  activeTotalSpent?.value ??
  Math.max(...totalSpentData.map((item) => item.value));

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

const transactions = [
  {
    title: "Public Transport",
    date: "22 September 2020",
    icon: bus,
    w: 20,
    h: 20,
  },
  {
    title: "Grocery Store",
    date: "18 September 2020",
    icon: store,
    w: 22,
    h: 19,
  },
  {
    title: "Public Transport",
    date: "22 September 2020",
    icon: transport,
    w: 20,
    h: 20,
  },
];

type HoverBarShapeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
  index?: number;
  showDot?: boolean;
};

function HoverBarShape({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  fill = "#4318FF",
  showDot = false,
}: HoverBarShapeProps) {
  const radius = width / 2;
  const dotX = x + width / 2;
  const dotY = y - 4;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={radius} fill={fill} />
      {showDot && (
        <circle
          cx={dotX}
          cy={dotY}
          r={3}
          fill="#A3AED0"
          stroke="#FFFFFF"
          strokeWidth={2}
        />
      )}
    </g>
  );
}

function App() {
  const [spentPreviewIndex, setSpentPreviewIndex] = useState<number | null>(
    null,
  );
  const [earningsPreviewIndex, setEarningsPreviewIndex] = useState<
    number | null
  >(null);

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
              <ResponsiveContainer width={85} height={70}>
                <BarChart
                  data={data}
                  barSize={8}
                  barCategoryGap="20%"
                  accessibilityLayer={false}
                >
                  <YAxis hide domain={[0, TOTAL]} />
                  <Bar
                    dataKey="value"
                    fill="#4318FF"
                    radius={[8, 8, 8, 8]}
                    background={{ fill: "#E9EDF7", radius: 8 }}
                    onMouseEnter={(_, index) => setSpentPreviewIndex(index)}
                    onMouseLeave={() => setSpentPreviewIndex(null)}
                    shape={(props) => (
                      <HoverBarShape
                        {...props}
                        showDot={props.index === spentPreviewIndex}
                      />
                    )}
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
                    accessibilityLayer={false}
                  >
                    <Bar
                      dataKey="value"
                      fill="#4318FF"
                      radius={[8, 8, 8, 8]}
                      onMouseEnter={(_, index) =>
                        setEarningsPreviewIndex(index)
                      }
                      onMouseLeave={() => setEarningsPreviewIndex(null)}
                      shape={(props) => (
                        <HoverBarShape
                          {...props}
                          showDot={props.index === earningsPreviewIndex}
                        />
                      )}
                    />
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
          <div className="relative h-[345px] w-[720px] rounded-[20px] bg-white px-[34px] py-[28px]">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <p className="text-[#A3AED0] text-[16px] whitespace-nowrap font-dm-sans font-medium leading-[28px] tracking-[-0.02em]">
                  Total Spent
                </p>
                <p className="text-[#1B2559] text-[34px] font-dm-sans font-bold leading-[42px] tracking-[-0.02em]">
                  $682.5
                </p>
              </div>

              <img
                src={buttongraph}
                alt="graph"
                className="h-[33px] w-[33px]"
              />
            </div>

            <div className="absolute bottom-[31px] left-[32px] right-[26px] h-[190px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={totalSpentData}
                  barSize={37}
                  barCategoryGap={22}
                  margin={{ top: 8, right: 45, left: 0, bottom: 0 }}
                  accessibilityLayer={false}
                >
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={14}
                    tick={{
                      fill: "#A3AED0",
                      fontSize: 13,
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  />
                  <YAxis hide domain={[0, activeTotalSpentValue]} />
                  <ReferenceLine
                    y={activeTotalSpentValue}
                    stroke="#4318FF"
                    strokeDasharray="7 7"
                    label={{
                      value: `$${activeTotalSpentValue}`,
                      position: "right",
                      fill: "#4318FF",
                      fontSize: 12,
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  />
                  <Tooltip
                    cursor={false}
                    formatter={(value) => [`$${value}`, "Spent"]}
                    contentStyle={{
                      border: "none",
                      borderRadius: 10,
                      boxShadow: "0 8px 24px rgba(27, 37, 89, 0.12)",
                      color: "#1B2559",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                    labelStyle={{
                      color: "#A3AED0",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 8, 8]}>
                    {totalSpentData.map((item) => (
                      <Cell
                        key={item.month}
                        fill={item.active ? "#4318FF" : "#E9EDF7"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

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
          {/* SPENDING CARD */}
          <div className={styles.smallCard + " relative px-[32px] py-[29px]"}>
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <p className="text-[#A3AED0] text-[16px] whitespace-nowrap font-dm-sans font-medium leading-[28px] tracking-[-0.02em]">
                  Spent this month
                </p>
                <p className="text-[#1B2559] text-[34px] font-dm-sans font-bold leading-[42px] tracking-[-0.02em]">
                  $682.5
                </p>
                <div className="mt-[5px] flex items-center gap-[6px] text-[#05CD99] text-[16px] font-dm-sans font-bold leading-[28px] tracking-[-0.02em]">
                  <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#05CD99]">
                    <img
                      src={accept}
                      alt="accept"
                      className="h-[15px] w-[15px]"
                    />
                  </span>
                  On track
                </div>
              </div>

              <p className="mt-[2px] text-[#05CD99] text-[12px] font-dm-sans font-bold leading-[20px] tracking-[-0.02em]">
                +2.45%
              </p>
            </div>

            <div className="absolute bottom-[31px] left-[31px] right-[31px] h-[142px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={spendingData}
                  barSize={18}
                  barCategoryGap={27}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  accessibilityLayer={false}
                >
                  <YAxis hide domain={[0, SPENDING_TOTAL]} />
                  <Tooltip
                    cursor={false}
                    formatter={(value) => [`$${value}`, "Spent"]}
                    contentStyle={{
                      border: "none",
                      borderRadius: 14,
                      boxShadow: "0 10px 30px rgba(27, 37, 89, 0.14)",
                      color: "#1B2559",
                      fontFamily: "DM Sans, sans-serif",
                      padding: "10px 14px",
                    }}
                    itemStyle={{
                      color: "#4318FF",
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 700,
                      padding: 0,
                    }}
                    labelStyle={{
                      color: "#A3AED0",
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: 12,
                      marginBottom: 4,
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="#4318FF"
                    radius={[9, 9, 9, 9]}
                    background={{ fill: "#E9EDF7", radius: 9 }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* TRANSACTIONS CARD */}
          <div className={styles.smallCard + " relative"}>
            <div>
              <p className="text-[#1B2559] px-7 text-[20px] mt-5 whitespace-nowrap font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
                Your transactions
              </p>
            </div>

            <div className="flex flex-col gap-7 mt-4">
              {transactions.map((item, i) => (
                <div key={i} className="flex items-center gap-4 px-7">
                  <div className="w-12 h-12 rounded-full bg-[#F4F7FE] shrink-0 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      style={{ width: item.w, height: item.h }}
                    />
                  </div>
                  <div>
                    <p className="text-[#1B2559] text-[16px] font-dm-sans font-bold leading-[28px] tracking-[-0.02em]">
                      {item.title}
                    </p>
                    <p className="text-[#A3AED0] text-[12px] font-dm-sans font-medium leading-[20px] tracking-[-0.02em]">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className=" flex items-center gap-[5px] absolute bottom-[22px] right-[51px] text-[#4318FF] text-[16px] font-dm-sans font-bold leading-[28px] tracking-[-0.02em] cursor-pointer">
              View all
              <img
                src={arrowright}
                alt="arrowright"
                className="w-[18px] h-[12px]"
              />
            </div>
          </div>
          {/* EVENTS CARD */}
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
