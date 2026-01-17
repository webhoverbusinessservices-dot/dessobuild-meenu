"use client";

export default function ProfileInfoForm() {
  return (
    <div className="flex flex-col gap-[32px] w-full px-4 lg:px-0">

      {/* HEADER */}
      <div className="w-full lg:w-[644px] flex flex-col gap-[4px]">
        <h3 className="text-[24px] lg:text-[28px] leading-[40px]">
          Profile Information
        </h3>
        <p className="text-[14px] text-black/80">
          Update your basic personal details used for account identification and communication with clients.
        </p>
      </div>

      {/* CARD */}
      <div className=" w-full lg:w-[728px] border border-black/25 rounded-[16px] p-[16px] lg:p-[24px] flex flex-col gap-[32px]">

        {/* AVATAR + NAME */}
        <div className="flex flex-col lg:flex-row gap-[25px]">
          <UploadBox />

          <div className="flex-1 flex flex-col gap-[24px] lg:gap-[32px]">
            <Row>
              <Input label="First name *" />
              <Input label="Last name *" />
            </Row>
            <Input label="Date of Birth *" full />
          </div>
        </div>

        <Input label="Email address *" full />

        <Row>
          <Input label="State *" />
          <Input label="City *" />
        </Row>

        <Row>
          <Input label="Address *" wide />
          <Input label="Pincode *" />
        </Row>

        <Input label="Phone Number *" full />

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[32px]">
          <button className="h-[41px] px-[24px] border border-[#186AFF] text-[#186AFF] rounded-[8px] font-medium">
            Update
          </button>
          <button className="h-[41px] text-black/60 font-medium">
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function UploadBox() {
  return (
    <div className="w-full lg:w-[201px] flex flex-col gap-[11px] items-center lg:items-start">
      <div className="
        w-full
        h-[115px]
        rounded-[24px]
        border-dashed
        border-[1.6px]
        border-black/25
        bg-[#F9F9F9]
        flex items-center justify-center
      ">
        👤
      </div>

      <button className="
        w-full
        h-[40px]
        border
        border-[#186AFF]
        text-[#186AFF]
        rounded-[12px]
        font-medium
      ">
        Upload Profile Image
      </button>
    </div>
  );
}

function Input({ label, full, wide }) {
  return (
    <div
      className={`
        flex flex-col gap-[6px]
        ${full ? "w-full" : wide ? "w-full lg:w-[480px]" : "w-full"}
      `}
    >
      <label className="text-[16px]">{label}</label>
      <input className="h-[40px] border border-black/25 rounded-[8px] px-3" />
    </div>
  );
}

function Row({ children }) {
  return (
    <div className="flex flex-col lg:flex-row gap-[16px] w-full">
      {children}
    </div>
  );
}
