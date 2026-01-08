function MenuItem({ icon: Icon, title, subtitle, highlight }) {
  return (
    <div
      className={`flex gap-3 p-2 rounded-lg cursor-pointer hover:bg-black/5
        ${highlight && "bg-black/5"}
      `}
    >
      <Icon className="w-5 h-5 text-black/80" />
      <div>
        <p className="text-[16px]">{title}</p>
        {subtitle && (
          <p className="text-[14px] text-black/60">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="my-2 h-px bg-black/10" />;
}
