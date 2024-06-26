import { env } from '@/env'

// export function api(path: string, init?: RequestInit) {
//   const baseUrl = env.NEXT_PUBLIC_API_BASE_URL || 'localhost'
//   const apiPrefix = '/api'
//   const url = new URL(apiPrefix.concat(path), baseUrl)

//   return fetch(url, init)
// }

export async function apiFetch(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL(path, baseUrl)

  return fetch(url, init)
}
