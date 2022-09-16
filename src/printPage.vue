<template>
  <div id="printContainer">
    <div class="barWrap">
      <Bar id="bar1" :data="data1" key="1"/>
      <Bar id="bar2" :data="data2" key="2"/>
    </div>
    <h1>table 哇咔咔</h1>
    <div>哇咔咔</div>
    <Bar id="bar3" :data="data3" key="3"/>
    <div class="user">
      <p>name: ealien</p>
      <p>oName: nuomi</p>
    </div>
    <LineTu :data="data4"/>
  </div>
</template>

<script>
import Bar from './components/Bar'
import LineTu from './components/Line'
import printJS from 'print-js'

const data = [
  {year: '1951 年', value: 38},
  {year: '1952 年', value: 52},
  {year: '1956 年', value: 61},
  {year: '1957 年', value: 145},
  {year: '1958 年', value: 48}
]

const data8 = [
  {
    "Date": "2010-01",
    "scales": 1998
  },
  {
    "Date": "2010-02",
    "scales": 1850
  },
  {
    "Date": "2010-03",
    "scales": 1720
  },
  {
    "Date": "2010-04",
    "scales": 1818
  },
  {
    "Date": "2010-05",
    "scales": 1920
  },
  {
    "Date": "2010-06",
    "scales": 1802
  },
  {
    "Date": "2010-07",
    "scales": 1945
  },
  {
    "Date": "2010-08",
    "scales": 1856
  },
  {
    "Date": "2010-09",
    "scales": 2107
  },
  {
    "Date": "2010-10",
    "scales": 2140
  },
  {
    "Date": "2010-11",
    "scales": 2311
  },
  {
    "Date": "2010-12",
    "scales": 1972
  },
  {
    "Date": "2011-01",
    "scales": 1760
  },
  {
    "Date": "2011-02",
    "scales": 1824
  },
  {
    "Date": "2011-03",
    "scales": 1801
  },
  {
    "Date": "2011-04",
    "scales": 2001
  },
  {
    "Date": "2011-05",
    "scales": 1640
  },
  {
    "Date": "2011-06",
    "scales": 1502
  },
  {
    "Date": "2011-07",
    "scales": 1621
  },
  {
    "Date": "2011-08",
    "scales": 1480
  },
  {
    "Date": "2011-09",
    "scales": 1549
  },
  {
    "Date": "2011-10",
    "scales": 1390
  },
  {
    "Date": "2011-11",
    "scales": 1325
  },
  {
    "Date": "2011-12",
    "scales": 1250
  },
  {
    "Date": "2012-01",
    "scales": 1394
  },
  {
    "Date": "2012-02",
    "scales": 1406
  },
  {
    "Date": "2012-03",
    "scales": 1578
  },
  {
    "Date": "2012-04",
    "scales": 1465
  },
  {
    "Date": "2012-05",
    "scales": 1689
  },
  {
    "Date": "2012-06",
    "scales": 1755
  },
  {
    "Date": "2012-07",
    "scales": 1495
  },
  {
    "Date": "2012-08",
    "scales": 1508
  },
  {
    "Date": "2012-09",
    "scales": 1433
  },
  {
    "Date": "2012-10",
    "scales": 1344
  },
  {
    "Date": "2012-11",
    "scales": 1201
  },
  {
    "Date": "2012-12",
    "scales": 1065
  },
  {
    "Date": "2013-01",
    "scales": 1255
  },
  {
    "Date": "2013-02",
    "scales": 1429
  },
  {
    "Date": "2013-03",
    "scales": 1398
  },
  {
    "Date": "2013-04",
    "scales": 1678
  },
  {
    "Date": "2013-05",
    "scales": 1524
  },
  {
    "Date": "2013-06",
    "scales": 1688
  },
  {
    "Date": "2013-07",
    "scales": 1500
  },
  {
    "Date": "2013-08",
    "scales": 1670
  },
  {
    "Date": "2013-09",
    "scales": 1734
  },
  {
    "Date": "2013-10",
    "scales": 1699
  },
  {
    "Date": "2013-11",
    "scales": 1508
  },
  {
    "Date": "2013-12",
    "scales": 1680
  },
  {
    "Date": "2014-01",
    "scales": 1750
  },
  {
    "Date": "2014-02",
    "scales": 1602
  },
  {
    "Date": "2014-03",
    "scales": 1834
  },
  {
    "Date": "2014-04",
    "scales": 1722
  },
  {
    "Date": "2014-05",
    "scales": 1430
  },
  {
    "Date": "2014-06",
    "scales": 1280
  },
  {
    "Date": "2014-07",
    "scales": 1367
  },
  {
    "Date": "2014-08",
    "scales": 1155
  },
  {
    "Date": "2014-09",
    "scales": 1289
  },
  {
    "Date": "2014-10",
    "scales": 1104
  },
  {
    "Date": "2014-11",
    "scales": 1246
  },
  {
    "Date": "2014-12",
    "scales": 1098
  },
  {
    "Date": "2015-01",
    "scales": 1189
  },
  {
    "Date": "2015-02",
    "scales": 1276
  },
  {
    "Date": "2015-03",
    "scales": 1033
  },
  {
    "Date": "2015-04",
    "scales": 956
  },
  {
    "Date": "2015-05",
    "scales": 845
  },
  {
    "Date": "2015-06",
    "scales": 1089
  },
  {
    "Date": "2015-07",
    "scales": 944
  },
  {
    "Date": "2015-08",
    "scales": 1043
  },
  {
    "Date": "2015-09",
    "scales": 893
  },
  {
    "Date": "2015-10",
    "scales": 840
  },
  {
    "Date": "2015-11",
    "scales": 934
  },
  {
    "Date": "2015-12",
    "scales": 810
  },
  {
    "Date": "2016-01",
    "scales": 782
  },
  {
    "Date": "2016-02",
    "scales": 1089
  },
  {
    "Date": "2016-03",
    "scales": 745
  },
  {
    "Date": "2016-04",
    "scales": 680
  },
  {
    "Date": "2016-05",
    "scales": 802
  },
  {
    "Date": "2016-06",
    "scales": 697
  },
  {
    "Date": "2016-07",
    "scales": 583
  },
  {
    "Date": "2016-08",
    "scales": 456
  },
  {
    "Date": "2016-09",
    "scales": 524
  },
  {
    "Date": "2016-10",
    "scales": 398
  },
  {
    "Date": "2016-11",
    "scales": 278
  },
  {
    "Date": "2016-12",
    "scales": 195
  },
  {
    "Date": "2017-01",
    "scales": 145
  },
  {
    "Date": "2017-02",
    "scales": 207
  }
];

