/** Server-rendered text for crawlers and no-JS visitors; the room itself is client-only. */
export default function RoomSeo() {
  return (
    <div className="sr-only">
      <h1>Peter Present — I write software and make small worlds</h1>
      <p>
        I am a software developer. I build web apps, backends and blockchain protocols, and I keep
        making small browser worlds: maps that generate themselves, a game about days that repeat,
        and a language that does not exist yet. This page is a cosy room that follows your clock:
        the lamp comes on when it gets dark where you are, and the window shows a valley whose
        weather, season, moon phase and visitors change every day.
      </p>

      <h2>Projects</h2>
      <ul>
        <li>
          <a
            href="https://github.com/peterpresentpham/seen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Như Hôm Qua
          </a>{' '}
          — a short browser game about a young office worker&apos;s probation week. Every day
          repeats yesterday, unless you do something different. Built with Svelte 5 and TypeScript,
          in Vietnamese and English.
        </li>
        <li>
          <a href="https://decipher.peter-present.xyz/" target="_blank" rel="noopener noreferrer">
            Decipher
          </a>{' '}
          — a new alien language every day, generated entirely from the UTC date with no backend.
          Read sentences carved on stone tablets, work out the grammar, solve puzzles and write a
          passage back in the alien script.
        </li>
        <li>
          <a href="https://fantasy.peter-present.xyz/" target="_blank" rel="noopener noreferrer">
            Fantasy World
          </a>{' '}
          — a procedural fantasy world map generator with deterministic seeds, terrain simulation,
          hydrology, nations and ethnic regions.
        </li>
        <li>
          <a
            href="https://experiment.peter-present.xyz/blog/master-thesis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Recovery ERC-4337 wallet with zero-knowledge social recovery
          </a>{' '}
          — a master&apos;s thesis project: guardians help you recover a lost wallet without
          revealing who they are, using zero-knowledge proofs (Circom, Solidity, wagmi).
        </li>
      </ul>

      <h2>Skills</h2>
      <p>
        Web: TypeScript, React, Next.js, Svelte, NestJS, PostgreSQL. Blockchain: Solidity, ERC-4337,
        Circom, wagmi.
      </p>

      <h2>Elsewhere</h2>
      <ul>
        <li>
          <a href="https://blog.peter-present.xyz/" target="_blank" rel="noopener noreferrer">
            Blog
          </a>{' '}
          — notes on account abstraction, social recovery and zero-knowledge proofs
        </li>
        <li>
          <a href="https://github.com/peterpresentpham" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/peter-present/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
