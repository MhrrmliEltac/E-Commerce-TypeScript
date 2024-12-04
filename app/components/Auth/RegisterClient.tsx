"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import AuthContainer from "../containers/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Button from "../general/Button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { useEffect } from "react";

type UserProps = {
  currentUser: User | undefined | null;
};

const RegisterClient: React.FC<UserProps> = ({ currentUser }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/register", data).then(() => {
      toast.success("Qeydiyyatdan keçdiniz");
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((callback) => {
        if (callback?.ok) {
          router.push("/cart");
          router.refresh();
        }
        if (callback?.error) {
          toast.error(callback.error);
        }
      });
    });
  };

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md my-3 md:my-10">
        <Heading center text="Qeydiyyat" />
        <Input
          placeholder="Ad"
          id="name"
          type="text"
          register={register}
          required
          errors={errors}
        />
        <Input
          placeholder="E-mail"
          id="email"
          type="email"
          register={register}
          required
          errors={errors}
        />
        <Input
          placeholder="Password"
          id="password"
          type="password"
          register={register}
          required
          errors={errors}
        />
        <Button text="Qeydiyyatdan keç" onClick={handleSubmit(onSubmit)} />
        <div className="text-xs text-center my-2">
          Hesabınız var?{" "}
          <Link className="text-red-600 font-bold" href={"/login"}>
            Daxil ol
          </Link>
        </div>
        <div className="text-center text-sm font-lighter my-2">və ya</div>
        <Button
          icon={FcGoogle}
          text="Google ile qeydiyyatdan keç"
          outline
          onClick={() => signIn("google")}
        />
      </div>
    </AuthContainer>
  );
};

export default RegisterClient;
