import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context";
import auth from "../../firebaseConfig";
function Login() {
  const navigate = useNavigate();
  const { login } = useContext(GlobalContext);
  const [error, setError] = useState("");

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    mode: "onChange",
  });

  async function submit(data) {
    try {
      setError("");

      console.log(data.mail, data.password);

      login(auth, data.mail, data.password)
        .then((result) => {
          console.log(result);
          if (result) navigate("/Home");
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);

      setError("Failed to log in");
    } finally {
    }
  }

  return (
    <section className="w-full h-screen bg-[url('/public\pexels-anniroenkae-3109850.jpg')] bg-cover bg-no-repeat ">
      <div className="w-[min(100%,600px)] h-screen bg-gradient-to-b from-[#191817] from-49%  to-[#6100C2] rounded-r-lg flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-[50px] mb-4">Log in</h1>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        <form
          onSubmit={handleSubmit(submit)}
          className="w-[350px] p-4 bg-white rounded-lg  flex flex-col gap-4"
        >
          <div className="flex border border-[#9b9b9b] rounded-lg">
            <label
              htmlFor="mail"
              className="rounded-l-lg bg-[#6100C2] p-2 flex items-center justify-center "
            >
              <img
                src="public\mail_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg"
                alt=""
                className="inline w-[32px] h-[32px]"
              />
            </label>
            <div className="flex p-1 input">
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Email"
                {...register("mail", {
                  required: "Enter your e-mail address",
                })}
              />
            </div>
          </div>
          {errors.mail && <p>{errors.mail.message}</p>}

          <div className="flex border border-[#9b9b9b] rounded-lg">
            <label
              htmlFor="password"
              className="rounded-l-lg bg-[#6100C2] p-2 flex items-center justify-center "
            >
              <img
                src="public\lock_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg"
                alt=""
                className=" w-[32px] h-[32px]"
              />
            </label>
            <div className="flex p-1 input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: "Enter your password",
                })}
              />
            </div>
          </div>
          {errors.password && <p>{errors.password.message}</p>}

          <div className="w-full flex-col flex justify-center items-center">
            <button className="p-2 bg-[#6100C2] focus:outline-[#6100C2]   w-[100px] rounded-lg text-white hover:bg-[#2a0253] tramsition duration-300">
              Login
            </button>

            <p className="mt-2 text-sm">
              Don't have an account?{" "}
              <Link className="text-[#6100C2]" to={"/Signup"}>
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
