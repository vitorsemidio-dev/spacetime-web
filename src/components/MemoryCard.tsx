import dayjs from 'dayjs'
import Image from 'next/image'

export interface MemoryCardProps {
  coverUrl: string
  createdAt: string
  text: string
  id: string
}

export function MemoryCard({ coverUrl, createdAt, text, id }: MemoryCardProps) {
  return (
    <div key={id} className="space-y-4">
      <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {dayjs(createdAt).format('D[ de ]MMMM[, ]YYYY')}
      </time>
      <Image
        src={coverUrl}
        alt=""
        width={592}
        height={280}
        className="aspect-video w-full rounded-lg object-cover"
      />
      <p className="text-lg leading-relaxed text-gray-100">{text}</p>
    </div>
  )
}
