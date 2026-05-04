import { useState } from 'react';
import maddy9 from '../maddy/maddy9.jpg';
import maddy8 from '../maddy/maddy8.jpg';
import maddy7 from '../maddy/maddy7.jpg';
import maddy6 from '../maddy/maddy6.jpg';
import maddy5 from '../maddy/maddy5.jpg';
import maddy4 from '../maddy/maddy4.jpg';
import maddy3 from '../maddy/maddy3.jpg';
import maddy2 from '../maddy/maddy2.jpg';
import maddy1 from '../maddy/maddy1.jpg';

const slides = [
  {
    month: 1,
    image: maddy9,
    title: 'One',
    text: 'I still remember the first time we went to the mall together. This picture isn\'t the first time of course, but I remember being so afraid to hold your hand, and even more afraid to kiss you.',
  },
  {
    month: 2,
    image: maddy8,
    title: 'Two',
    text: 'The first time we went bowling! I always feel like the luckiest guy in the room anywhere we go.',
  },
  {
    month: 3,
    image: maddy7,
    title: 'Three',
    text: 'I had never gone to the Rainforest Cafe, but going with you really made it an unforgettable experience.',
  },
  {
    month: 4,
    image: maddy6,
    title: 'Four',
    text: 'The first time you visited me! I miss you so much all the time, but you making an effort to come see me really made me feel special and loved.',
  },
  {
    month: 5,
    image: maddy5,
    title: 'Five',
    text: 'The Halloween party where you met a lot of my friends! You had seen some of them previously, but I was still really worried you wouldn\'t like them. It makes me so happy that you\'re geting to know and like them (at least a little bit).',
  },
  {
    month: 6,
    image: maddy4,
    title: 'Six',
    text: 'This is where we made that huge pizookie! Cooking with you was something that I didn\'t know could be so fun. I still remember adding all of that ice cream when I really shouldn\'t have!',
  },
  {
    month: 7,
    image: maddy3,
    title: 'Seven',
    text: 'The first time we went mini-golfing! I was so bad at it, but it never felt better to lose so horribly.',
  },
  {
    month: 8,
    image: maddy2,
    title: 'Eight',
    text: 'Valentine\'s Day was a dream come true. I got that familiar feeling of butterflies in my stomach seeing you all dressed up.',
  },
  {
    month: 9,
    image: maddy1,
    title: 'Nine',
    text: 'Our trip to Castles N\' Coasters with my friends! Seeing you was by far the best part of that day.',
  },
];

function App() {
  const [started, setStarted] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const activeSlide = slides[slideIndex];
  const isLastSlide = slideIndex === slides.length - 1;

  const advanceSlide = () => {
    if (!started) {
      setStarted(true);
      return;
    }

    if (!isLastSlide) {
      setSlideIndex((currentIndex) => currentIndex + 1);
    }
  };

  const restartShow = () => {
    setStarted(false);
    setSlideIndex(0);
  };

  return (
    <main className="app-shell">
      <div className="background-glow background-glow-left" />
      <div className="background-glow background-glow-right" />

      {!started ? (
        <section className="hero-card">
          <p className="eyebrow">I love you Maddy!</p>
          <button className="title-button" onClick={advanceSlide}>
            Happy 9 Months!
          </button>
          <p className="hero-copy">Click the title to start!</p>
        </section>
      ) : (
        <section className="slideshow-card">
          <div className="slide-meta">
            <p className="eyebrow">Counting up to 9</p>
            <h1>{activeSlide.title}</h1>
            {/*<span className="month-pill">{activeSlide.month} month{activeSlide.month === 1 ? '' : 's'}</span>
          */}
          </div>

          <div className="slide-layout">
            <div className="image-frame">
              <img
                src={activeSlide.image}
                alt={`Maddy month ${activeSlide.month}`}
                className="slide-image"
              />
            </div>

            <aside className="description-box">
              <h2>A little note</h2>
              <p>{activeSlide.text}</p>

              <div className="controls">
                {!isLastSlide ? (
                  <button className="nav-button" onClick={advanceSlide}>
                    Next photo
                  </button>
                ) : (
                  <button className="nav-button" onClick={restartShow}>
                    Start again
                  </button>
                )}
              </div>
            </aside>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
