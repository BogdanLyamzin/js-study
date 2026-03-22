import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contacts')({
  component: Contacts,
})

function Contacts() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
        Our Contacts
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          phone: +38067-555-55-55
        </p>
        <p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          email: bogdan@gmail.com
        </p>
      </section>
    </main>
  )
}
