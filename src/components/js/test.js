import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'


export default { 
    created() {
        //Scrolls to top when view is displayed
        window.scrollTo(0, 0)
        
           // this.$router.push({ path: '/sobre' })
        
    },
    mounted () { 

    const controller = new ScrollMagic.Controller();

    TweenMax.from('#red', 5, {width: 0});

    const tlVueGsap = new TimelineMax()
    .from('#blue', 5, {width: 0})
    .to('#blue', 5, {x: 400})
       

    const scene = new ScrollMagic.Scene({
        triggerElement: "#red",
        triggerHook: 0.0001
    })
    .setTween(tlVueGsap)
    .addTo(controller);

/*
  // Transition Fail 
    const tlGoTrans = new TimelineMax({onComplete:goNext})
    .to('#yellow',1.3 ,{x:600})

    function goNext () {
        window.location.href = '.#/sobre'

    }
    const scene2 = new ScrollMagic.Scene({
        triggerElement: "#yellow",
        triggerHook: 0.9
    })
    .setTween(tlGoTrans)
    .addTo(controller);
*/


   

    }, //Close Mounted

    beforeRouteLeave(to, from, next) {
        var tlTrans = new TimelineMax({onComplete:next}).to('#yellow', 2 ,{rotation: 360, x:600, backgroudColor:'red'})
        
      }

}//Close Export Defautl