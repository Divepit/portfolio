<template>
  <div>
    <vue-particles
      style="position: fixed; width: 100%; height: 100%;"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="90"
      shapeType="polygon"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.7"
      :linesDistance="100"
      :moveSpeed="7"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <IntroductionCard/>

  </div>
</template>

<script>
// @ is an alias to /src
import IntroductionCard from '../components/UI/IntroductionCard'

export default {
  name: 'Home',
  components: {
    IntroductionCard
  }
}
</script>
