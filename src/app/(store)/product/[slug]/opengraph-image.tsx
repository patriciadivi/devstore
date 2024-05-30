import { apiFetch } from '@/data/api'
import { Product } from '@/data/types/products'
import { env } from '@/env'
import colors from 'tailwindcss/colors'
import { ImageResponse } from 'next/og'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProduct(slug: string): Promise<Product> {
  const response = await apiFetch(`/products`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products: Product[] = await response.json()

  const product = products.find((product) => product.slug === slug)

  if (!product) {
    throw new Error('No products found')
  }
  return product
}

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