/// 一共几个异步请求
const API_TOTAL = 4

export default {
  name: "printPage",
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      timer: null,
      total: 0,
      data1: [],
      data2: [],
      data3: [],
      data4: []
    }
  },
  components: {
    Bar,
    LineTu
  },
  created() {
    this.loop()

    this.get1()
    this.get2()
    this.get3()
    this.get4()
  },
  methods: {
    loop() {
      this.timer = setInterval(() => {
        console.log("=>(printPage.vue:406) setInterval", 'setInterval');

        if (this.total >= API_TOTAL) {
          setTimeout(() => {
            console.log("=>(printPage.vue:410) setTimeout", 'setTimeout');
            printJS({
              printable: 'printContainer',
              type: 'html',
              maxWidth: 1440,
              header: '哇咔咔header'
            })
            this.$message.destroy()
            this.$emit('update:visible', false)
          }, 600)
        }
      }, 300)

      this.$once('hook:destroyed', () => {
        clearInterval(this.timer)
        this.timer = null
      })
    },
    printPdf() {
      printJS({
        printable: 'printContainer',
        type: 'html',
        maxWidth: 1440,
        header: '哇咔咔header'
      })
      this.count = 0;
      this.printPageVisible = false
    },
    getList() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data)
        }, 3000 * Math.random())
      })
    },
    getList1() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data8)
        }, 5000 * Math.random())
      })
    },
    async get1() {
      this.data1 = await this.getList()
      console.log("=>(printPage.vue:431) get1", 'get1');
      this.total = this.total + 1
    },
    async get2() {
      this.data2 = await this.getList()

      console.log("=>(printPage.vue:437) get2", 'get2');

      this.total = this.total + 1
    },
    async get3() {
      this.data3 = await this.getList()
      console.log("=>(printPage.vue:442) get3", 'get3');
      this.total = this.total + 1
    },
    async get4() {
      this.data4 = await this.getList1()
      console.log("=>(printPage.vue:442) get4", 'get4');
      this.total = this.total + 1
      // data8
    }
  }
}
</script>

<style scoped>
#printContainer {
  position: absolute;
  top: -9999px;
}
</style>
