// import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to ContenGenie AI Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is an AI-powered content generation tool that empowers African
          businesses to create engaging, personalized, and culturally relevant
          content efficiently and effectively.
        </p>
      </div>
    </div>
  )
}
