if(typeof document!="undefined"){const r=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

:root {
  --toggle-bg-1: hsl(230, 22%, 74%);
  --toggle-bg-2: hsl(230, 22%, 74%);

  --bg-pattern: hsl(225, 100%, 98%);
  --bg: hsl(0, 0%, 100%);

  --card: hsl(227, 47%, 96%);

  --desaturated-text: hsl(228, 12%, 44%);
  --text: hsl(230, 17%, 14%);

  --lime-green: hsl(163, 72%, 41%);
  --bright-red: hsl(356, 69%, 56%);

  --facebook: hsl(208, 92%, 53%);
  --twitter: hsl(203, 89%, 53%);
  --youtube: hsl(348, 97%, 39%);

  --ig-1: hsl(37, 97%, 70%);
  --ig-2: hsl(329, 70%, 58%);

  font-size: 14px;
}

html,
body {
  min-height: 100%;
}

body {
  background: linear-gradient(
      to bottom,
      var(--bg-pattern) 22rem,
      var(--bg) 22rem,
      var(--bg) 100%
    )
    no-repeat;

  margin: 0;
  font-family: Inter, Arial, Helvetica, sans-serif;
  letter-spacing: 0.125rem;
  line-height: 1.25rem;
}

body.dark {
  --toggle-bg-1: hsl(230, 22%, 74%);
  --toggle-bg-2: hsl(230, 22%, 74%);

  --bg-pattern: hsl(232, 19%, 15%);
  --bg: hsl(230, 17%, 14%);

  --card: hsl(228, 28%, 20%);

  --desaturated-text: hsl(228, 34%, 66%);
  --text: hsl(0, 0%, 100%);
}

.card {
  background-color: var(--card);
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0.375rem;
  margin: 1rem;

  --card-top-border-1: transparent;
  --card-top-border-2: transparent;
  background: linear-gradient(
      to left,
      var(--card-top-border-1) 0%,
      var(--card-top-border-2) 100%
    )
    left top var(--card) no-repeat;
  background-size: 100% 5px;
}

.card.fb {
  --card-top-border-1: var(--facebook);
  --card-top-border-2: var(--facebook);
}

.card.tw {
  --card-top-border-1: var(--twitter);
  --card-top-border-2: var(--twitter);
}

.card.yt {
  --card-top-border-1: var(--youtube);
  --card-top-border-2: var(--youtube);
}

.card.ig {
  --card-top-border-1: var(--ig-1);
  --card-top-border-2: var(--ig-2);
}
`,n=document.createElement("style"),e=document.createTextNode(r);n.type="text/css",n.appendChild(e),document.head.appendChild(n)}
