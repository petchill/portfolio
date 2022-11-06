<script lang="ts">
  import mountainPng from '../assets/mountain.png'
  import moonPng from '../assets/moon.png'
  import birdPng from '../assets/bird.png'

  let innerWidth = window.innerWidth
  let innerHeight = window.innerHeight
  let y
  // let moonInitY = innerWidth * 0.5
  let moonYInit = -innerWidth * 0.05
  let moonY = moonYInit
  $: moonY = y * 0.3 + moonYInit

  let birdYInit = innerHeight / 1.5
  let birdY = birdYInit
  $: birdY = birdYInit - y

  let birdXInit = innerWidth
  let birdX = birdXInit
  $: birdX = (y / innerHeight) * innerWidth * 2
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={y} />
<div class="paralax">
  <div class="background" />
  <img class="mountain" src={mountainPng} alt="mountainPng" />
  <img class="moon" src={moonPng} alt="moonPng" style="top: {moonY}px" />
  <img class="bird" src={birdPng} alt="birdPng" style="top: {birdY}px; right: calc({birdX}px - 100px );" />
  <div class="info">
    <div class="fullname">
      <p class="first-name">SONGPON</p>
      <p class="surname">NINWONG</p>
    </div>
    <p class="description">A Developer who interest in Software Architechture, Web Application, Art, and Reading</p>
  </div>
</div>

<style>
  .paralax {
    position: relative;
    box-sizing: border-box;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
  }

  .background {
    top: 0px;
    width: 100vw;
    height: 50vh;
    position: absolute;
    background: linear-gradient(180deg, #1f1f1f 0%, rgba(184, 184, 184, 0) 99.99%, rgba(132, 132, 132, 0) 100%);
  }

  .mountain {
    z-index: 20;
    width: 100%;
    min-width: 800px;
    position: absolute;
    opacity: 0.8;
  }

  .moon {
    position: absolute;
    width: 28%;
    min-width: 360px;
    z-index: 10;
    min-width: 500px;
  }

  .bird {
    z-index: 20;
    width: 20%;
    min-width: 300px;
    position: absolute;
    transform: rotate(30deg);
  }

  .info {
    z-index: 20;
    padding: 0px 10px;
  }

  .fullname {
    margin: auto;
    position: relative;
    max-width: 521px;
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    text-align: center;
    color: #000000;
  }

  .description {
    text-align: center;
    max-width: 685px;
    height: 133px;
    font-family: 'roboto-light';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    color: #000000;
  }

  @media screen and (max-width: 480px) {
    .fullname {
      font-size: 32px;
      width: auto;
    }

    .description {
      font-size: 16px;
      width: auto;
    }
    .bird {
      min-width: 160px;
    }
  }

  @media screen and (max-width: 1024px) {
    /* .fullname {
      font-size: 32px;
      width: auto;
    }

    .description {
      font-size: 16px;
      width: auto;
    } */

    .moon {
      min-width: 500px;
    }
  }
</style>
