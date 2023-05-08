import Link from "../components/Link";
import { useLights } from "../hooks/useLights";

export default function HomePage() {
  const { activeLights } = useLights();

  return (
    <div>
      <h1>Home</h1>
      <p>{activeLights} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
