import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export function BackHeaderTimeline() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 self-start text-sm text-gray-200 hover:text-gray-100"
    >
      <ChevronLeft className="h-4 w-4" />
      voltar à timeline
    </Link>
  )
}
