interface HeaderProps {
  title: string
  contentButtons?: React.ReactNode
}

export const Header = ({ title, contentButtons }: HeaderProps) => {
  return (
    <header className="w-full h-16 shadow-sm border-b p-4 bg-white">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-[20px] text-primary">{title}</h1>
        {contentButtons && contentButtons}
      </div>
    </header>
  )
}
