import "@styles/globals.css"

export const metadata = {
    title: "jay-portfolio-nextjs",
    description: "This is a personla website portfolio created in next js and deployed on aws amplify"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout