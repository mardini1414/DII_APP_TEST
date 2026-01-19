import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
  value?: Date;
  onChange?: (date?: Date) => void;
  onBlur?: () => void;
  disabled?: boolean;
};

export function DatePicker({
  value,
  onChange,
  onBlur,
  disabled,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          onBlur={onBlur}
          className={`w-full justify-start text-left font-normal ${
            !value && "text-muted-foreground"
          }`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? value.toLocaleDateString() : <span>Pilih tanggal</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            if (!date) return;
            onChange?.(date);
          }}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}
