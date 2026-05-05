import styles from "../../dashboard.module.css";
import arrowright from "../../screenshots/arrowright.png";

const events = [
  { title: "Meet w/ Simmmple", time: "01:00 PM - 02:00 PM" },
  { title: "Fitness Training", time: "02:00 PM - 03:00 PM" },
  { title: "Reading Time", time: "03:00 PM - 04:00 PM" },
];

export function EventsCard() {
  return (
    <div className={styles.smallCard + " relative"}>
      <div>
        <p className="text-[#1B2559] px-7 text-[34px] mt-5 whitespace-nowrap font-dm-sans font-bold leading-[42px] tracking-[-0.02em]">
          27 May
        </p>
      </div>

      {events.map((item, i) => (
        <div key={i} className="flex items-center gap-[10px] mt-5 pl-[28px]">
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
        <img src={arrowright} alt="arrowright" className="w-[18px] h-[12px]" />
      </div>
    </div>
  );
}
