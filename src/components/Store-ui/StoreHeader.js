import { Button } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";

const StoreHeader = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleSearch = (data) => {
    console.log(data);
  };
  return (
    <div className="pt-[38px] mb-[42px]">
      <form
        onSubmit={handleSubmit(handleSearch)}
        className="h-[60px] max-w-[700px] flex justify-between items-center border rounded-[57px] bg-[#F1F1F1]"
      >
        <Button
          type="submit"
          className="shadow-none bg-pm text-white rounded-[57px] w-[147px] h-full"
        >
          Search
        </Button>
        <input
          className="px-2 h-full w-full flex-grow outline-none bg-[#F1F1F1] placeholder:text-[15px] rounded-r-[57px] placeholder:text-[#C7C7C7]"
          type="search"
          placeholder="Company name, Account Holder, Role, Status"
        />
      </form>
    </div>
  );
};

export default StoreHeader;
