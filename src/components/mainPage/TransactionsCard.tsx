import styles from "../../dashboard.module.css";
import arrowright from "../../screenshots/arrowright.png";
import bus from "../../screenshots/bus.png";
import store from "../../screenshots/store.png";
import transport from "../../screenshots/transport.png";

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

export function TransactionsCard() {
  return (
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
        <img src={arrowright} alt="arrowright" className="w-[18px] h-[12px]" />
      </div>
    </div>
  );
}
