import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const overviewStats = [
  { label: "Today's Sales", value: "$12.8k", change: "+18%" },
  { label: "Total Orders", value: "184", change: "+7%" },
  { label: "Pending Orders", value: "23", change: "-3%" },
  { label: "Completed Orders", value: "161", change: "+10%" },
  { label: "Total Customers", value: "1,280", change: "+5%" },
  { label: "Inventory Alerts", value: "4", change: "High priority" },
];

const popularItems = [
  { name: "Truffle Mushroom Pizza", sold: 34 },
  { name: "Grilled Salmon Bowl", sold: 26 },
  { name: "Spicy Chicken Tacos", sold: 19 },
  { name: "Signature Cheeseburger", sold: 17 },
];

const quickActions = [
  "Add Menu Item",
  "View New Orders",
  "Approve Reservation",
  "Track Inventory",
  "Add Employee",
  "Generate Report",
  "Create Promo Code",
  "Manage Branches",
];

const featureSections = [
  {
    title: "Menu Management",
    items: [
      "Add, edit, delete menu items",
      "Upload food images",
      "Set prices and availability",
      "Create combo meals",
    ],
  },
  {
    title: "Order Management",
    items: [
      "Accept or reject orders",
      "Track status in real time",
      "Assign orders to staff",
      "Print kitchen receipts",
    ],
  },
  {
    title: "Reservation Management",
    items: [
      "Table booking calendar",
      "Approve and cancel requests",
      "Manage seating assignments",
      "Customer reservation notes",
    ],
  },
  {
    title: "Inventory Management",
    items: [
      "Stock tracking",
      "Low-stock alerts",
      "Supplier & purchase records",
      "Expiry date monitoring",
    ],
  },
  {
    title: "Staff Management",
    items: [
      "Employee roles & schedules",
      "Attendance tracking",
      "Payroll overview",
      "Performance reports",
    ],
  },
  {
    title: "Marketing & Analytics",
    items: [
      "Coupon and promo tools",
      "Email / SMS campaigns",
      "Sales trends and peak times",
      "Branch performance reports",
    ],
  },
];

export default function Home() {
  return (
    <SiteShell
      title="Dashboard"
      description="Monitor sales, manage menus, process orders, organize reservations, and run the business from one admin experience."
    >
      <section className="grid gap-4 xl:grid-cols-[1fr_340px]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {overviewStats.map((stat) => (
            <Card key={stat.label} className="p-6">
              <p className="text-sm font-medium text-red-600">{stat.label}</p>
              <p className="mt-4 text-3xl font-semibold text-red-950">{stat.value}</p>
              <p className="mt-2 text-sm text-red-600">{stat.change}</p>
            </Card>
          ))}
        </div>

        <aside className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-red-600">Revenue Forecast</p>
                <p className="mt-2 text-2xl font-semibold text-red-950">$68.4k</p>
              </div>
              <Badge className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">+14%</Badge>
            </div>
            <div className="mt-6 space-y-3">
              <div className="h-2 overflow-hidden rounded-full bg-red-100">
                <div className="h-full w-[72%] rounded-full bg-red-700" />
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-red-100">
                <div className="h-full w-[54%] rounded-full bg-red-500" />
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-red-100">
                <div className="h-full w-[86%] rounded-full bg-red-300" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <p className="text-sm font-medium text-red-600">Quick Actions</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {quickActions.map((action) => (
                <Button
                  key={action}
                  variant="secondary"
                  size="sm"
                  className="w-full justify-start text-left"
                >
                  {action}
                </Button>
              ))}
            </div>
          </Card>
        </aside>
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <CardTitle className="text-xl">Sales & menu performance</CardTitle>
              <CardDescription>Revenue trends, best sellers, and peak order times in one view.</CardDescription>
            </div>
            <Badge variant="outline">Live</Badge>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {popularItems.map((item) => (
              <Card key={item.name} className="rounded-3xl border-red-200 bg-red-50 p-4 shadow-none">
                <p className="font-medium text-red-950">{item.name}</p>
                <p className="mt-2 text-sm text-red-600">Sold {item.sold} times today</p>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-red-950 p-5 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-red-200">Revenue Chart</p>
            <div className="mt-5 grid gap-3">
              {[72, 50, 85, 60, 95, 70, 82].map((value, index) => (
                <div key={index} className="flex items-end gap-3">
                  <div className="h-20 w-full rounded-full bg-red-800" style={{ height: `${value}%` }} />
                  <span className="min-w-[24px] text-sm text-red-200">{value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          {featureSections.slice(0, 3).map((section) => (
            <Card key={section.title} className="p-6">
              <h3 className="text-lg font-semibold text-red-950">{section.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-red-600">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-red-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featureSections.slice(3).map((section) => (
          <Card key={section.title} className="p-6">
            <h3 className="text-lg font-semibold text-red-950">{section.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-red-600">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-red-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <Card className="mt-8 p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-600">Admin Settings</p>
            <h2 className="mt-3 text-2xl font-semibold text-red-950">Business controls and restaurant policies</h2>
            <p className="mt-2 text-red-600">
              Configure business info, payment methods, operating hours, tax rules, and user permissions from a single control panel.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:gap-3">
            <Button>View Admin Settings</Button>
            <Button variant="outline">Export Report</Button>
          </div>
        </div>
      </Card>
    </SiteShell>
  );
}
