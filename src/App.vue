<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/navigation";

export default {
  components: {Navigation}
}
</script>
