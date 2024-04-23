import './globals.css';
import Script from "next/script";

export const metadata = {
    title: 'VideoGigaGAN: Detail-rich Video Super-Resolution',
    description: 'VideoGigaGAN is a new generative VSR model that can produce videos with high-frequency details and temporal consistency.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-K8EZ9CD7B0"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K8EZ9CD7B0');
          `}
            </Script>
        </head>
        <body>{children}</body>
        </html>
    )
}
