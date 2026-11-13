import { Fragment } from 'react';

// Tiny inline markup parser used by the content files:
//   [text](url)  -> link        **text** -> highlighted        *text* -> italic
// Markers can nest, e.g. **[Dr. Someone](https://example.com)**.

const MARKUP_PATTERN = /\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

const isExternalUrl = (url) => /^https?:\/\//i.test(url);

function renderNodes(text, linkClassName) {
  const nodes = [];
  let cursor = 0;

  for (const match of text.matchAll(MARKUP_PATTERN)) {
    const [whole, highlighted, italic, linkText, linkUrl] = match;
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));

    const key = nodes.length;
    const recurse = (inner) => renderNodes(inner, linkClassName);

    if (highlighted !== undefined) {
      nodes.push(<span key={key} className="rich-highlight">{recurse(highlighted)}</span>);
    } else if (italic !== undefined) {
      nodes.push(<i key={key}>{recurse(italic)}</i>);
    } else {
      const external = isExternalUrl(linkUrl);
      nodes.push(
        <a
          key={key}
          href={linkUrl}
          className={`interactive-link ${linkClassName}`.trim()}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
        >
          {recurse(linkText)}
        </a>,
      );
    }
    cursor = match.index + whole.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes.map((node, index) => <Fragment key={index}>{node}</Fragment>);
}

/** Renders a string containing the inline markup described above. */
export default function RichText({ text, linkClassName = '' }) {
  return <>{renderNodes(text, linkClassName)}</>;
}
