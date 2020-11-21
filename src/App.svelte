<script>
  import { onMount } from "svelte";

  import "./main.css";

  import Toggle from "./components/Toggle";
  import Card from "./components/Card";
  import SmallCard from "./components/SmallCard";

  const generateEvents = (n) => {
    const arr = new Array(n)
      .fill({ change: "0.0", changeGoes: "up" })
      .map((x) => ({
        ...x,
        total: +Math.random().toString().slice(4, 7),
      }))
      .map((x, i) => ({
        ...x,
        text: ["Likes", "Retweets", "Profile Views", "Total Views"][~~(i % n)],
      }))
      .map((x, i) => ({
        ...x,
        icon: ["facebook", "twitter", "instagram", "youtube"][~~(i % n)],
      }));

    arr.forEach((x, i) => {
      if (i == 0) return;

      let change =
        ((x.total + 1 - (arr[i % 4].total + 1)) / (arr[i % 4].total + 1)) * 100;

      const changeGoes = x.change >= 0 ? "up" : "down";
      change = change.toFixed(2);

      x = { ...x, changeGoes, change };
    });

    return arr;
  };

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
    },
    {
      icon: "twitter",
      type: "tw",
      username: "@Mobilpadde",
      total: 0,
    },
    {
      icon: "instagram",
      type: "ig",
      username: "@Mobilpadde",
      total: 0,
    },
    {
      icon: "youtube",
      type: "yt",
      username: "Mobilpadde",
      total: 0,
    },
  ];

  const today = new Date();
  let events = {
    [new Date().setDate(today.getDate() - 1)]: generateEvents(4),
    [new Date().setDate(today.getDate() - 2)]: generateEvents(4),
    [new Date().setDate(today.getDate() - 3)]: generateEvents(4),
    // [new Date().setDate(today.getDate() - 4)]: generateEvents(4),
    // [new Date().setDate(today.getDate() - 5)]: generateEvents(4),
  };

  $: {
    for (let i in users) {
      users[i].total = 0;
      users[i].change = 0;

      for (let d of Object.keys(events)) {
        const e = events[d].find((y) => y.icon === users[i].icon);
        users[i].total += e.total;
      }
    }
  }

  onMount(() => {
    const t = () => Math.random() * 4000 + 1000;
    let next = true;
    const _ = () => {
      const [d] = Object.entries(events)[0];
      events[d] = events[d].map((x, i) => {
        let add = x.changeGoes === "up" ? 1 : -1;
        if (Math.random() > 0.5) add *= -1;

        x.total += add;
        x.change =
          ((x.total + 1 - (events[Object.keys(events)[1]][i % 4].total + 1)) /
            (events[Object.keys(events)[1]][i % 4].total + 1)) *
          100;

        x.changeGoes = x.change >= 0 ? "up" : "down";
        x.change = x.change.toFixed(2);
        return x;
      });

      if (next) setTimeout(_, t());
    };
    setTimeout(_, 1);

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
      <Card icon={x.icon} type={x.type} username={x.username} total={x.total} />
    {/each}
  </div>

  <div class="title-section">
    {#each Object.entries(events) as entries}
      <h3>
        {new Intl.DateTimeFormat('en-UK', {
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
