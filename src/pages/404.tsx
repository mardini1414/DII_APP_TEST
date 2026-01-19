import { ArrowLeft, TriangleAlert } from "lucide-react";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <TriangleAlert className="mb-6 h-20 w-20" />

      <h1 className="mb-2 text-6xl font-bold tracking-tight">404</h1>
      <h2 className="mb-4 text-xl font-semibold">Halaman Tidak Ditemukan</h2>

      <p className="mb-8 max-w-md text-muted-foreground">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Beranda
      </Link>
    </div>
  );
}
