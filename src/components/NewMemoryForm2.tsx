'use client'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import { api } from '../lib/api'

export function NewMemoryForm2() {
  // const api: any = {}
  // const Cookie: any = {}
  // const router: any = {}
  const router = useRouter()

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('coverUrl')

    let coverUrl = ''

    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)

      coverUrl = uploadResponse.data.fileUrl
    }

    const token = Cookie.get('token')

    await api.post(
      '/memories',
      {
        coverUrl,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    router.push('/')
  }
  return (
    <div>
      <h2>Hello Storybook</h2>
      <button disabled onClick={() => handleCreateMemory}>
        Teste
      </button>
    </div>
  )
}
