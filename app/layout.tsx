import './../styles/globals.css'
import 'animate.css';
import { Inter } from 'next/font/google'
import NavBar from '@/components/main-nav'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Providers } from '@/redux/provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Vienr Food | Food Safety Management',
	description: 'Food Safety Management Blog, writing about FSMS, focusing on HACCP',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning={true}
		>
			<body
				className={`${inter.className}`}
				suppressHydrationWarning={true}
			>
				<Providers>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
					>
						<NavBar />
						{children}
						<Footer />
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	)
}
