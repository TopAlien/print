<template>

</template>

<script>
import { Line } from '@antv/g2plot';

export default {
  name: "Line",
  props: ['data'],
  created() {
    this.init()
  },
  methods: {
    init() {
      const line = new Line('container', {
        data: this.data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
          // type: 'timeCat',
          tickCount: 5,
        },
      });

      line.render();
    }
  }
}
</script>

<style scoped>

</style>
