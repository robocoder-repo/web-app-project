
import Image from 'next/image';

const FooterLink = ({ href, src, alt, text }) => (
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src={src}
      alt={alt}
      width={16}
      height={16}
    />
    {text}
  </a>
);

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <FooterLink
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        src="https://nextjs.org/icons/file.svg"
        alt="File icon"
        text="Learn"
      />
      <FooterLink
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        src="https://nextjs.org/icons/window.svg"
        alt="Window icon"
        text="Examples"
      />
      <FooterLink
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        src="https://nextjs.org/icons/globe.svg"
        alt="Globe icon"
        text="Next.js"
      />
    </footer>
  );
}
