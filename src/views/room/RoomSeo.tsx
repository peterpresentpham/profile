/** Server-rendered text for crawlers and no-JS visitors; the room itself is client-only. */
export default function RoomSeo() {
  return (
    <div className="sr-only">
      <h1>Peter — I write software and make small worlds</h1>
      <p>
        Hanoi, Vietnam. B.Sc. IT and M.Sc. CS at HUST. Web apps, backends, blockchain protocols, and
        small browser games.
      </p>
      <ul>
        <li>
          <a
            href="https://github.com/peterpresentpham/seen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Như Hôm Qua
          </a>{' '}
          — a game about a day that repeats
        </li>
        <li>
          <a href="https://decipher.peter-present.xyz/" target="_blank" rel="noopener noreferrer">
            Decipher
          </a>{' '}
          — a new alien language every day
        </li>
        <li>
          <a href="https://fantasy.peter-present.xyz/" target="_blank" rel="noopener noreferrer">
            Fantasy World
          </a>{' '}
          — procedural maps
        </li>
        <li>
          <a
            href="https://blog.peter-present.xyz/master-thesis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Recovery ERC-4337 wallet with zero-knowledge social recovery
          </a>
        </li>
        <li>
          <a href="https://blog.peter-present.xyz/" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </li>
        <li>
          <a href="https://github.com/peterpresentpham" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
