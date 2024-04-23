import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <span className="text-xl font-bold">VideoGigaGAN</span>
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="#abstract">Abstract</Link></li>
                        <li><Link href="#method-overview">Method Overview</Link></li>
                        <li><Link href="#ablation">Ablation Study</Link></li>
                        <li><Link href="#comparison">Comparison</Link></li>
                        <li><Link href="#4xresults">4x Results</Link></li>
                        <li><Link href="#8xresults">8x Results</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
