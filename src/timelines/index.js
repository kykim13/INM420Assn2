import gsap from 'gsap';

export const play = (pathname, node, appears) => {
  console.log('play', pathname, node, appears);
}

export const exit = (node) => {
  console.log('exit', node);
  gsap.to(node, { duration: 1, opacity: 0 });
}
