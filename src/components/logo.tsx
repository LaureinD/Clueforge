import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
    imageSize?: number;
    textSize?: string;
    href?: string;
    displayText?: boolean;
};

export default function Logo({ imageSize = 48, textSize = 'text-2xl', href = '/', displayText = true }: LogoProps) {
    const img = (
        <Image
            src="/logos/ClueForge.png"
            alt="ClueForge Logo"
            width={imageSize}
            height={imageSize}
            priority
        />
    );

    return href
        ? <Link href={href} className="flex gap-2 items-center">
            {img}
            {displayText &&
                <p className={"font-bold" + " " + textSize}>Clue<span className="text-accent">Forge</span></p>
            }
        </Link>
        : <div className="flex gap-2 items-center">
            {img}
            {displayText &&
                <p className={"font-bold" + " " + textSize}>Clue<span className="text-accent">Forge</span></p>
            }
          </div>;
}
