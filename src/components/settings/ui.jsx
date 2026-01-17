import { useState } from "react";
import AddPortfolioModal from "@/components/settings/SettingsContent/components/AddPortfolioModal.jsx";

/* CARD */
export function Card({ children }) {
  return (
    <div className=" w-full lg:w-190 border border-black/25 rounded-xl p-[16px] lg:p-[24px] flex flex-col gap-[24px] lg:gap-[32px]">
      {children}
    </div>
  );
}


/* SECTION TITLE */
export function SectionTitle({ title, desc }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <h3 className="text-[28px] leading-[40px]">{title}</h3>
      <p className="text-[14px] text-black/80">{desc}</p>
    </div>
  );
}

/* FIELD */
export function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="text-[16px]">{label}</label>
      {children}
    </div>
  );
}

/* INPUT WITH PILLS */
export function Input({ value, placeholder, onRemove }) {
  const isArray = Array.isArray(value);

  return (
    <div className="min-h-[40px] border border-black/25 rounded-[8px] px-[8px] flex items-center gap-[8px] flex-wrap">
      {isArray && value?.length > 0 ? (
        value.map((item) => (
          <span
            key={item}
            className="flex items-center gap-[6px] px-[12px] py-[4px] bg-[#F9F9F9] border border-black/25 rounded-[30px] text-[14px]"
          >
            {item}
            <button
              type="button"
              onClick={() => onRemove(item)}
              className="text-black/60 hover:text-black"
            >
              ✕
            </button>
          </span>
        ))
      ) : !isArray && value ? (
        <span className="flex items-center gap-[6px] px-[12px] py-[4px] bg-[#F9F9F9] border border-black/25 rounded-[30px] text-[14px]">
          {value}
          {onRemove && (
            <button
              type="button"
              onClick={onRemove}
              className="text-black/60 hover:text-black"
            >
              ✕
            </button>
          )}
        </span>
      ) : (
        <span className="text-black/50 text-[14px]">{placeholder}</span>
      )}
    </div>
  );
}

/* TAG ROW */
export function TagRow({ tags, selected, onSelect, multi = false }) {
  return (
    <div className="flex flex-wrap gap-[12px]">
      {tags.map((tag) => {
        const isActive = multi
          ? selected.includes(tag)
          : selected === tag;

        return (
          <button
            key={tag}
            type="button"
            onClick={() => onSelect(tag)}
            className={`px-[16px] py-[6px] rounded-[30px] text-[16px] border
              ${
                isActive
                  ? "bg-[#ffffff] text-black border-black/25"
                  : "border-black/25 text-black"
              }
            `}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}

/* UPLOAD BOX */


export function UploadBox({ label, Modal }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="w-[318px] h-[212px] border border-black/25 rounded-[12px]
        flex items-center justify-center cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <button className="flex items-center gap-[8px] px-[12px] py-[8px]
          border border-black/10 rounded-[8px] bg-[#F9F9F9]">
          {label}
        </button>
      </div>

      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  );
}



/* UPDATE ROW */
export function UpdateRow() {
  return (
    <div className="flex justify-end">
      <button className="h-[41px] px-[24px] bg-[#186AFF] text-white rounded-[8px] font-medium">
        Update
      </button>
    </div>
  );
}

 export function UploadSection({ title, desc, hint }) {
  return (
    <div className="flex flex-col gap-[8px] w-[552px]">
      <label className="text-[16px]">{title}</label>
      <p className="text-[16px] text-black/60">{desc}</p>

      <div className="
        w-[552px] h-[134px]
        bg-[#F9F9F9]
        border border-dashed border-black/25
        rounded-[24px]
        flex flex-col items-center justify-center gap-[12px]
      ">
        <div className="w-[48px] h-[48px] rounded-full border border-black/25 flex items-center justify-center">
          📄
        </div>

        <p className="text-[14px] leading-[21px] text-black/60 text-center whitespace-pre-line">
          {hint}
        </p>
      </div>
    </div>
  );
}

