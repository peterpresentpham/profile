/* eslint-disable quotes */
import Link from 'next/link';
import { ComponentProps } from 'react';
import CssHeading from 'src/components/CssHeading';

const ARTICLES = [
  {
    id: 'react-rendering-pipeline',
    title: 'React Rendering Pipeline',
    description:
      'An analysis of the rendering pipeline of React from version 16 onward, covering the reconciler, fiber architecture, and commit phases.',
    url: 'https://dev.to/peter-present/react-rendering-pipeline-2gfj',
    date: 'Jun 2026',
    tags: ['react'],
  },
  {
    id: 'redis-event-driven-architecture',
    title: "Redis's Event-Driven Architecture and the ae Event Loop",
    description:
      'How Redis handles high concurrency despite being single-threaded — a deep dive into the ae event loop and its I/O multiplexing model.',
    url: 'https://dev.to/peter-present/rediss-event-driven-architecture-and-the-ae-event-loop-ica',
    date: 'Jun 2026',
    tags: ['redis'],
  },
  {
    id: 'redis-client-connects',
    title: 'What actually happens when a Redis client connects?',
    description:
      'A step-by-step look at the TCP handshake, socket registration, and internal state Redis sets up when a new client connection arrives.',
    url: 'https://dev.to/peter-present/what-actually-happens-when-a-redis-client-connects-57n4',
    date: 'Jun 2026',
    tags: ['redis', 'tcp'],
  },
];

export default function Articles(params: ComponentProps<'div'>) {
  return (
    <div {...params} id="articles" className="container">
      <CssHeading title="writing" />
      <ul className="mt-10 divide-y divide-gray-100/10">
        {ARTICLES.map((article) => (
          <li key={article.id} className="py-5">
            <Link
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-1"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="hover-text font-medium group-hover:text-white">
                  {article.title}
                </span>
                <span className="shrink-0 text-sm text-gray-50">{article.date}</span>
              </div>
              <p className="text-sm text-gray-50">{article.description}</p>
              <div className="mt-1 flex gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded px-1.5 py-0.5 text-xs text-gray-50 ring-1 ring-gray-100/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
