import styles from "./dashboard.module.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Header } from "./components/mainPage/Header";
import { SummaryCards } from "./components/mainPage/SummaryCards";
import { DashboardDetails } from "./components/mainPage/DashboardDetails";

function App() {
  return (
    <div className={styles.page}>
      {/* SIDEBAR */}
      <Sidebar />

      <main className="ml-[290px] flex flex-col">
        {/* Header */}
        <Header />

        {/* Page content */}
        <SummaryCards />

        <DashboardDetails />
      </main>
    </div>
  );
}

export default App;
