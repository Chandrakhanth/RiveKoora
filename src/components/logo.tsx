import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png" 
        alt="Logo"
        width={100}
        height={100}
        priority
        className="object-contain"
      />
    </Link>
  );
}
