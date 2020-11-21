// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".card.svelte-5q9eo4.svelte-5q9eo4{height:10rem}.section.svelte-5q9eo4.svelte-5q9eo4{width:100%;margin:1rem 0;display:flex;flex-wrap:wrap;flex-direction:row;align-items:center;justify-content:space-evenly}.section.svelte-5q9eo4>.svelte-5q9eo4{margin:0.25rem}h2.svelte-5q9eo4.svelte-5q9eo4{font-size:2.25rem;line-height:1;margin-top:1.25rem;margin-bottom:0.25rem;font-weight:700}span.followers.svelte-5q9eo4.svelte-5q9eo4{text-transform:uppercase;letter-spacing:0.5rem}img.icon.svelte-5q9eo4.svelte-5q9eo4{width:1.5rem;height:1.5rem}img.change.svelte-5q9eo4.svelte-5q9eo4{width:0.75rem;height:0.75rem}.change.svelte-5q9eo4.svelte-5q9eo4{font-weight:700}.up.svelte-5q9eo4.svelte-5q9eo4{color:var(--lime-green)}.down.svelte-5q9eo4.svelte-5q9eo4{color:var(--bright-red)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}