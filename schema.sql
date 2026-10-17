import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '모락모락 | 나의 작은 정원', description: '식물을 키우는 따뜻한 수집형 힐링 게임' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ko"><body>{children}</body></html> }
