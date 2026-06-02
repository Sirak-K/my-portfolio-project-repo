export function ProfileCard({ profile }) {
  return (
    <article className="profile-card" aria-label="Profile card">
      <p className="profile-card__role">{profile.role}</p>
    </article>
  );
}
