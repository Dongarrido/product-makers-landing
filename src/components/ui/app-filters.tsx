'use client'

import React from 'react'
import { cn } from '@/lib/utils'

type TimeFilter = 'daily' | 'weekly' | 'all-time'

interface AppFiltersProps {
  currentFilter: TimeFilter
  onFilterChange: (filter: TimeFilter) => void
}

export function AppFilters({ currentFilter, onFilterChange }: AppFiltersProps) {
  return (
    <div className="flex items-center w-full border rounded-md p-1 bg-white mb-6">
      <button
        onClick={() => onFilterChange('daily')}
        className={cn(
          'flex-1 px-3 py-1 text-sm rounded-md transition-colors text-center',
          currentFilter === 'daily'
            ? 'bg-gray-100 text-gray-900 font-medium'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        Daily
      </button>
      <button
        onClick={() => onFilterChange('weekly')}
        className={cn(
          'flex-1 px-3 py-1 text-sm rounded-md transition-colors text-center',
          currentFilter === 'weekly'
            ? 'bg-gray-100 text-gray-900 font-medium'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        Weekly
      </button>
      <button
        onClick={() => onFilterChange('all-time')}
        className={cn(
          'flex-1 px-3 py-1 text-sm rounded-md transition-colors text-center',
          currentFilter === 'all-time'
            ? 'bg-gray-100 text-gray-900 font-medium'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        All Time
      </button>
    </div>
  )
} 