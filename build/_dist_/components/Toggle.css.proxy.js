// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".mode.svelte-1fm7uqp{display:flex;justify-items:baseline;margin:1.25rem}label.svelte-1fm7uqp{font-size:0.875rem;color:var(--desaturated-text);font-weight:700}.toggle.svelte-1fm7uqp{background-image:linear-gradient(\n      to right,\n      var(--toggle-bg-1),\n      var(--toggle-bg-2)\n    );position:relative;width:2.5rem;height:1.25rem;margin:0 0.25rem;padding:0.5rem;border-radius:9999px;appearance:none}.toggle.svelte-1fm7uqp::after{content:\"\";background-color:hsl(230, 17%, 14%);width:1rem;height:1rem;display:block;position:absolute;top:0.125rem;left:0.125rem;border-radius:50%;transition:cubic-bezier(0.175, 0.885, 0.32, 1.275) left 250ms}.toggle.svelte-1fm7uqp:checked{--toggle-bg-1:hsl(210, 78%, 56%);--toggle-bg-2:hsl(146, 68%, 55%)}.toggle.svelte-1fm7uqp:checked::after{left:1.375rem}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}