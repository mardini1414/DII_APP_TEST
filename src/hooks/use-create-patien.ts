import { patientCreateSchema } from "@/schemes/patient-create-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

export const useCreatePatient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof patientCreateSchema>>({
    resolver: zodResolver(patientCreateSchema),
    defaultValues: {
      name: "",
      nik: "",
      diagnosis: "",
      doctor: "",
      date: new Date(),
      room: "",
    },
  });

  function onSubmit() {
    setIsLoading(true);

    const delay = 500;

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Pasien berhasil di input!");
      form.reset();
    }, delay);
  }

  return {
    form,
    onSubmit,
    isLoading,
  };
};
