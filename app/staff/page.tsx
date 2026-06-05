import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const staff = [
  { name: "Olivia Hart", role: "Manager", schedule: "Mon-Fri 9am-5pm", attendance: "98%" },
  { name: "Sam Bennett", role: "Chef", schedule: "Wed-Sun 4pm-12am", attendance: "95%" },
  { name: "Priya Desai", role: "Server", schedule: "Tue-Sat 12pm-8pm", attendance: "99%" },
  { name: "Leo Carter", role: "Delivery Driver", schedule: "Daily 10am-6pm", attendance: "96%" },
];

const shifts = [
  { day: "Monday", shift: "Breakfast - 6 staff" },
  { day: "Wednesday", shift: "Dinner - 8 staff" },
  { day: "Friday", shift: "Weekend prep - 10 staff" },
];

export default function StaffPage() {
  return (
    <SiteShell
      title="Staff Management"
      description="Add employees, assign roles, track schedules, and review attendance and performance data."
    >
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-red-950">Employee roster</h2>
              <p className="mt-2 text-sm text-red-600">Staff roles, schedules, attendance metrics, and payroll readiness in one place.</p>
            </div>
            <Button className="rounded-3xl bg-red-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
              Add Employee
            </Button>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-red-200">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-red-50 text-red-600">
                <tr>
                  <th className="px-5 py-4 font-medium">Name</th>
                  <th className="px-5 py-4 font-medium">Role</th>
                  <th className="px-5 py-4 font-medium">Schedule</th>
                  <th className="px-5 py-4 font-medium">Attendance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {staff.map((employee) => (
                  <tr key={employee.name}>
                    <td className="px-5 py-4 font-medium text-red-950">{employee.name}</td>
                    <td className="px-5 py-4 text-red-600">{employee.role}</td>
                    <td className="px-5 py-4 text-red-600">{employee.schedule}</td>
                    <td className="px-5 py-4 text-red-600">{employee.attendance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Weekly schedule</h3>
            <div className="mt-4 space-y-3 text-sm text-red-600">
              {shifts.map((shift) => (
                <div key={shift.day} className="rounded-3xl bg-red-50 px-4 py-4">
                  <p className="font-medium text-red-950">{shift.day}</p>
                  <p className="mt-1">{shift.shift}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Payroll summary</h3>
            <div className="mt-4 space-y-3 text-sm text-red-600">
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Total weekly payroll</p>
                <p className="mt-1">$7,820</p>
              </div>
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Payroll alerts</p>
                <p className="mt-1">2 invoices due</p>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </SiteShell>
  );
}
