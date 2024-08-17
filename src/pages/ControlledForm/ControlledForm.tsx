import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../yupValidation/schema";
import "../../App.css";

interface IControlled {
  name: string;
  age: number;
  email: string;
}

export const ControlledForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IControlled>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IControlled> = (data) => {
    console.log(data);
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
        </section>
        <p className="error">{errors.age?.message || ""}</p>
        <section>
          <label htmlFor={"ageInput"}> Email </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          <p className="error">{errors.email?.message || ""}</p>
        </section>
        <section></section>
        <button type="submit" disabled={!isValid || !isDirty}>
          Submit
        </button>
      </form>
    </>
  );
};
