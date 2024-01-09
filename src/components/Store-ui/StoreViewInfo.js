import { useStoreInfoUpdateMutation } from "@/redux/features/stores/storeApi";
import { iHr } from "@/utils/icons/icons";
import { Button, Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import StoreCertificates from "./StoreCertificates";
import StatusInfo from "./StatusInfo";

const StoreViewInfo = ({ store }) => {
  const [storeInfoUpdate, { isLoading }] = useStoreInfoUpdateMutation();
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [isEdit, setIsEdit] = useState(false);
  const [isEditAccess, setIsEditAccess] = useState(false);

  const handleAdd = async (data) => {
    const options = {
      data: data,
      id: store?._id,
    };
    const result = await storeInfoUpdate(options);
    if (result?.data?.status === true) {
      toast.success("Admin Comment Add Success");
    } else {
      toast.error("Admin Comment Add Failed");
    }
    setIsEdit(false);
    setIsEditAccess(false);
  };

  useEffect(() => {
    if (store?.comment) {
      setValue("comment", store?.comment);
    }
  }, []);

  useEffect(() => {
    if (store?.comment !== watch("comment")) {
      if (!isEdit) {
        setIsEdit(true);
      }
    } else {
      setIsEdit(false);
    }
  }, [watch("comment")]);

  console.log(store);
  return (
    <div className="border border-black rounded-[10px] p-5 mt-[28px]">
      <h1 className="text-black text-[35px] font-inter font-bold tracking-[0.2px] mb-[35px] uppercase">
        Basic Information
      </h1>

      {store?.business_information?.company_website && (
        <div className="mt-[16px] flex gap-2 items-center flex-wrap">
          <h1 className="text-black text-xl font-inter font-semibold tracking-[0.2px]">
            Company Website:
          </h1>
          <h1 className="text-black text-sm font-inter tracking-[0.2px] hover:text-pm">
            <a
              href={store?.business_information?.company_website}
              target="_blank"
            >
              {store?.business_information?.company_website}
            </a>
          </h1>
        </div>
      )}

      {store?.company_address && (
        <div className="mt-[16px] flex gap-2 items-center flex-wrap">
          <h1 className="text-black text-xl font-inter font-semibold tracking-[0.2px]">
            Company Address:
          </h1>
          <h1 className="text-black text-sm font-inter tracking-[0.2px]">
            {store?.company_address?.address}{" "}
            {store?.company_address?.postal_code}{" "}
            {store?.company_address?.country}
          </h1>
        </div>
      )}

      <div className="mt-[35px]">{iHr}</div>

      <div className="mt-[35px]">
        <h1 className="text-black text-[35px] font-inter font-bold tracking-[0.2px] mb-[35px] uppercase">
          Detailed Business information
        </h1>

        {store?.business_information?.business_registration_certificate && (
          <div className="mt-[16px] flex gap-2 items-center flex-wrap">
            <h1 className="text-black text-xl font-inter font-semibold tracking-[0.2px]">
              Trade Registry Certificate:
            </h1>
            <h1 className="text-black text-sm font-inter tracking-[0.2px] hover:text-pm">
              {store?.business_information?.business_registration_certificate}
            </h1>
          </div>
        )}

        {store?.status_info?.length > 0 && (
          <div className="mt-[16px]">
            <h1 className="text-black text-xl font-inter font-semibold tracking-[0.2px]">
              Status Information
            </h1>
            <StatusInfo
              status_info={
                store?.status_info ? [...store.status_info].reverse() : []
              }
            />
          </div>
        )}

        {store?.certificates?.length > 0 && (
          <div className="mt-[16px]">
            <h1 className="text-black text-xl font-inter font-semibold tracking-[0.2px]">
              Certificates
            </h1>
            <div className="h-fit md:h-[320px]">
              <StoreCertificates saveCertificates={store?.certificates} />
            </div>
          </div>
        )}

        {store?.business_information?.business_certificate_number && (
          <div className="mt-[16px] flex gap-2 items-center flex-wrap">
            <h1 className="text-black text-xl font-inter font-semibold tracking-[0.2px]">
              Central Registration System Number / MERSIS No:
            </h1>
            <h1 className="text-black text-sm font-inter tracking-[0.2px] hover:text-pm">
              {store?.business_information?.business_certificate_number}
            </h1>
          </div>
        )}
      </div>

      <div className="mt-[35px]">{iHr}</div>

      <div className="mt-[35px]">
        <h1 className="text-black text-[35px] font-inter font-bold tracking-[0.2px] mb-[35px] uppercase">
          tax_information
        </h1>

        {store?.tax_information?.kdv_number && (
          <div className="mt-[16px] flex gap-2 items-center flex-wrap">
            <h1 className="text-black text-xl font-inter font-semibold tracking-[0.2px]">
              Tax Number:
            </h1>
            <h1 className="text-black text-sm font-inter tracking-[0.2px] hover:text-pm">
              {store?.tax_information?.kdv_number}
            </h1>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(handleAdd)} className="mt-[80px]">
        <h1 className="text-black text-[25px] font-inter font-semibold tracking-[0.2px]">
          Admin Comment
        </h1>
        <textarea
          {...register("comment", { required: false })}
          type="text"
          placeholder="Type your comment....."
          disabled={!isEditAccess}
          className="min-h-[229px] max-h-[229px] text-sm placeholder:text-[#C7C7C7] text-black py-[26px] px-[16px] w-full rounded-[10px] mt-[14px] bg-[#F6F7F9] outline-none"
        />
        <div className="flex justify-end items-center gap-4 mt-2">
          {isEditAccess ? (
            <>
              <Button
                size="sm"
                onClick={() => setIsEditAccess(false)}
                className="bg-red-600 text-white rounded"
              >
                Cancel
              </Button>
              {isEdit ? (
                <Button
                  size="sm"
                  type="submit"
                  disabled={isLoading}
                  className="bg-pm text-white flex justify-center items-center rounded"
                >
                  {isLoading ? (
                    <Spinner color="white" className="font-bold" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              ) : (
                <Button
                  size="sm"
                  disabled
                  className="bg-pm opacity-50 cursor-not-allowed text-white flex justify-center items-center rounded"
                >
                  Submit
                </Button>
              )}
            </>
          ) : (
            <>
              <Button
                size="sm"
                onClick={() => setIsEditAccess(true)}
                className="bg-red-600 text-white rounded"
              >
                Edit
              </Button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default StoreViewInfo;
