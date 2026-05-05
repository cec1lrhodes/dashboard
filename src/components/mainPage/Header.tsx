import styles from "../../dashboard.module.css";
import searchicon from "../../screenshots/searchicon.png";

export const Header = () => {
  return (
    <header className="flex items-center  h-[146px] px-6">
      <div>
        <p className="text-[#707EAE] font-dm-sans text-[14px] leading-[24px] tracking-[-0.02em]">
          Hi Andrei,
        </p>
        <p className="font-dm-sans text-[34px] font-bold text-[#2B3674] tracking-[-0.02em] leading-[42px]">
          Welcome to Venus!
        </p>
      </div>

      <div
        className={styles.input + " flex items-center gap-3 ml-[450px] mt-16"}
      >
        <img src={searchicon} alt="searchicon" className="w-[11px] h-[11px]" />
        <input
          className="outline-none text-[#707EAE] w-full"
          placeholder="Search..."
        />
      </div>
    </header>
  );
};
