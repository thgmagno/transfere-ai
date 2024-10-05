import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'

interface Props {
  label: string
  name: string
}

export function UserSelect({ label, name }: Props) {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label className="text-right">{label}</Label>
      <Select name={name}>
        <SelectTrigger className="col-span-3">
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Usuário</SelectLabel>
            <SelectItem value="1">Ana</SelectItem>
            <SelectItem value="2">Pedro</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}