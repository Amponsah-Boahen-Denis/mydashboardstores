import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const drivers = [
  { name: "Leo Carter", zone: "Downtown", status: "On route" },
  { name: "Aisha Johnson", zone: "Northside", status: "Available" },
  { name: "Kyle Park", zone: "East District", status: "Break" },
];

const zones = [
  { region: "Zone A", minCharge: "$3.00", note: "Fastest delivery" },
  { region: "Zone B", minCharge: "$4.50", note: "Moderate distance" },
  { region: "Zone C", minCharge: "$6.00", note: "Outer delivery area" },
];

export default function DeliveryPage() {
  return (
    <SiteShell
      title="Delivery Management"
      description="Assign drivers, configure delivery zones and fees, then track every delivery assignment in real time."
    >
      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-red-950">Driver assignments</h2>
              <p className="mt-2 text-sm text-red-600">Monitor driver availability and delivery status across all zones.</p>
            </div>
            <Button className="rounded-3xl bg-red-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
              Assign Driver
            </Button>
          </div>

          <div className="mt-6 space-y-3 text-sm text-red-600">
            {drivers.map((driver) => (
              <div key={driver.name} className="rounded-3xl border border-red-200 bg-red-50 px-4 py-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-red-950">{driver.name}</p>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                    {driver.status}
                  </span>
                </div>
                <p className="mt-2">Zone: {driver.zone}</p>
              </div>
            ))}
          </div>
        </Card>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Delivery zones</h3>
            <div className="mt-4 space-y-3 text-sm text-red-600">
              {zones.map((zone) => (
                <div key={zone.region} className="rounded-3xl bg-red-50 px-4 py-4">
                  <p className="font-medium text-red-950">{zone.region}</p>
                  <p className="mt-1">Charge: {zone.minCharge}</p>
                  <p className="mt-1 text-red-700">{zone.note}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Delivery history</h3>
            <p className="mt-3 text-sm text-red-600">Track completed delivery trips and average delivery times.</p>
            <div className="mt-5 space-y-3 text-sm text-red-600">
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Today</p>
                <p className="mt-1">18 completed deliveries</p>
              </div>
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Average time</p>
                <p className="mt-1">28 minutes</p>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </SiteShell>
  );
}
