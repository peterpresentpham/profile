import Link from 'next/link';
import Image from 'next/image';

export function AccountAbstractionDescription() {
  return (
    <p className="text-gray-50">
      {
        'ERC-4337 account abstraction wallet with social recovery, leveraging zero-knowledge proofs to preserve guardian privacy. Read more details '
      }
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
  return <p className="text-gray-50">Personal portfolio and professional profile website.</p>;
}

export function FantasyWorldDescription() {
  return (
    <p className="text-gray-50">
      {
        'Procedural fantasy world map generator with deterministic seeds, terrain simulation, hydrology, nations, and ethnic regions.'
      }
    </p>
  );
}

export function NextAppDescription() {
  return (
    <p className="text-gray-50">
      <Image
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Locomotive.png"
        alt="Locomotive"
        width={16}
        height={16}
        className="inline-block"
        unoptimized
      />{' '}
      Personal blog platform for sharing technical articles and notes.
    </p>
  );
}

export function CaroDescription() {
  return <p className="text-gray-50">Interactive Caro (Gomoku) web application.</p>;
}

export function PikachuDescription() {
  return <p className="text-gray-50">Browser-based Pikachu tile-matching game.</p>;
}

export function ProcessDescription() {
  return (
    <p className="text-gray-50">
      Process scheduling simulator for visualizing CPU scheduling behavior.
    </p>
  );
}
