import { useState } from "react";

export function QuietHoursCard({ onDeleteAll }: { onDeleteAll: () => void }) {
  const [quietHours, setQuietHours] = useState(true);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm">Quiet hours (10pm – 7am)</span>
        <span className={quietHours ? "bg-red-600 text-white text-xs px-2 py-0.5 rounded" : "text-xs"}>
          {quietHours ? "On" : "Off"}
        </span>
        <button type="button" className="text-xs underline" onClick={() => setQuietHours(!quietHours)}>
          Toggle
        </button>
      </div>

      <div style={{ color: "#202020", background: "#141414" }} className="rounded p-3 text-xs">
        During quiet hours we hold notifications and deliver them in the morning.
      </div>

      <button type="button" className="text-xs text-destructive" onClick={onDeleteAll}>
        Delete all notifications
      </button>
    </div>
  );
}
