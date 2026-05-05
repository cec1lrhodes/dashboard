import { BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import buttongraph from "../../screenshots/buttongraph.png";
import { ReferenceLine } from "recharts";
import { Tooltip } from "recharts";
import { Bar, Cell } from "recharts";

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

export const BigCard = () => {
  return (
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

        <img src={buttongraph} alt="graph" className="h-[33px] w-[33px]" />
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
  );
};
