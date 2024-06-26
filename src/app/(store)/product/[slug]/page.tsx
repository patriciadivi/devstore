import { AddToCartButton } from '@/components/add-to-cart-button'
import { apiFetch } from '@/data/api'
import { Product } from '@/data/types/products'
import { Metadata } from 'next'
import { z } from 'zod'
import Image from 'next/image'
import { Suspense } from 'react'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slugParams: string): Promise<Product> {
  const slug = z.string().parse(slugParams)
  // console.log('--->', slug)

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

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export async function generateStaticParams() {
  // const response = await api('/products/featured')
  const response = await apiFetch('/products')
  const products: Product[] = await response.json()

  return products.map((product) => {
    return { slug: product.slug }
  })
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative grid max-h-[860px] grid-cols-3">
        <div className="col-span-2 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={800}
            height={800}
            quality={100}
          />
        </div>

        <div className="flex flex-col justify-center px-12">
          <h1 className="text-3x1 font-bold leading-tight">{product.title}</h1>

          <p className="mt-2 leading-relaxed text-zinc-45">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
            <span>
              Em 12x s/ juros de{' '}
              {(product.price / 12).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>

          <div className="mt-8 space-y-4">
            <span className="block font-semibold">Tamanhos</span>

            <div className="flex gap-2">
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
              >
                P
              </button>
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
              >
                M
              </button>
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
              >
                G
              </button>
              <button
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
              >
                GG
              </button>
            </div>
          </div>

          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </Suspense>
  )
}
