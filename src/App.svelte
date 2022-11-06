<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Paralax from './component/parallax.svelte'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <Paralax />
  <div class="content" />
</main>

<style>
  .content {
    height: 100vh;
  }
</style>
