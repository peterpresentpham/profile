/* eslint-disable @typescript-eslint/no-require-imports */
import Image from 'next/image';

export function AccountAbstractionDescription() {
  return (
    <p className="text-base text-gray-50">
      Recovery Account Abstraction Wallet that uses zero-knowledge proof. You can see more about{' '}
      <a
        href="https://github.com/phamhongphuc1999/account-abstraction-contract"
        target="_blank"
        rel="noreferrer"
        className="text-purple-50 underline"
      >
        smart contract system
      </a>{' '}
      and{' '}
      <a
        href="https://github.com/phamhongphuc1999/bundler"
        target="_blank"
        rel="noreferrer"
        className="text-purple-50 underline"
      >
        bundler
      </a>
      .
    </p>
  );
}

export function ProfileDescription() {
  return <p className="text-base text-gray-50">My personal profile.</p>;
}

export function EthGraphQuery() {
  return (
    <p className="text-base text-gray-50">
      Simple package for creating query to{' '}
      <a
        href="https://thegraph.com/"
        target="_blank"
        rel="noreferrer"
        className="text-purple-50 underline"
      >
        the GraphQL
      </a>
      .
    </p>
  );
}

export function NextAppDescription() {
  return <p className="text-base text-gray-50">My document</p>;
}

export function LedCaroDescription() {
  return (
    <p className="text-base text-gray-50">
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
