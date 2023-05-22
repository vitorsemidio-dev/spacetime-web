import { BackHeaderTimeline } from '@/components/BackHeaderTimeline'
import { NewMemoryForm } from '@/components/NewMemoryForm'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8">
      <BackHeaderTimeline />

      <NewMemoryForm />
    </div>
  )
}
