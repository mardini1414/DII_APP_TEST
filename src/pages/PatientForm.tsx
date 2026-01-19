import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/Datepicker";
import { SelectField } from "@/components/SelectField";
import { useCreatePatient } from "@/hooks/use-create-patien";

const ROOM_OPTIONS = [
  { label: "Ruang Mawar 204", value: "Ruang Mawar 204" },
  { label: "Ruang Kenanga 205", value: "Ruang Kenanga 205" },
  { label: "Ruang Teratai 303", value: "Ruang Teratai 303" },
];

export default function PatientForm() {
  const { form, onSubmit, isLoading } = useCreatePatient();

  return (
    <div className="py-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-x-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input placeholder="input nama" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nik"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NIK</FormLabel>
                    <FormControl>
                      <Input placeholder="input nik" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="diagnosis"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Diagnosa</FormLabel>
                    <FormControl>
                      <Input placeholder="input diagnosa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-6">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tanggal masuk</FormLabel>
                    <FormControl>
                      <DatePicker {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="doctor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dokter</FormLabel>
                    <FormControl>
                      <Input placeholder="input nama dokter" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="room"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ruangan</FormLabel>
                    <FormControl>
                      <SelectField
                        options={ROOM_OPTIONS}
                        {...field}
                        placeholder="Pilih ruangan"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end pr-6">
            <Button disabled={isLoading} type="submit">
              Tambah
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
