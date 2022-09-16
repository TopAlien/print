<template>
  <div>
    <div id="containerLine"></div>
  </div>
</template>

<script>
import {Line} from '@antv/g2plot';

export default {
  props: ['data'],
  data() {
    return {
      line: null
    }
  },
  created() {
    this.$nextTick(() => this.init())
  },
  watch: {
    'data'() {
      this.line.update({data: this.data})
    }
  },
  methods: {
    init() {
      this.line = new Line('containerLine', {
        data: this.data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
          // type: 'timeCat',
          tickCount: 5,
        },
      });

      this.line.render();
    }
  }
}
</script>
