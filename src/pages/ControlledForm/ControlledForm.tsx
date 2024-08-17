import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../helpers/yupValidation/schema";
import "../../App.css";
import "../../index.css";
import { useState } from "react";
import checkStrength from "../../helpers/checkStrenght";

interface IControlled {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
}

export const ControlledForm = () => {
  const [, setPassword] = useState("");
  const [strength, setStrength] = useState("Weak");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IControlled>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IControlled> = () => {
    navigate("/");
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
            type="number"
            placeholder="Enter your age"
            {...register("age")}
          />
          <p className="error">{errors.age?.message || ""}</p>
        </section>

        <section>
          <label htmlFor={"ageInput"}> Email </label>
          <input
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
            type="password"
            placeholder="Repeat your password"
            autoComplete="off"
            {...register("confirmPassword")}
          />
          <p className="error">{errors.confirmPassword?.message || ""}</p>
        </section>

        <button type="submit" disabled={!isValid || !isDirty}>
          Submit
        </button>
      </form>
    </>
  );
};
