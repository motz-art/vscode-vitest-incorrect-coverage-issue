export function process(input) {
  let state;

  if (!input) return {};

  toggleState();

  if (!state) return {};

  nested();

  if (state) undefined;

  return {};

  function nested() {
    toggleState();
    return {};
  }

  function toggleState() {
    state = state ? 0 : 1;
  }
}
