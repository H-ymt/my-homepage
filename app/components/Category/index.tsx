import { Category } from '@/lib/microcms'

type Props = {
  category?: Category
}

export default function CategoryComponent({ category }: Props) {
  if (!category) {
    return null
  }
  return <span>{category.name}</span>
}
