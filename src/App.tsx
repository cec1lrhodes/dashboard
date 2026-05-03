import { useState } from "react";
import styles from "./dashboard.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.page}>
      {/* SIDEBAR */}
      <div className={styles.sidebar}></div>

      <main className="ml-[290px] flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between h-[146px] px-6">
          <p>WELCOME TO WENUS</p>
          <input className={styles.input} placeholder="Пошук..." />
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
