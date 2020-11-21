<script>
  export let icon = "";
  export let type = "";
  export let username = "";
  export let total = 0;

  $: text = type == "yt" ? "Subscribers" : "Followers";
  $: text = type == "fb" ? "Likes" : text;
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
    <h2>
      {total.toLocaleString('en-UK', { minimumFractionDigits: 0 }).toString()}
    </h2>
    <span class="followers">{text}</span>
  </div>
</div>
