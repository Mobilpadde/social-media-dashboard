// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".app.svelte-1oxtxmz{display:flex;flex-direction:column;align-items:center;color:var(--text);padding:2rem;margin:0 auto}.title-section.svelte-1oxtxmz{display:flex;flex-direction:column;align-items:center;justify-content:center}.section.svelte-1oxtxmz{width:96rem;margin-bottom:2rem;display:grid;grid-template-columns:repeat(4, 22rem);align-items:center;justify-content:center}.section.svelte-1oxtxmz{flex-direction:row;flex-wrap:wrap}header.svelte-1oxtxmz{width:100%;max-width:80rem;display:flex;flex-direction:row;align-items:center;justify-items:baseline;justify-content:space-between}h1.svelte-1oxtxmz{font-size:2.25rem;margin:0;font-weight:700}h3.svelte-1oxtxmz{font-size:0.875rem;color:var(--desaturated-text);font-weight:700}@media(max-width: 1280px){.app.svelte-1oxtxmz,.section.svelte-1oxtxmz{width:auto}.section.svelte-1oxtxmz{grid-template-columns:repeat(2, 22rem)}header.svelte-1oxtxmz{width:90%}}@media(max-width: 766px){.section.svelte-1oxtxmz{grid-template-columns:repeat(1, 22rem)}header.svelte-1oxtxmz{flex-direction:column}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}