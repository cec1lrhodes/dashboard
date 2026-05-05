import styles from "../../dashboard.module.css";
import staravatar from "../../screenshots/staravatar.png";

const profileStats = [
  { label: "Projects", value: "28" },
  { label: "Followers", value: "643" },
  { label: "Following", value: "76" },
];

export function ProfileCard() {
  return (
    <div className={styles.smallCard}>
      {/* AVATAR CARD */}
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="w-[127px] h-[127px] rounded-full bg-[#F4F7FE] flex items-center justify-center overflow-hidden ">
          <img src={staravatar} alt="staravatar" className="object-cover" />
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
          {profileStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p className="text-[#A3AED0] text-[12px] font-dm-sans font-medium leading-[20px] tracking-[-0.02em]">
                {stat.label}
              </p>
              <p className="text-[#1B2559] text-[24px] font-dm-sans font-bold leading-[32px] tracking-[-0.02em]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
