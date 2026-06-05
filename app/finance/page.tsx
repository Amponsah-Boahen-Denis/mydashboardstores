import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const financeMetrics = [
  { label: "Daily Revenue", value: "$4,900", trend: "+9%" },
  { label: "Monthly Revenue", value: "$122.4k", trend: "+12%" },
  { label: "Profit / Loss", value: "$18.2k", trend: "+3%" },
  { label: "Expenses", value: "$7.4k", trend: "-2%" },
];

const reports = [
  { name: "Sales Report", period: "This month", status: "Ready" },
  { name: "Expense Report", period: "This quarter", status: "Ready" },
  { name: "Tax Summary", period: "Year to date", status: "Draft" },
];

export default function FinancePage() {
  return (
    <SiteShell
      title="Financial Management"
      description="Track revenue, expenses, profit and loss, and export the reports your restaurant needs."
    >
      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-red-950">Revenue & reports</h2>
              <p className="mt-2 text-sm text-red-600">View daily and monthly performance, then export finance summaries in PDF or Excel.</p>
            </div>
            <Button className="rounded-3xl bg-red-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
              Export Reports
            </Button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {financeMetrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-red-200 bg-red-50 p-5">
                <p className="text-sm font-medium text-red-600">{metric.label}</p>
                <p className="mt-3 text-2xl font-semibold text-red-950">{metric.value}</p>
                <p className="mt-2 text-sm text-red-600">{metric.trend}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-red-200">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-red-50 text-red-600">
                <tr>
                  <th className="px-5 py-4 font-medium">Report</th>
                  <th className="px-5 py-4 font-medium">Period</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {reports.map((report) => (
                  <tr key={report.name}>
                    <td className="px-5 py-4 font-medium text-red-950">{report.name}</td>
                    <td className="px-5 py-4 text-red-600">{report.period}</td>
                    <td className="px-5 py-4 text-red-600">{report.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Monthly performance</h3>
            <div className="mt-5 grid gap-3">
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Revenue forecast: $135k</p>
                <p className="mt-1 text-sm text-red-600">Based on current orders and reservations.</p>
              </div>
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Tax filing status</p>
                <p className="mt-1 text-sm text-red-600">Q2 tax report is in review.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Expense tracking</h3>
            <p className="mt-3 text-sm text-red-600">Keep supplier payments, payroll costs, and operating expenses in sync.</p>
            <div className="mt-5 space-y-3 text-sm text-red-600">
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Food cost ratio</p>
                <p className="mt-1">28%</p>
              </div>
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Payroll & utilities</p>
                <p className="mt-1">$23.7k this month</p>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </SiteShell>
  );
}
