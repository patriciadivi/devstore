'use client'

import { Skeleton } from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'

export default function SearchLoading() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para:{' '}
        <span className="font-semibold">
          {query && query.charAt(0).toUpperCase() + query.slice(1)}
        </span>
      </p>

      <div className="grid grid-cols-3 grid-flow-row-3 gap-6">
        {Array.from({ length: 6 }).map((index) => (
          <Skeleton
            className="h-[380px] lg:h-[325px]"
            key={`index: ${index}`}
          />
        ))}
      </div>
    </div>
  )
}
