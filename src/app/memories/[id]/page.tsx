import { BackHeaderTimeline } from '@/components/BackHeaderTimeline'
import { MemoryCard } from '@/components/MemoryCard'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'

export interface Memory {
  id: string
  coverUrl: string
  content: string
  createdAt: string
}

interface MemoryDetailProps {
  params: {
    id: string
  }
}

export default async function MemoryDetail({ params }: MemoryDetailProps) {
  const memoryId = params.id

  const token = cookies().get('token')?.value
  const { data } = await api.get<Memory>(`/memories/${memoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return (
    <div className="">
      <div className="flex flex-col gap-4 p-8">
        <BackHeaderTimeline />
        <MemoryCard
          coverUrl={data.coverUrl}
          createdAt={data.createdAt}
          text={data.content}
          id={data.id}
        />
      </div>
    </div>
  )
}
