import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../helpers/yupValidation/schema";
import "../../App.css";
import "../../index.css";
import { useState } from "react";
import checkStrength from "../../helpers/checkStrenght";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../redux/dataSlice";
import { IForm, IFormValidation } from "../../constants/constants";
import createBase64 from "../../helpers/createBase64";
import { RootState } from "../../redux/reducer";

export const ControlledForm = () => {
  const dispatch = useDispatch();
  const [, setPassword] = useState("");
  const [strength, setStrength] = useState("No");
  const countries = useSelector((state: RootState) => state.countries);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormValidation>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IFormValidation> = async (dataControlled) => {
    let base64Image: string = "";

    if (dataControlled.image) {
      if (dataControlled.image instanceof File) {
        try {
          base64Image = await createBase64(dataControlled.image);
        } catch (error) {
          console.error("Error converting file to base64:", error);
          return;
        }
      } else {
        base64Image = dataControlled.image;
      }
    }

    const updatedData: IForm = {
      ...dataControlled,
      image: base64Image || "",
    };

    dispatch(updateData(updatedData));
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
          <label htmlFor={"image"}> Image </label>
          <input id={"image"} type="file" {...register("image")} />
          <p className="error">{errors.image?.message || ""}</p>
        </section>

        <section>
          <label htmlFor={"country"}> Country </label>
          <input list="country-list" {...register("country")} />
          <datalist id="country-list">
            {countries.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
          <p className="error">{errors.country?.message || ""}</p>
        </section>

        <section>
          <div className="acceptWrapper">
            <label htmlFor={"acceptInput"}> Accept Terms and Conditions </label>
            <input id="acceptInput" type="checkbox" {...register("accept")} />
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
