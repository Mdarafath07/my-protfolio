export function renderStatement() {
  const host = document.querySelector('#statement-placeholder');
  if (!host) return;

  host.innerHTML = `
    <section class="section statement" id="statement"
             data-moment="giant-type-pass"
             data-moment-opts='{"image": "../../../movie dekhba/movie dekhba banner.jpg", "travel": 60, "focusY": 58}'
             aria-labelledby="statement-h">
      <div class="wrap grid">
        <h2 class="mo-gt__type" id="statement-h">Ship it<br>properly</h2>
        <div class="mo-gt__row">
          <p>Not a demo, not a weekend spike. Three apps that took an idea, a schema, a release pipeline and a bug list all the way to a store listing.</p>
          <a class="link" href="#contact">Start one with me</a>
        </div>
      </div>
    </section>
  `;
}
