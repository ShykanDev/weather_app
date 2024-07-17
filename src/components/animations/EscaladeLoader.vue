<template>
    <div class="">
<!-- Plasma -->
<svg width="0" height="0">
 <filter id="gooey-plasma">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur"/>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
  </filter>
</svg>
<div class="plasma">
  <div class="gooey-container">
    <span class="bubble"></span>
    <span class="bubble"></span>
    <span class="bubble"></span>
    <span class="bubble"></span>
    <span class="bubble"></span>
    <span class="bubble"></span>
  </div>
</div>
<!--/Plasma -->

  
</div>
<div>
  
    </div>
  </template>
  

<script lang="ts" setup>

</script>

<style lang="scss" scoped>


///////////////////////////////////////////////////////////////////////
//////////////////////////////// PLASMA ///////////////////////////////
///////////////////////////////////////////////////////////////////////
@keyframes plasma{
  0%   { transform : scale(6) translate3d( 20px,0,0); }
  50%  { transform : scale(1) translate3d(-60px,0,0); }
  100% { transform : scale(6) translate3d( 20px,0,0); }
}

.plasma{
  backface-visibility: hidden;
  z-index: 20;
  position      : relative;
  width         : 250px;
  height        : 250px;
  padding       : 0;
  border-radius : 50%;
  overflow      : hidden;
  box-shadow    : 0 0 30px 0 #8140ff inset;
  
  .gooey-container {
    filter        : url(#gooey-plasma);
    position      : absolute;
    top           : 50%;
    left          : 50%;
    transform     : translate(-50%,-50%);
    width         : 300px;
    height        : 300px;
    padding       : 0;
    margin        : 0;
    box-shadow    : 0 0 0 20px #ff4081 inset;
    border-radius : 50%;
    overflow      : hidden;
    
    .bubble {
      display    : block;
      position   : absolute;
      top        : 50%;
      left       : 50%;
      width      : 100%;
      text-align : right;

      &:before{
        content       : "";
        display       : inline-block;
        background    : #ff4081;
        width         : 30px;
        height        : 30px;
        border-radius : 50%;
        transform     : scale(6) translate3d(20px,0,0);
        box-shadow    : 0 0 15px 0 #0000ff inset,
                        0 0 10px 0 #0000ff inset;
      }
    }
    @for $i from 1 through 6 {
      .bubble:nth-child(#{$i}) {
        transform : translate(-50%,-50%) rotate(60deg*$i);
      }
      .bubble:nth-child(#{$i}):before {
        animation : plasma 3s+($i/2) linear .25s*$i infinite;
      }
    }
  }
}

</style>
