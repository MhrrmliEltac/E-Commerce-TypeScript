"use client"
const AuthContainer = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="min-h-fit h-full w-full flex justify-center">{children}</div>
  )
}

export default AuthContainer