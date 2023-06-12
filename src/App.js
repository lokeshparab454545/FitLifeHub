
import './App.css';
import React, { useEffect, useState } from 'react'
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/hero';
import Exercise from './components/Learn/Exercise';
import SearchExercise from './components/Learn/SearchExercise';
import Price from './components/Pricing/Price';
import Services from './components/Services/Services';
import Testinomial from './components/Testinomials/Testinomial';
import Trainer from './components/Trainer/Trainer';
import Aos from 'aos';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setbodyPart] = useState('all');
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setbodyPart} />
      <Exercise exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
      <Services />
      <Price />
      <Trainer />
      <Testinomial />
      <Footer />
    </>
  );
}

export default App;
