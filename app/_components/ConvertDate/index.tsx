import dayjs from 'dayjs'

type Props = {
  convertDate: string | number | Date
}

export default function ConvertDate({ convertDate }: Props) {
  const publishedAt = dayjs(convertDate).format('YYYY/MM/DD')

  return <time dateTime={convertDate.toString()}>{publishedAt}</time>
}
