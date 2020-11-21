<script>
  export let changeGoes = "";
  export let icon = "";
  export let type = "";
  export let username = "";
  export let total = 0;
  export let change = 0;

  $: text = type == "yt" ? "Subscribers" : "Followers";
</script>

<style>
  .card {
    width: 20rem;
  }

  .section {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section > * {
    margin: 0.25rem;
  }

  .section.row {
    flex-direction: row;
  }

  h2 {
    font-size: 4.5rem;
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
    width: 2rem;
    height: 2rem;
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

<div class="card {type}">
  <div class="section row">
    <img class="icon" src="/images/icon-{icon}.svg" alt="{icon}-logo" />
    <span>{username}</span>
  </div>

  <div class="section">
    <h2>{total}</h2>
    <span class="followers">{text}</span>
  </div>

  <div class="section">
    <span class="change {changeGoes}"><img
        class="change"
        src="/images/icon-{changeGoes}.svg"
        alt="{changeGoes}-logo" />
      {change}
      Today</span>
  </div>
</div>
