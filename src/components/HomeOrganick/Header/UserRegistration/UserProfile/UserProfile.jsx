// src/components/UserProfile/UserProfile.jsx
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/auth/selectors";

export function UserProfile() {
  const user = useSelector(selectUser);

  return (
    <section>
      <div>
        <h2>Welcome {user.name}</h2>
        <h3>Your bonus account: 100</h3>
      </div>
    </section>
  );
}
