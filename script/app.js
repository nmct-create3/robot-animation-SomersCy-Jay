// gsap.to('#Robot', { duration: 1, x: 50 });
// gsap.from('#Robot', { duration: 1, x: 50 });
// gsap.set('#Robot', { duration: 1, x: 50 });
//gsap.fromTo('#Robot', { x: -50 }, { duration: 1, x: 50 });

let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyo: true,
});
tl.set('#Shadow', {
  transformOrigin: '50% 100%',
});
tl.set('#Fire', {
  transformOrigin: '50% 100%',
})
  .fromTo(
    '#Robot',
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  )
  .fromTo(
    '#Signal',
    {
      x: 0.5,
    },
    {
      x: -0.5,
    },
    '<'
  )
  .fromTo(
    '#Arm-right',
    {
      rotate: 0,
    },
    {
      rotate: -45,
    },
    '<'
  )
  .to(
    '#Fire',
    {
      scale: 0.9,
    },
    '<'
  )
  .to(
    '#Shadow',
    {
      scale: 0.75,
    },
    '<'
  );
const ListenToClicks = function () {
  const fast = document.querySelector('.js-fast');
  const normal = document.querySelector('.js-normal');
  const slow = document.querySelector('.js-slow');
  const pausePlay = document.querySelector('.js-pause');
  let aantalKliks = 0;

  pausePlay.addEventListener('click', function () {
    if (aantalKliks % 2 == 0) {
      tl.pause();

      pausePlay.innerHTML = `
			<svg class="c-play-icon c-play-icon--play" width="15" height="15" viewBox="0 0 15 15" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M4.5 12.5v-10l7 5-7 5z" stroke="currentColor" stroke-linejoin="round"></path>
			</svg>`;

      aantalKliks += 1;
    } else {
      tl.resume();

      pausePlay.innerHTML = `
			<svg class="c-play-icon c-play-icon--pause" width="15" height="15" viewBox="0 0 15 15" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M5.5 3v9m4-9v9" stroke="currentColor"></path>
			</svg>`;
      aantalKliks += 1;
    }
  });

  fast.addEventListener('click', function () {
    tl.duration(0.3);
  });

  normal.addEventListener('click', function () {
    tl.duration(1);
  });

  slow.addEventListener('click', function () {
    tl.duration(1.8);
  });
};

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded');
  ListenToClicks();
});
