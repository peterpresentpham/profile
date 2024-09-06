/* eslint-disable @typescript-eslint/no-require-imports */
import Image from 'next/image';

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

export function ReactHookUtils() {
  return (
    <p className="text-base text-gray-50">
      Simple{' '}
      <Image
        unoptimized={true}
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Lady%20Beetle.png"
        alt="beetle"
        width="16"
        height="16"
        className="inline-block"
      />{' '}
      package which provides some utility hooks.
    </p>
  );
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
