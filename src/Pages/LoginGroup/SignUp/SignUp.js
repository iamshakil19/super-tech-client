import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WhySuperTech from "../../Shared/WhySuperTech/WhySuperTech";
import { BsEyeSlash } from "react-icons/bs";
import { useSignUpMutation } from "../../../features/auth/authApi";

const SignUp = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
    watch,
    control,
  } = useForm();

  const [signUp, { data, isLoading, error: resError }] = useSignUpMutation();
  useEffect(() => {
    if (resError) {
      toast.error(resError?.data?.error?.errors?.confirmPassword?.message, {
        id: "signup",
      });
    }
    if (resError?.data?.error?.keyPattern?.email === 1) {
      toast.error("Email is already in use", { id: "signup" });
    }

    if (data?.success) {
      toast.success(data?.message);
      navigate("/");
    }
  }, [
    navigate,
    data?.success,
    data?.message,
    resError?.data?.error?.keyPattern?.email,
    resError?.data?.error?.errors?.confirmPassword?.message,
    resError,
  ]);

  const onSubmit = (data) => {
    signUp(data);
  };
  return (
    <div className="container mx-auto pt-10 px-5">
      <h2 className="text-4xl font-bold text-slate-700 poppins text-center">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-sm mx-auto mt-5 pb-20">
          <div>
            <h3 className="poppins text-lg font-semibold mb-2">Name</h3>
            <input
              placeholder="Type your name"
              type="name"
              className={`border w-full outline-none  py-2 px-3 ${
                errors.name
                  ? " border-red-500 focus:border-red-500"
                  : "focus:border-slate-700 border-slate-300"
              }`}
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            {errors.name && (
              <span className="label-text-alt text-red-500 text-sm py-0">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <h3 className="poppins text-lg font-semibold mb-2 mt-2">Email</h3>
            <input
              placeholder="Type your email"
              type="email"
              className={`border w-full outline-none py-2 px-3 ${
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
              <span className="label-text-alt text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <h3 className="poppins text-lg font-semibold mb-2 mt-2">Number</h3>
            <input
              placeholder="Type your number"
              type="text"
              className={`border w-full outline-none py-2 px-3 ${
                errors.contactNumber
                  ? " border-red-500 focus:border-red-500"
                  : "focus:border-slate-700 border-slate-300"
              }`}
              {...register("contactNumber", {
                required: {
                  value: true,
                  message: "Number is required",
                },
                maxLength: {
                  value: 11,
                  message: "Must be 11 characters",
                },
                minLength: {
                  value: 11,
                  message: "Must be 11 characters",
                },
              })}
            />
            {errors.contactNumber && (
              <span className="label-text-alt text-red-500 text-sm">
                {errors.contactNumber.message}
              </span>
            )}
          </div>
          <div>
            <h3 className="poppins text-lg font-semibold mb-2 mt-2 ">
              Password
            </h3>
            <div className="relative">
              <input
                placeholder="Type your password"
                type={passwordShown ? "text" : "password"}
                className={`border w-full outline-none py-2 px-3  ${
                  errors.password
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value:
                      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{6,15}$/,
                    message:
                      "Password must be between 6 to 15 characters and contain at least 1 uppercase, 1 lowercase, 1 digit, 1 symbol",
                  },
                })}
              />
              <BsEyeSlash
                onClick={() => setPasswordShown(!passwordShown)}
                className="absolute top-2.5 cursor-pointer text-xl right-7"
              />
            </div>

            {errors.password && (
              <span className="label-text-alt text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <h3 className="poppins text-lg font-semibold mb-2 mt-2 ">
              Confirm Password
            </h3>
            <div className="relative">
              <input
                placeholder="Type your password"
                type={confirmPasswordShown ? "text" : "password"}
                className={`border w-full outline-none py-2 px-3 ${
                  errors.confirmPassword
                    ? " border-red-500 focus:border-red-500"
                    : "focus:border-slate-700 border-slate-300"
                }`}
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required",
                  },
                  pattern: {
                    value:
                      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{6,15}$/,
                    message:
                      "Password must be between 6 to 15 characters and contain at least 1 uppercase, 1 lowercase, 1 digit, 1 symbol",
                  },
                })}
              />
              <BsEyeSlash
                onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                className="absolute top-2.5 cursor-pointer text-xl right-7"
              />
            </div>
            {errors.confirmPassword && (
              <span className="label-text-alt text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <input
            disabled={isLoading}
            className="bg-black text-white mt-7 w-full py-2 text-lg poppins font-semibold cursor-pointer uppercase disabled:bg-gray-300 disabled:cursor-not-allowed"
            type="submit"
            value="Sign up"
          />
          <Link
            to="/login"
            className="mt-7 block poppins cursor-pointer hover:underline"
          >
            Login
          </Link>
        </div>
      </form>

      <WhySuperTech />
    </div>
  );
};

export default SignUp;
