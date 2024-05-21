import dayjs from 'dayjs'

type Props = {
  convertDate: string | number | Date
  className?: string
}

export default function ConvertDate({ convertDate, ...props }: Props) {
  const publishedAt = dayjs(convertDate).format('YYYY/MM/DD')

  return (
    <time dateTime={convertDate.toString()} {...props}>
      {publishedAt}
    </time>
  )
}
