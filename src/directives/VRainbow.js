export default {
  bind(el, binding, vnode) {
    el.style.backgroundColor =
      '#' +
      Math.random()
        .toString()
        .slice(2, 8)
  },
  name: 'rainbow',
}
