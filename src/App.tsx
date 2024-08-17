import { Link } from "react-router-dom";
import "./App.css";
import { APP_ROUTES } from "./constants/constants";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducer";

function App() {
  const users = useSelector((state: RootState) => state.data.data);

  return (
    <div className="appWrapper">
      <main>
        <Link className="mainLink" to={APP_ROUTES.CONTROLLED}>
          Controlled form
        </Link>
        <Link className="mainLink" to={APP_ROUTES.UNCONTROLLED}>
          Uncontrolled form
        </Link>
      </main>
      <aside>
        {users.map((user) => (
          <ul className="userCard">
            <li>Name: {user.name}</li>
            <li>Age: {user.age}</li>
            <li>Email: {user.email}</li>
            <li>Password: {user.password}</li>
            <li>Gender: {user.gender}</li>
          </ul>
        ))}
      </aside>
    </div>
  );
}

export default App;
