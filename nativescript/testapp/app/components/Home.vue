<template>
  <Page>
    <!-- <WebView :src="htmlString" height="250" /> -->
    <!-- <HtmlView :html="html2"></HtmlView> -->
    <exoplayer
      src="~/videos/video.mp4"
      loop="true"
      autoplay="true"
      fill="aspectFill"
      scaleX="1.2"
      scaleY="1.2"
      controls="false"
    ></exoplayer>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      htmlString: `<iframe width="560" height="315" src="https://www.youtube.com/embed/t1x8DMfbYN4" frameborder="0" allowfullscreen></iframe>`,
      html2: `<div><iframe width="560" height="315" src="https://www.youtube.com/embed/t1x8DMfbYN4" frameborder="0" allowfullscreen></iframe></div>`
    };
  },
  computed: {
    message() {
      return "Hello world";
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
