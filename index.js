export function process(input) {
  if (!input) return;

  nested();

  if (!input) return;

  nested();

  if (input) return;

  return;

  function nested() {
    input = 1;
  }
}
