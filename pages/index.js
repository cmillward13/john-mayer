import Banner from '../components/Banner'
import Photo from '../components/Photo'
const confetti = require('canvas-confetti') 
export default function Home() {



  if(typeof window =='object'){
    var myConfetti =confetti.create(document.getElementById('myCanvas'),{resize:true});

    
    myConfetti({
      resize:true,
      particleCount: 100,
      angle: 90,
      spread: 55,
      origin: { x: 0, y:1},
      startVelocity:90

    });

    myConfetti({
      resize:true,
      particleCount: 100,
      angle: 110,
      spread: 55,
      origin: { x: 1, y:1},

    });
  }

  return (
    <div >
      <Banner/>
      <Photo/>
    </div>
  )
}
