'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from './button'
import type { App } from '@/types/app'

interface AppCardProps {
  app: App
  onVote: (appId: string) => void
}

export function AppCard({ app, onVote }: AppCardProps) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-card rounded-lg border shadow-sm">
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16">
          <Image
            src={app.imageUrl}
            alt={app.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{app.name}</h3>
          <p className="text-gray-500 text-sm line-clamp-2">
            {app.description}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onVote(app.id)}
          className="flex items-center gap-2"
        >
          <span>▲</span>
          <span>{app.votes}</span>
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image
              src={app.maker.avatarUrl}
              alt={app.maker.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-500">
            {app.maker.name}
          </span>
        </div>
        <div className="flex gap-2">
          {app.badges.map((badge) => (
            <span
              key={badge}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 