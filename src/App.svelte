<script>
  import { onMount } from "svelte";

  import "./main.css";

  import Toggle from "./components/Toggle";
  import Card from "./components/Card";
  import SmallCard from "./components/SmallCard";

  const generateEvents = (n) =>
    new Array(n)
      .fill({})
      .map((x) => ({ total: +Math.random().toString().slice(4, 6) }))
      .map((x) => ({ ...x, change: +Math.random().toString().slice(4, 5) }))
      .map((x, i) => ({
        ...x,
        text: ["Likes", "Retweets", "Profile Views", "Total Views"][~~(i % n)],
      }))
      .map((x, i) => ({
        ...x,
        icon: ["facebook", "twitter", "instagram", "youtube"][~~(i % n)],
      }))
      .map((x) => ({ ...x, changeGoes: Math.random() > 0.5 ? "up" : "down" }));

  let dark = true;

  $: {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  let users = [
    {
      icon: "facebook",
      type: "fb",
      username: "@Mobilpadde",
      total: 0,
      changeGoes: "up",
      change: 0,
    },
    {
      icon: "twitter",
      type: "tw",
      username: "@Mobilpadde",
      total: 0,
      changeGoes: "up",
      change: 0,
    },
    {
      icon: "instagram",
      type: "ig",
      username: "@Mobilpadde",
      total: 0,
      changeGoes: "up",
      change: 0,
    },
    {
      icon: "youtube",
      type: "yt",
      username: "Mobilpadde",
      total: 0,
      changeGoes: "up",
      change: 0,
    },
  ];

  const today = new Date();
  let events = {
    [new Date().setDate(today.getDate() - 1)]: generateEvents(4),
    [new Date().setDate(today.getDate() - 2)]: generateEvents(4),
    [new Date().setDate(today.getDate() - 3)]: generateEvents(4),
  };

  $: {
    for (let i in users) {
      users[i].total = 0;
      users[i].change = 0;

      for (let j of Object.keys(events)) {
        const e = events[j].find((y) => y.icon === users[i].icon);

        users[i].total += e.total;
        users[i].change += e.change * (e.changeGoes === "up" ? 1 : -1);
      }

      users[i].changeGoes = users[i].change >= 0 ? "up" : "down";
    }
  }

  onMount(() => {
    const t = () => Math.random() * 4000 + 1000;
    let next = true;
    const _ = () => {
      Object.entries(events).forEach(([d]) => {
        events[d] = events[d].map((x) => {
          const add = x.changeGoes === "up" ? 1 : -1;

          x.change += add;
          x.total += add;
          return x;
        });
      });

      if (next) setTimeout(_, t());
    };
    setTimeout(_, t());

    return () => (next = false);
  });
</script>

<style>
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text);
    padding: 2rem;
    margin: 0 auto;
  }

  .title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .section {
    width: 96rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 22rem);
    align-items: center;
    justify-content: center;
  }

  .section {
    flex-direction: row;
    flex-wrap: wrap;
  }

  header {
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: baseline;
    justify-content: space-between;
  }

  h1 {
    font-size: 2.25rem;
    margin: 0;
    font-weight: 700;
  }

  h3 {
    font-size: 0.875rem;
    color: var(--desaturated-text);
    font-weight: 700;
  }

  @media (max-width: 1280px) {
    .app,
    .section {
      width: auto;
    }

    .section {
      grid-template-columns: repeat(2, 22rem);
    }

    header {
      width: 90%;
    }
  }

  @media (max-width: 766px) {
    .section {
      grid-template-columns: repeat(1, 22rem);
    }

    header {
      flex-direction: column;
    }
  }
</style>

<div class="app" class:dark>
  <header>
    <div>
      <h1>Social Media Dashboard</h1>
      <h3>Total Followers: {dark}</h3>
    </div>
    <Toggle bind:toggled={dark} />
  </header>

  <div class="section">
    {#each users as x}
      <Card
        changeGoes={x.changeGoes}
        icon={x.icon}
        type={x.type}
        username={x.username}
        total={x.total}
        change={x.change} />
    {/each}
  </div>

  <div class="title-section">
    {#each Object.entries(events) as entries}
      <h3>
        {new Intl.DateTimeFormat('uk', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).format(entries[0])}
      </h3>

      <div class="section">
        {#each entries[1] as x}
          <SmallCard
            changeGoes={x.changeGoes}
            icon={x.icon}
            text={x.text}
            total={x.total}
            change={x.change} />
        {/each}
      </div>
    {/each}
  </div>
</div>
