import { apiFetch } from '@/data/api'
import { Product } from '@/data/types/products'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await apiFetch('/products', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products: Product[] = await response.json()
  const featuredProducts = products.filter((product) => product.featured)

  return featuredProducts
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highLightedProduct, ...otherProducts] = await getFeaturedProducts()

  // console.log('---->', highLightedProduct)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid max-h-[710px] grid-cols-9 grid-rows-6 gap-6">
        <Link
          href={`/product/${highLightedProduct.slug}`}
          className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline"
        >
          <Image
            src={highLightedProduct.image}
            className="group-hover:scale-105 transition-transform duration-500"
            width={860}
            height={860}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{highLightedProduct.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {highLightedProduct.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>

        {otherProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline"
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-500"
              width={860}
              height={860}
              quality={100}
              alt=""
            />

            <div className="absolute sm:bottom-10 sm:right-2 lg:bottom-10 lg:right-10 h-12 flex items-center gap-2 sm:max-w-[220px] lg:max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Suspense>
  )
}
