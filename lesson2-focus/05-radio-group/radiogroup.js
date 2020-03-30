// Define values for keycodes
const VK_ENTER = 13;
const VK_SPACE = 32;
const VK_LEFT = 37;
const VK_UP = 38;
const VK_RIGHT = 39;
const VK_DOWN = 40;

const setChecked = (node, bool) => {
  node.tabIndex = bool ? 0 : -1;
  node[bool ? "setAttribute" : "removeAttribute"]("checked", "");
  bool && node.focus();
};

const mod = (x, y) => x - Math.floor(x / y) * y;

function main() {
  const ul = document.querySelector("ul");
  const radioButtons = ul.querySelectorAll("li");

  (function go(state = 0) {
    radioButtons.forEach((rb, i) => {
      i == state ? setChecked(rb, true) : setChecked(rb, false);
      rb.onclick = () => go(i);
      ul.onkeydown = ({ keyCode }) =>
        (keyCode === VK_ENTER || keyCode === VK_SPACE) &&
        go(mod(state + 1, radioButtons.length));
    });
  })();
}

main();
