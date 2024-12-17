export function process(input) {
  let state;

  if (!input) return;

  nested();

  if (!state) return;

  nested();

  if (state) return;

  return {};

  function nested() {
    state = state ? 0 : 1;
  }
}
