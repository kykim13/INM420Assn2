import gsap from 'gsap';

export const play = (pathname, node, appears) => {
  console.log('play', pathname, node, appears);
  gsap.set(node, { x: 0, y:0, scale: 1, opacity: 1 });
  gsap.from(node, { delay: 0.25 ,duration: 0.5,  y: 300, scale: 0.5, opacity: 0, ease: 'poser4.out' });
}

export const exit = (node) => {
  console.log('exit', node);
  gsap.to(node, { duration: 0.5, x:-300, y:-300, scale:0.5, opacity: 0, ease: 'power2.in' });
}
