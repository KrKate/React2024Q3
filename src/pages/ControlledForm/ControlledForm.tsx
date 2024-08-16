import { Link } from "react-router-dom";
import styles from "./ControlledForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../yupValidation/schema";

interface IControlled {
  name: string;
  age: number;
  email: string;
}

export const ControlledForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IControlled>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IControlled> = (data) => {
    console.log(data["email"]);
  };

  return (
    <form className={styles.controlledForm} onSubmit={handleSubmit(onSubmit)}>
      <Link to="/">Home</Link>
      <section>
        <label htmlFor={"nameInput"}> Name </label>
        <input
          id={"nameInput"}
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        <p className={styles.error}>{errors.name?.message || ""}</p>
      </section>
      <section>
        <label htmlFor={"ageInput"}> Age </label>
        <input
          type="number"
          placeholder="Enter your age"
          {...register("age")}
        />
      </section>
      <p className={styles.error}>{errors.age?.message || ""}</p>
      <section>
        <label htmlFor={"ageInput"}> Email </label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        <p className={styles.error}>{errors.email?.message || ""}</p>
      </section>
      <section></section>
      <button type="submit">Submit</button>
    </form>
  );
};
