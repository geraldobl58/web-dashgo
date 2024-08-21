import { Sidebar } from '@/components/sidebar'

type Props = {
  children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default MarketingLayout
