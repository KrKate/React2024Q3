import { Link, useNavigate } from "react-router-dom";
import { FormEvent, RefObject, useRef, useState } from "react";
import "../../App.css";
import { ValidationError } from "yup";
import { formSchema } from "../../helpers/yupValidation/schema";
import checkStrength from "../../helpers/checkStrenght";

export const UncontrolledForm = () => {
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

  const nameErrorRef = useRef<HTMLParagraphElement>(null);
  const ageErrorRef = useRef<HTMLParagraphElement>(null);
  const emailErrorRef = useRef<HTMLParagraphElement>(null);
  const passwordErrorRef = useRef<HTMLParagraphElement>(null);
  const confirmPassswordErrorRef = useRef<HTMLParagraphElement>(null);
  const genderErrorRef = useRef<HTMLParagraphElement>(null);
  const acceptErrorRef = useRef<HTMLParagraphElement>(null);

  const errorRefs: { [key: string]: RefObject<HTMLDivElement> } = {
    name: nameErrorRef,
    age: ageErrorRef,
    email: emailErrorRef,
    password: passwordErrorRef,
    confirmPassword: confirmPassswordErrorRef,
    gender: genderErrorRef,
    accept: acceptErrorRef
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      accept: acceptRef.current?.checked
    };

    try {
      await formSchema.validate(formData, { abortEarly: false });
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
          <div className="acceptWrapper">
        <label htmlFor={"acceptInput"}> Accept Terms and Conditions </label>
        <input
            id="acceptInput"
            type="checkbox"
            ref={acceptRef}
          />
          </div>
          <p className="error" ref={acceptErrorRef}></p>
        </section>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
