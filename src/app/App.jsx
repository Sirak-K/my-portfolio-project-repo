import { ProfileCard } from "../components/ProfileCard.jsx";
import { SidebarNavigation } from "../components/SidebarNavigation.jsx";
import profile from "../data/profile.json";

export function App() {
  return (
    <main className="portfolio-layout">
      <SidebarNavigation />
      <section className="portfolio-content" aria-label="Portfolio content">
        <ProfileCard profile={profile} />
      </section>
    </main>
  );
}
