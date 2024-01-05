import { iHr } from "@/utils/icons/icons";
import React from "react";

const StoreViewInfo = ({ store }) => {
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

      <div className="mt-[80px]">
        <h1 className="text-black text-[25px] font-inter font-semibold tracking-[0.2px]">
          Admin Comment
        </h1>
        <textarea
          type="text"
          placeholder="Type your comment....."
          className="min-h-[229px] max-h-[229px] text-sm placeholder:text-[#C7C7C7] text-black py-[26px] px-[16px] w-full rounded-[10px] mt-[14px] bg-[#F6F7F9] outline-none"
        />
      </div>
    </div>
  );
};

export default StoreViewInfo;
