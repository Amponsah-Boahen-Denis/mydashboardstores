import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const businessInfo = {
  name: "Urban Table Bistro",
  address: "228 Market Street, Suite 200",
  phone: "(555) 214-7820",
  email: "info@urbantable.com",
};

const hours = [
  { day: "Monday - Friday", times: "8:00 AM - 10:00 PM" },
  { day: "Saturday", times: "9:00 AM - 11:00 PM" },
  { day: "Sunday", times: "9:00 AM - 9:00 PM" },
];

const taxSettings = [
  { label: "Sales Tax", value: "8.5%" },
  { label: "Service Charge", value: "10%" },
  { label: "Digital Payment Fee", value: "2.5%" },
];

export default function SettingsPage() {
  return (
    <SiteShell
      title="Admin Settings"
      description="Configure restaurant details, payment methods, operating hours, tax rates, and user permissions."
    >
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-red-950">Business information</h2>
          <p className="mt-2 text-sm text-red-600">Update your restaurant identity, logo, contact details, and brand settings.</p>

          <div className="mt-6 grid gap-4 text-sm text-red-600">
            <div className="rounded-3xl border border-red-200 bg-red-50 px-4 py-4">
              <p className="font-medium text-red-950">Name</p>
              <p className="mt-1">{businessInfo.name}</p>
            </div>
            <div className="rounded-3xl border border-red-200 bg-red-50 px-4 py-4">
              <p className="font-medium text-red-950">Address</p>
              <p className="mt-1">{businessInfo.address}</p>
            </div>
            <div className="rounded-3xl border border-red-200 bg-red-50 px-4 py-4">
              <p className="font-medium text-red-950">Phone</p>
              <p className="mt-1">{businessInfo.phone}</p>
            </div>
            <div className="rounded-3xl border border-red-200 bg-red-50 px-4 py-4">
              <p className="font-medium text-red-950">Email</p>
              <p className="mt-1">{businessInfo.email}</p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-red-200 bg-red-50 p-6">
            <h3 className="text-lg font-semibold text-red-950">User permissions</h3>
            <p className="mt-2 text-sm text-red-600">Control access levels for managers, kitchen staff, front-of-house, and delivery teams.</p>
          </div>
        </Card>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Operating hours</h3>
            <div className="mt-4 space-y-3 text-sm text-red-600">
              {hours.map((item) => (
                <div key={item.day} className="rounded-3xl bg-red-50 px-4 py-4">
                  <p className="font-medium text-red-950">{item.day}</p>
                  <p className="mt-1">{item.times}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Tax settings</h3>
            <div className="mt-4 space-y-3 text-sm text-red-600">
              {taxSettings.map((setting) => (
                <div key={setting.label} className="rounded-3xl bg-red-50 px-4 py-4">
                  <p className="font-medium text-red-950">{setting.label}</p>
                  <p className="mt-1">{setting.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </SiteShell>
  );
}
