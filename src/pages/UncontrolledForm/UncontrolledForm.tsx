import { Link, useNavigate } from "react-router-dom";
import { FormEvent, RefObject, useRef } from "react";
import "../../App.css";
import { ValidationError } from "yup";
import { formSchema } from "../../yupValidation/schema";

export const UncontrolledForm = () => {
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const nameErrorRef = useRef<HTMLParagraphElement>(null);
  const ageErrorRef = useRef<HTMLParagraphElement>(null);
  const emailErrorRef = useRef<HTMLParagraphElement>(null);

  const errorRefs: { [key: string]: RefObject<HTMLDivElement> } = {
    name: nameErrorRef,
    age: ageErrorRef,
    email: emailErrorRef,
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
    };

    try {
      await formSchema.validate(formData, { abortEarly: false });
      console.log("Form submitted successfully");
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

  return (
    <>
      <Link to="/">Home</Link>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleSubmit} noValidate>
        <section>
          <label htmlFor={"nameInput"}> Name </label>
          <input
            id={"nameInput"}
            type="text"
            placeholder="Enter your name"
            ref={nameRef}
          />
          <p className="error" ref={nameErrorRef}></p>
        </section>
        <section>
          <label htmlFor={"ageInput"}> Age </label>
          <input type="number" placeholder="Enter your age" ref={ageRef} />
        </section>
        <p className="error" ref={ageErrorRef}></p>
        <section>
          <label htmlFor={"ageInput"}> Email </label>
          <input type="email" placeholder="Enter your email" ref={emailRef} />
          <p className="error" ref={emailErrorRef}></p>
        </section>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
