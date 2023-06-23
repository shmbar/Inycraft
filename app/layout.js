import './globals.css'
import Layout from '@/components/Layout/Layout';
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});


 const title= 'Inycraft - Web Applications Developments Services'
 const description= 'We provide the fastest, most modern, affordable and aesthetic web apps development services to make your business grow. Get a free online estimate now!'


export const metadata = {
  icons: { icon: '/icon.ico', },
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1, },
  title: title,
  description: description,
  keywords: ['Software', 'Web Applications'],
  openGraph: {
    type:'website',
    title: title,
    description: description,
    url: 'https://www.inycraft.com',
    siteName: 'Inycraft.com',
    images: [
      {
        url: 'https://images2.imgbox.com/fa/e3/FOHVJyvq_o.pn',
        width: 1200,
        height: 630,
        alt: 'company logo',
        type: "image/png",
      },
    ]
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
