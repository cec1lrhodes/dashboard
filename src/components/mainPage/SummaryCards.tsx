import { useState } from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import styles from "../../dashboard.module.css";
import group from "../../screenshots/group.png";

const TOTAL = 45;

const spentMonthData = [
  { value: 20, max: TOTAL - 20 },
  { value: 30, max: TOTAL - 30 },
  { value: 25, max: TOTAL - 25 },
  { value: 35, max: TOTAL - 35 },
  { value: 15, max: TOTAL - 15 },
];

const newClientsLineData = [
  { value: 10 },
  { value: 35 },
  { value: 30 },
  { value: 50 },
];

const earningsIconData = [{ value: 17 }, { value: 23 }, { value: 10 }];

const activityLineData = [
  { value: 3 },
  { value: 9 },
  { value: 4 },
  { value: 7 },
  { value: 9 },
  { value: 10 },
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

function LineGradientDefs() {
  return (
    <defs>
      <linearGradient id="clientsLineGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#4F2CFF" />
        <stop offset="100%" stopColor="#CBBEFF" />
      </linearGradient>

      <linearGradient
        id="clientsLineHoverGradient"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
      >
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1} />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.35} />
      </linearGradient>
    </defs>
  );
}

export function SummaryCards() {
  const [spentPreviewIndex, setSpentPreviewIndex] = useState<number | null>(
    null,
  );
  const [earningsPreviewIndex, setEarningsPreviewIndex] = useState<
    number | null
  >(null);

  return (
    <div className="flex gap-5 px-[31px] py-4">
      {/* CARD 1 */}
      <div className={styles.mainCard}>
        <div className="flex flex-col px-6">
          <p className="mainCardText text-[#A3AED0] text-[14px] whitespace-nowrap font-dm-sans font-medium leading-[24px] tracking-[-0.02em]">
            Spent this month
          </p>
          <p className="mainCardText text-[#1B2559] text-[24px]  font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
            $682.5
          </p>
        </div>

        <div className="mr-[29px]">
          <ResponsiveContainer width={85} height={70}>
            <BarChart
              data={spentMonthData}
              barSize={8}
              barCategoryGap="20%"
              accessibilityLayer={false}
            >
              <YAxis hide domain={[0, TOTAL]} />
              <Bar
                dataKey="value"
                fill="var(--bar-fill)"
                radius={[8, 8, 8, 8]}
                background={{ fill: "var(--bar-bg)", radius: 8 }}
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
            <p className=" mainCardText text-[#A3AED0] text-[16px] whitespace-nowrap font-dm-sans font-bold leading-[28px] tracking-[-0.02em]">
              New clients
            </p>
            <p className="mainCardText text-[#1B2559] text-[28px]  font-dm-sans font-bold leading-[30px] tracking-[-0.02em]">
              321
            </p>
          </div>
        </div>

        <div className="ml-auto mr-[22.5px] w-[58px] overflow-hidden">
          <ResponsiveContainer width="100%" height={90}>
            <LineChart
              data={newClientsLineData}
              margin={{ top: 5, right: 0, left: 2, bottom: 5 }}
            >
              <LineGradientDefs />
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--activity-line)"
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
                  onMouseEnter={(_, index) => setEarningsPreviewIndex(index)}
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
            <p className="mainCardText text-[#A3AED0] text-[14px] whitespace-nowrap font-dm-sans font-medium leading-[24px] tracking-[-0.02em]">
              Earnings
            </p>
            <p className="mainCardText text-[#1B2559] text-[24px]  font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
              $350.40
            </p>
          </div>
        </div>
      </div>

      {/* CARD 4 */}
      <div className={styles.mainCard}>
        <div className="flex gap-3 px-6">
          <div className="flex flex-col">
            <p className="mainCardText text-[#A3AED0] text-[16px] whitespace-nowrap font-dm-sans font-medium leading-[28px] tracking-[-0.02em]">
              Activity
            </p>
            <p className="mainCardText text-[#1B2559] text-[24px] font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
              $540.50
            </p>
          </div>
        </div>
        <div className="ml-auto mr-[22.5px] w-[58px] overflow-hidden right-[20px] relative">
          <ResponsiveContainer width="100%" height={90}>
            <LineChart
              data={activityLineData}
              margin={{ top: 5, right: 0, left: 1, bottom: 5 }}
            >
              <LineGradientDefs />
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--activity-line)"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
