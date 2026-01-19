import z from "zod";

export const patientCreateSchema = z.object({
  name: z.string().min(3, {
    error: "Minimal 3 karakter",
  }),
  nik: z
    .string()
    .length(16, { error: "Harus 16 digit" })
    .regex(/^\d+$/, { error: "Harus berupa angka" }),
  diagnosis: z
    .string()
    .min(3, {
      error: "Minimal 3 karakter",
    })
    .max(50, { error: "Maximal 50 karakter" }),
  date: z.date({
    error: (issue) =>
      issue.input === undefined
        ? "Tanggal wajib diisi"
        : "Format tanggal salah",
  }),
  doctor: z
    .string()
    .min(3, {
      error: "Minimal 3 karakter",
    })
    .max(50, { error: "Maximal 50 karakter" }),
  room: z.string().min(1, { error: "Ruangan wajib diisi" }),
});
