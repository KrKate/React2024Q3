import { Link } from "react-router-dom";
import "./App.css";
import { APP_ROUTES } from "./constants/constants";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducer";

function App() {
  const users = useSelector((state: RootState) => state.data.data);
  const lastAddedIndex = useSelector(
    (state: RootState) => state.data.lastAddedIndex,
  );

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
        <ul>
          {users.map((user, index) => (
            <li
              key={user.email}
              className={`userCard ${lastAddedIndex === index ? "highlight" : ""}`}
            >
              <section className="info">
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Gender: {user.gender}</p>
                <p>Country: {user.country}</p>
              </section>
              <section className="img">
                {user.image && typeof user.image === "string" && (
                  <img src={user.image} />
                )}
              </section>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default App;
