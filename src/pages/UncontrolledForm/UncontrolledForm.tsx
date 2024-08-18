import { Link, useNavigate } from "react-router-dom";
import { FormEvent, RefObject, useRef, useState } from "react";
import "../../App.css";
import { ValidationError } from "yup";
import { formSchema } from "../../helpers/yupValidation/schema";
import checkStrength from "../../helpers/checkStrenght";
import { useDispatch } from "react-redux";
import { updateData } from "../../redux/dataSlice";
import { IControlled, IControlledValidate } from "../../constants/constants";
import createBase64 from "../../helpers/createBase64";
import { countries } from "../../constants/countries";

export const UncontrolledForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, setPassword] = useState("");
  const [strength, setStrength] = useState("No");

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const nameErrorRef = useRef<HTMLParagraphElement>(null);
  const ageErrorRef = useRef<HTMLParagraphElement>(null);
  const emailErrorRef = useRef<HTMLParagraphElement>(null);
  const passwordErrorRef = useRef<HTMLParagraphElement>(null);
  const confirmPassswordErrorRef = useRef<HTMLParagraphElement>(null);
  const genderErrorRef = useRef<HTMLParagraphElement>(null);
  const acceptErrorRef = useRef<HTMLParagraphElement>(null);
  const imageErrorRef = useRef<HTMLParagraphElement>(null);
  const countryErrorRef = useRef<HTMLParagraphElement>(null);

  const errorRefs: { [key: string]: RefObject<HTMLDivElement> } = {
    name: nameErrorRef,
    age: ageErrorRef,
    email: emailErrorRef,
    password: passwordErrorRef,
    confirmPassword: confirmPassswordErrorRef,
    gender: genderErrorRef,
    accept: acceptErrorRef,
    image: imageErrorRef,
    country: countryErrorRef,
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    let selectedImage: File | null = null;

    if (imageRef.current?.files?.[0]) {
      selectedImage = imageRef.current.files[0];
    }

    const formData: IControlledValidate = {
      name: nameRef.current?.value ?? "",
      age: Number(ageRef.current?.value),
      email: emailRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
      confirmPassword: confirmPasswordRef.current?.value ?? "",
      gender: genderRef.current?.value ?? "",
      accept: acceptRef.current?.checked ?? false,
      image: selectedImage || new File([], ""),
      country: countryRef.current?.value || "",
    };

    try {
      await formSchema.validate(formData, { abortEarly: false });
      const reduxData: IControlled = {
        ...formData,
        image: selectedImage ? await createBase64(selectedImage) : "",
      };

      dispatch(updateData(reduxData));
      navigate("/");
    } catch (err) {
      if (err instanceof ValidationError) {
        Object.values(errorRefs).forEach((ref) => {
          ref.current!.textContent = "";
        });

        err.inner.forEach((error) => {
          const errorRef = errorRefs[error.path as keyof typeof errorRefs];
          if (errorRef) {
            errorRef.current!.textContent = error.message;
          }
        });
      }
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    setStrength(checkStrength(value));
  };

  return (
    <>
      <Link to="/">Home</Link>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleSubmit} noValidate>
        <section>
          <label htmlFor={"nameInput"}> Name </label>
          <input
            id="nameInput"
            type="text"
            placeholder="Enter your name"
            ref={nameRef}
          />
          <p className="error" ref={nameErrorRef}></p>
        </section>

        <section>
          <label htmlFor={"ageInput"}> Age </label>
          <input
            id="ageInput"
            type="number"
            placeholder="Enter your age"
            ref={ageRef}
          />
          <p className="error" ref={ageErrorRef}></p>
        </section>

        <section>
          <label htmlFor={"emailInput"}> Email </label>
          <input
            id="emailInput"
            type="email"
            placeholder="Enter your email"
            ref={emailRef}
          />
          <p className="error" ref={emailErrorRef}></p>
        </section>

        <section>
          <label htmlFor={"passwordInput"}> Password </label>
          <small className={strength}>({strength} password)</small>
          <input
            id="passwordInput"
            type="password"
            placeholder="Enter your password"
            ref={passwordRef}
            onChange={handlePasswordChange}
          />
          <p className="error" ref={passwordErrorRef}></p>
        </section>

        <section>
          <label htmlFor={"confirmPasswordInput"}> Password </label>
          <input
            id="confirmPasswordInput"
            type="password"
            placeholder="Repeat your password"
            ref={confirmPasswordRef}
          />
          <p className="error" ref={confirmPassswordErrorRef}></p>
        </section>

        <section>
          <label htmlFor={"genderSelect"}> Gender </label>
          <select id="genderSelect" defaultValue="" ref={genderRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="pokemon">Pokemon</option>
            <option value="other">Other</option>
          </select>
          <p className="error" ref={genderErrorRef}></p>
        </section>

        <section>
          <label htmlFor={"image"}> Image </label>
          <input id={"image"} type="file" ref={imageRef} />
          <p className="error" ref={imageErrorRef}></p>
        </section>

        <section>
          <label htmlFor={"country"}> Country </label>
          <input list="country-list" ref={countryRef} />
          <datalist id="country-list">
            {countries.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
          <p className="error" ref={countryErrorRef}></p>
        </section>

        <section>
          <div className="acceptWrapper">
            <label htmlFor={"acceptInput"}> Accept Terms and Conditions </label>
            <input id="acceptInput" type="checkbox" ref={acceptRef} />
          </div>
          <p className="error" ref={acceptErrorRef}></p>
        </section>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
