<!--
 * @Author       : bo.wang
 * @Date         : 2022-09-13 16:43:07
 * @LastEditors  : bo.wang
 * @LastEditTime : 2022-09-13 16:46:10
 * @Description  : 请填写简介
-->
<template>
  <div :id='`bar${id}`' style="height: 30em; width: 30em;"></div>
</template>

<script>
import {Bar} from '@antv/g2plot'

export default {
  props: ['id', 'data'],
  data() {
    return {
      isRender: false,
      bar: null
    }
  },
  created() {
    this.$nextTick(() => this.init())
  },
  watch: {
    'data'() {
      this.bar.update({data: this.data})
    }
  },
  methods: {
    init() {
      this.bar = new Bar(`bar${this.id}`, {
        data: this.data,
        xField: 'value',
        yField: 'year',
        tooltip: false,
        seriesField: 'year',
        legend: {
          position: 'top-left'
        }
      })

      this.bar.render()
    }
  }
}
</script>
