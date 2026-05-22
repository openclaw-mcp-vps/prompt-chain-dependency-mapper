import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Chain Dependency Mapper',
  description: 'Visualize AI prompt chains and their dependencies. Map complex AI prompt workflows, identify optimization opportunities, and reduce token waste.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7fb1409e-f6f4-4aa2-9ca7-cdb70416660e"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
