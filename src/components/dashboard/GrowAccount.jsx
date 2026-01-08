function GrowAccount() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[28px] font-medium">Grow & Manage your account</h3>

      {/* REFERRAL */}
      <div className="bg-[#F9F9F9] border border-black/25 rounded-xl p-8 flex flex-col gap-4">
        <h4 className="text-[32px] font-medium">Refer a Friend, Grow Together</h4>
        <p className="text-[16px] text-black/60 max-w-180">
          Invite other consultants and help grow the platform. Earn rewards when they join and start working.
        </p>
        <button className="w-fit px-6 py-4 bg-[#186AFF] rounded-lg text-white">
          Invite a Friend
        </button>
      </div>

      {/* BOTTOM CARDS */}
      <div className="flex gap-6">
        <MiniCard title="Update Your Services" desc="Edit offerings anytime." />
        <MiniCard title="Earnings & Withdrawals" desc="Track balance securely." />
        <MiniCard title="Chat & Call History" desc="Review past sessions." />
      </div>
    </div>
  );
}

function MiniCard({ title, desc }) {
  return (
    <div className="w-106 h-25.75 border border-black/25 rounded-xl p-6">
      <h4 className="text-[20px] font-medium">{title}</h4>
      <p className="text-[14px] text-black/60">{desc}</p>
    </div>
  );
}
export default GrowAccount;