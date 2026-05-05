import { BigCard } from "./BigCard";
import { EventsCard } from "./EventsCard";
import { ProfileCard } from "./ProfileCard";
import { SpendingCard } from "./SpendingCard";
import { TransactionsCard } from "./TransactionsCard";

export function DashboardDetails() {
  return (
    <>
      <section className="flex gap-5 px-[31px] ">
        {/* BIG CARD */}
        <BigCard />
        <ProfileCard />
      </section>

      <section className="flex gap-5 px-[31px] mt-5 ">
        {/* SPENDING CARD */}
        <SpendingCard />
        {/* TRANSACTIONS CARD */}
        <TransactionsCard />
        {/* EVENTS CARD */}
        <EventsCard />
      </section>
    </>
  );
}
