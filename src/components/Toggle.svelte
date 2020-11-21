<script>
  export let toggled = true;
</script>

<style>
  .mode {
    display: flex;
    justify-items: baseline;
    margin: 1.25rem;
  }

  label {
    font-size: 0.875rem;
    color: var(--desaturated-text);
    font-weight: 700;
  }

  .toggle {
    background-image: linear-gradient(
      to right,
      var(--toggle-bg-1),
      var(--toggle-bg-2)
    );
    position: relative;
    width: 2.5rem;
    height: 1.25rem;
    margin: 0 0.25rem;
    padding: 0.5rem;
    border-radius: 9999px;
    appearance: none;
  }

  .toggle::after {
    content: "";
    background-color: hsl(230, 17%, 14%);
    width: 1rem;
    height: 1rem;
    display: block;
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
    border-radius: 50%;
    transition: var(--ease) left 250ms;
  }

  .toggle:checked {
    --toggle-bg-1: hsl(210, 78%, 56%);
    --toggle-bg-2: hsl(146, 68%, 55%);
  }

  .toggle:checked::after {
    left: 1.375rem;
  }
</style>

<label class="mode">
  <span>Dark Mode</span>
  <input bind:checked={toggled} class="toggle" type="checkbox" />
</label>
