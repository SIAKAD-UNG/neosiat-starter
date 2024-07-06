import ClientComponent from "@/main/components/client-component";
import { VerticalDashboardLayoutComponent } from "@/main/layouts/mahasiswa";

export default function Home() {
  return (
    <VerticalDashboardLayoutComponent>
      <p>Welcome</p>

      <ClientComponent />
    </VerticalDashboardLayoutComponent>
  );
}
