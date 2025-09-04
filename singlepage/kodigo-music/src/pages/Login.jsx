import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Login data:", data);
  };

  return (
    <div className="p-6 flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="w-full p-2 border rounded mb-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required", minLength: 6 })}
          className="w-full p-2 border rounded mb-2"
        />
        {errors.password && <p className="text-red-500 text-sm">Password must be at least 6 chars</p>}

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400">
          Login
        </button>
      </form>
    </div>
  );
}
