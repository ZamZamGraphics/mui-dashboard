import DashboardLayout from "@/components/DashboardLayout";

export const metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard",
  },
};

export default function Layout({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
