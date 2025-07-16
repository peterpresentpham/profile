import Image from 'next/image';
import Link from 'next/link';

export function AccountAbstractionDescription() {
  return (
    <p className="text-gray-50">
      Recovery Account Abstraction Wallet based on ERC04337 that uses zero-knowledge proof for
      hiding guardian's information.
    </p>
  );
}

export function ProfileDescription() {
  return <p className="text-gray-50">My personal profile.</p>;
}

export function EthGraphQuery() {
  return (
    <p className="text-gray-50">
      Simple package for creating query to{' '}
      <Link
        href="https://thegraph.com/"
        target="_blank"
        rel="noreferrer"
        className="text-purple-50 underline"
      >
        the GraphQL
      </Link>
      .
    </p>
  );
}

export function NextAppDescription() {
  return <p className="text-gray-50">My blog app</p>;
}

export function LedCaroDescription() {
  return (
    <p className="text-gray-50">
      Simple{' '}
      <Image
        unoptimized={true}
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Jellyfish.png"
        alt="jellyfish"
        width="16"
        height="16"
        className="inline-block"
      />{' '}
      caro.
    </p>
  );
}
