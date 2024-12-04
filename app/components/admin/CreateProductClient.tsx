"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../general/Input";
import Checkbox from "../general/Checkbox";
import { MdMonitor } from "react-icons/md";
import { PiGraphicsCard } from "react-icons/pi";
import { FaMemory, FaLaptop } from "react-icons/fa";
import { BsCpu, BsPc, BsFillMotherboardFill } from "react-icons/bs";
import Choicesİnput from "../general/Choicesİnput";
import { IconType } from "react-icons";
import Button from "../general/Button";
import ImageUploader from "../general/ImageUploader";
import axios from "axios";
import toast from "react-hot-toast";

const CreateProductClient = () => {
  const categoryList: {
    name: string;
    icon: IconType;
  }[] = [
    {
      name: "Kompyuter",
      icon: BsPc,
    },

    {
      name: "Noutbuk",
      icon: FaLaptop,
    },
    {
      name: "Ekran kartı",
      icon: PiGraphicsCard,
    },
    {
      name: "Monitor",
      icon: MdMonitor,
    },
    {
      name: "Ram",
      icon: FaMemory,
    },
    {
      name: "Prosessor (CPU)",
      icon: BsCpu,
    },
    {
      name: "Ana platalar",
      icon: BsFillMotherboardFill,
    },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      image: "",
      price: "",
      brand: "",
      category: "",
      inStock: false,
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data, "data");
    axios
      .post("/api/product", data)
      .then(() => {
        toast.success("Məhsul əlavə olundu");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Məhsul əlavə edilmədi");
      });
  };

  const category = watch("category");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleImageUpload = (url: string) => {
    setValue("image", url);
  };

  return (
    <div className="w-full md:w-[80%] flex justify-center flex-col">
      <h1 className="text-xl my-3 md:my-5 font-bold text-center">
        Məhsulu Yarat
      </h1>
      <Input
        placeholder="Ad"
        id="name"
        type="text"
        register={register}
        required
        errors={errors}
      />
      <Input
        placeholder="Təsvir"
        id="description"
        type="text"
        register={register}
        required
        errors={errors}
      />
      <Input
        placeholder="Marka"
        id="brand"
        type="text"
        register={register}
        required
        errors={errors}
      />
      <Input
        placeholder="Qiymət"
        id="price"
        type="number"
        register={register}
        required
        errors={errors}
      />
      <Checkbox
        id="inStock"
        label="Məhsulun stok statusu"
        register={register}
      />
      <div className="flex flex-wrap flex-col gap-3 my-3">
        <div className="text-lg font-bold">Kateqoriya seç</div>
        <div className="flex flex-wrap gap-3 my-3">
          {categoryList.map((cat) => (
            <Choicesİnput
              key={cat.name}
              icon={cat.icon}
              text={cat.name}
              onClick={(category) => setCustomValue("category", category)}
              selected={category === cat.name}
            />
          ))}
        </div>
      </div>
      <ImageUploader onImageUpload={handleImageUpload} />
      <Button text="Məhsulu yarat" onClick={handleSubmit(onSubmit)} />
    </div>
  );
};
export default CreateProductClient;
