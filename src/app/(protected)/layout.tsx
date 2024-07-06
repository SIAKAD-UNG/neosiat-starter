import { VerticalDashboardLayoutComponent } from "@/main/layouts/mahasiswa";

export default function ProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <VerticalDashboardLayoutComponent>
            {children}
        </VerticalDashboardLayoutComponent>
    )
}