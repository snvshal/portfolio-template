import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PageComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <Header />
      <main className="max-w-6xl min-h-[calc(100dvh-10rem)] mx-auto px-6 md:px-16 py-8 md:py-24 border-x border-ink/20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
