import Header from '../components/layout/Header'
import Button from '../components/common/Button'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold mb-4">Button Component Demo</h1>
        <Button size="small" shape="rounded-sm" label="Small Button" />
        <Button size="medium" shape="rounded-md" label="Medium Button" />
        <Button size="large" shape="rounded-full" label="Large Button" />
      </main>
    </>
  )
}
