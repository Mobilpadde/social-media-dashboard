<script>
  export let changeGoes = "";
  export let icon = "";
  export let text = "";
  export let total = 0;
  export let change = "0.0";
</script>

<style>
  .card {
    height: 10rem;
  }

  .section {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .section > * {
    margin: 0.25rem;
  }

  h2 {
    font-size: 2.25rem;
    line-height: 1;
    margin-top: 1.25rem;
    margin-bottom: 0.25rem;
    font-weight: 700;
  }

  span.followers {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }

  img.icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  img.change {
    width: 0.75rem;
    height: 0.75rem;
  }

  .change {
    font-weight: 700;
  }

  .up {
    color: var(--lime-green);
  }

  .down {
    color: var(--bright-red);
  }
</style>

<div class="card">
  <div class="section">
    <span>{text}</span>
    <img class="icon" src="/images/icon-{icon}.svg" alt="{icon}-logo" />
  </div>

  <div class="section">
    <h2>{total}</h2>
    <span class="change {changeGoes}"><img
        class="change"
        src="/images/icon-{changeGoes}.svg"
        alt="{changeGoes}-logo" />
      {change}%</span>
  </div>
</div>
