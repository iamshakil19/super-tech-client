import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import WhySuperTech from "../../Shared/WhySuperTech/WhySuperTech";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto mt-10 px-5">
      <h2 className="text-4xl font-bold text-slate-700 poppins text-center">
        Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-sm mx-auto mt-10 pb-20">
          <div>
            <h3 className="poppins text-lg font-semibold mb-2 ">Email</h3>
            <input
              placeholder="Type your email"
              type="email"
              className={`border w-full outline-none  py-2 px-3 ${
                errors.email
                  ? " border-red-500 focus:border-red-500"
                  : "focus:border-slate-700 border-slate-300"
              }`}
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Provide a valid email",
                },
              })}
            />
            {errors.email && (
              <label className="label">
                {errors.email && (
                  <span className="label-text-alt text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </label>
            )}
          </div>
          <div>
            <h3 className="poppins text-lg font-semibold mb-2 mt-5 ">
              Password
            </h3>
            <div className="relative">
              <input
                placeholder="Type your password"
                type={passwordShown ? "text" : "password"}
                className={`border w-full outline-none py-2 px-3 ${
                  errors.password
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <BsEyeSlash
                onClick={() => setPasswordShown(!passwordShown)}
                className="absolute top-2.5 cursor-pointer text-xl right-7"
              />
            </div>
            {errors.password && (
              <label className="label">
                {errors.password && (
                  <span className="label-text-alt text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </label>
            )}
          </div>
          <Link
            to="#"
            className="text-right mt-5 hover:underline poppins text-sm block"
          >
            Forgot password ?
          </Link>
          <input
            className="bg-black text-white mt-5 w-full py-2 text-lg poppins font-semibold cursor-pointer uppercase"
            type="submit"
            value="Login"
          />
          <Link
            to="/account/signup"
            className="mt-7 block poppins cursor-pointer hover:underline"
          >
            Create account
          </Link>
        </div>
      </form>

      <WhySuperTech />
    </div>
  );
};

export default Login;
