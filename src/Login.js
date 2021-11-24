import { useForm } from "react-hook-form";

let counter = 0;

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
    
   }
   console.log(watch("userName"));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-16 w-full h-screen bg-no-repeat bg-cover bg-left"
      style={{
        backgroundImage:
          "url('https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg')",
      }}
    >
      <div
        style={{ width: 500 }}
        className="mx-auto  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            {...register("userName", {
              required: true,
            })}
            type="text"
            placeholder="Username"
          ></input>
          {errors?.userName?.type === "required" && (
            <p className="text-red-500 text-xs italic">
              This field is required
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            {...register("password", {
              required: true,
            })}
            type="password"
            placeholder="******************"
          />
          {errors?.password?.type === "required" && (
            <p className="text-red-500 text-xs italic">
              This field is required
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-dark text-indigo-50 font-bold py-2 px-4 rounded bg-indigo-900"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker "
            href="#"
          >
            Forgot Password?
          </a>
          <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
        </div>
      </div>
    </form>
  );
}

export default App;
