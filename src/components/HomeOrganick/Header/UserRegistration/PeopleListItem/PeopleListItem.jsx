import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn } from "../../../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export function PeopleListItem() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <section>
      <div>
        <h2>Welcome {user.name}</h2>
        <h3>Your bonus account: 100</h3>
      </div>
    </section>
  );
}
