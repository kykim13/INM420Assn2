import gsap from 'gsap';

export const play = (pathname, node, appears) => {
  console.log('play', pathname, node, appears);
  gsap.set(node, { x: '100%', opacity: 0 });
  gsap.to(node, { duration: 2, x: 0, opacity: 1, ease: 'power2.out' });
}

export const exit = (node) => {
  console.log('exit', node);
  gsap.to(node, { duration: 0.5, opacity: 0, ease: 'power2.in' });
}
