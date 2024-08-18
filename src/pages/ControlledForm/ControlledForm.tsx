import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../helpers/yupValidation/schema";
import "../../App.css";
import "../../index.css";
import { useState } from "react";
import checkStrength from "../../helpers/checkStrenght";
import { useDispatch } from "react-redux";
import { updateData } from "../../redux/dataSlice";

interface IControlled {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  accept: boolean
}

export const ControlledForm = () => {
  const dispatch = useDispatch();
  const [, setPassword] = useState("");
  const [strength, setStrength] = useState("No");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IControlled>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IControlled> = (dataControlled) => {
    navigate("/");
    dispatch(updateData(dataControlled));
  };

  return (
    <>
      <Link to="/">Home</Link>
      <h1>Hook form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor={"nameInput"}> Name </label>
          <input
            id={"nameInput"}
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
          <p className="error">{errors.name?.message || ""}</p>
        </section>

        <section>
          <label htmlFor={"ageInput"}> Age </label>
          <input
            id={"ageInput"}
            type="number"
            placeholder="Enter your age"
            {...register("age")}
          />
          <p className="error">{errors.age?.message || ""}</p>
        </section>

        <section>
          <label htmlFor={"emailInput"}> Email </label>
          <input
            id={"emailInput"}
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            {...register("email")}
          />
          <p className="error">{errors.email?.message || ""}</p>
        </section>

        <section>
          <label htmlFor={"passwordInput"}> Password </label>
          <small className={strength}>({strength} password)</small>
          <input
            id={"passwordInput"}
            type="password"
            placeholder="Enter your password"
            autoComplete="off"
            {...register("password", {
              onChange: (event) => {
                const value = event.target.value;
                setPassword(value);
                setStrength(checkStrength(value));
              },
            })}
          />
          <p className="error">{errors.password?.message || ""}</p>
        </section>

        <section>
          <label htmlFor={"confirmPasswordInput"}> Password </label>
          <input
            id={"confirmPasswordInput"}
            type="password"
            placeholder="Repeat your password"
            autoComplete="off"
            {...register("confirmPassword")}
          />
          <p className="error">{errors.confirmPassword?.message || ""}</p>
        </section>

        <section>
          <label htmlFor={"genderSelect"}> Gender </label>
          <select id="genderSelect" {...register("gender")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="pokemon">Pokemon</option>
            <option value="other">Other</option>
          </select>
          <p className="error">{errors.gender?.message || ""}</p>
        </section>

        <section>
          <div className="acceptWrapper">
        <label htmlFor={"acceptInput"}> Accept Terms and Conditions </label>
        <input
            id="acceptInput"
            type="checkbox"
            {...register("accept")}
          />
          </div>
          <p className="error">{errors.accept?.message || ""}</p>
        </section>

        <button type="submit" disabled={!isValid || !isDirty}>
          Submit
        </button>
      </form>
    </>
  );
};
