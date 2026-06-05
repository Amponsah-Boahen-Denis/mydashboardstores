import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const promos = [
  { code: "BRUNCH20", type: "Promo Code", discount: "20% off", status: "Active" },
  { code: "FAMILY30", type: "Coupon", discount: "$30 off", status: "Limited" },
];

const campaigns = [
  { name: "Weekend Dinner Push", channel: "Email + SMS", reach: "3.2k", status: "Running" },
  { name: "New Branch Launch", channel: "Social", reach: "12.6k", status: "Draft" },
];

export default function MarketingPage() {
  return (
    <SiteShell
      title="Marketing Features"
      description="Create promo codes, run email and SMS campaigns, and use social marketing to drive more restaurant traffic."
    >
      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-red-950">Promotions</h2>
              <p className="mt-2 text-sm text-red-600">Manage coupons, discount codes, and offers for dine-in and delivery customers.</p>
            </div>
            <Button className="rounded-3xl bg-red-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
              Create Campaign
            </Button>
          </div>

          <div className="mt-6 space-y-4">
            {promos.map((promo) => (
              <div key={promo.code} className="rounded-3xl border border-red-200 bg-red-50 px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-red-950">{promo.code}</p>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-700">
                    {promo.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-red-600">{promo.type} — {promo.discount}</p>
              </div>
            ))}
          </div>
        </Card>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Active campaigns</h3>
            <div className="mt-4 space-y-3 text-sm text-red-600">
              {campaigns.map((campaign) => (
                <div key={campaign.name} className="rounded-3xl bg-red-50 px-4 py-4">
                  <p className="font-medium text-red-950">{campaign.name}</p>
                  <p className="mt-1">Channel: {campaign.channel}</p>
                  <p className="mt-1">Reach: {campaign.reach}</p>
                  <p className="mt-1">Status: {campaign.status}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Campaign insights</h3>
            <div className="mt-4 space-y-3 text-sm text-red-600">
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Open rate</p>
                <p className="mt-1">58%</p>
              </div>
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Conversion</p>
                <p className="mt-1">11%</p>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </SiteShell>
  );
}
