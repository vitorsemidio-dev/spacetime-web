import { ArrowRight } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

import { EmptyMemories } from '@/components/EmptyMemories'
import { MemoryCard } from '@/components/MemoryCard'
import { api } from '@/lib/api'

interface MemoryExcerpt {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: MemoryExcerpt[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <MemoryCard
              coverUrl={memory.coverUrl}
              createdAt={memory.createdAt}
              text={memory.excerpt}
              id={memory.id}
            />
            <Link
              href={`/memories/${memory.id}`}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              Ler mais
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
