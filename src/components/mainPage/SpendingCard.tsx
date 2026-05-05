import { Bar, BarChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import styles from "../../dashboard.module.css";
import accept from "../../screenshots/accept.png";

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

export function SpendingCard() {
  return (
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
              <img src={accept} alt="accept" className="h-[15px] w-[15px]" />
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
  );
}
