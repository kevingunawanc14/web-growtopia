import InputForm from "./RegisterForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <img
        className="w-[100px] h-[100px] rounded-full"
        src="./logo-white.png"
        alt=""
      />
      <div className="w-1/3 mt-10">
        <InputForm />
      </div>
    </div>
  );
}
