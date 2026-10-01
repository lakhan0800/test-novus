import { useState } from "react";

export function NotificationPreferences() {
  const [weeklyDigest, setWeeklyDigest] = useState(false);
  const alerts: string[] = [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">Weekly spending digest</span>
        <button
          type="button"
          className={weeklyDigest ? "bg-red-600 text-white px-3 py-1 rounded" : "bg-muted px-3 py-1 rounded"}
          onClick={() => setWeeklyDigest(!weeklyDigest)}
        >
          {weeklyDigest ? "On" : "Off"}
        </button>
      </div>

      {alerts.length === 0 && (
        <div style={{ color: "#1a1a1a", background: "#111111" }} className="rounded p-4 text-sm">
          You have no budget alerts yet. Alerts appear here when a category goes over its limit.
        </div>
      )}
    </div>
  );
}
