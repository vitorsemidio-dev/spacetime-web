export function StorybookWrapper({ children }: any) {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-900 text-gray-100">
      {children}
    </main>
  )
}
