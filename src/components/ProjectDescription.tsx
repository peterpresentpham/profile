import Link from 'next/link';

export function AccountAbstractionDescription() {
  return (
    <p className="text-gray-50">
      Account Abstraction Wallet with Social Recovery based on Zero-Knowledge Proof for hiding
      guardian's information. Read more detail{' '}
      <Link
        href="https://blog.peter-present.xyz/master-thesis"
        target="_blank"
        rel="noreferrer"
        className="text-purple-50 underline"
      >
        here
      </Link>
      .
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
  return (
    <p className="text-gray-50">
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Locomotive.png"
        alt="Locomotive"
        width="16"
        height="16"
        className="inline-block"
      />{' '}
      My blog app.
    </p>
  );
}

export function CaroDescription() {
  return <p className="text-gray-50">Caro application.</p>;
}
