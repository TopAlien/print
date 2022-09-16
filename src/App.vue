<template>
  <div id="app">
    <HelloWorld/>
    <PrintPage v-if="printPageVisible" :visible.sync="printPageVisible"/>

    <a-select default-value="lucy">
      <a-select-option value="lucy">
        lucy
      </a-select-option>
      <a-select-option v-for="(val, key) in status" :key="key" :value="key">
        {{ val.label }}
      </a-select-option>
    </a-select>

    <a-form-model :model="testForm" ref="testForm">
      <a-form-model-item label="姓名" prop="name" required>
        <a-input v-model="testForm.name" placeholder="请输入姓名"/>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" @click="handleSave">保存</a-button>
      </a-form-model-item>
    </a-form-model>
    <a-table :dataSource="list" :columns="columns">
      <span slot="status" slot-scope="text">
        <a-badge v-if="status[text]" :color="status[text].color" :text="status[text].label" />
      </span>
    </a-table>
    <div @click="printCon">print</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PrintPage from "@/printPage";
import html2canvas from 'html2canvas'
import {jsPDF} from 'jspdf'

const status = {
  ONLIEN: {
    label: '在线',
    color: 'green'
  },
  DISABLE: {
    label: '离线',
    color: 'volcano'
  }
}

export default {
  components: {
    HelloWorld,
    PrintPage
  },
  name: 'App',
  data() {
    return {
      status,
      columns: [
        {
          dataIndex: 'id',
          title: 'ID'
        },
        {
          dataIndex: 'status',
          title: '状态',
          scopedSlots: { customRender: 'status' }
        }
      ],
      list: [
        {
          id: 1,
          status: 'ONLIEN'
        },
        {
          id: 2,
          status: 'DISABLE'
        }
      ],
      testForm: {
        name: ''
      },
      printPageVisible: false,
      isVisible: true
    }
  },
  methods: {
    handleSave() {
      this.$refs['testForm'].validate((valid) => {
        if (valid) {
          this.$message.success('校验成功！')
          console.log(valid)
        }
      })
    },
    printCon() {
      this.$message.loading('正在加载打印中...', 0)
      this.printPageVisible = true
    },
    toPdf() {
      var doc = new jsPDF({format: 'a4', compress: true})

      doc.setFontSize(40)
      doc.text('Octonyan loves jsPDF', 35, 25)

      html2canvas(document.querySelector('#bar'), {useCORS: true}).then(canvas => {
        doc.addImage(canvas, 'PNG', 15, 40, 80, 80)
        // doc.save("two-by-four.pdf");
        // doc.autoPrint({})
        // doc.addPage("a4", "p");
        doc.addImage(canvas, 'PNG', 100, 40, 80, 80)

        this.autoPrint(doc)
      })
    },
    autoPrint(doc) {
      doc.autoPrint()

      const hiddFrame = document.createElement('iframe')
      hiddFrame.style.position = 'fixed'
      // "visibility: hidden" would trigger safety rules in some browsers like safari，
      // in which the iframe display in a pretty small size instead of hidden.
      // here is some little hack ~
      hiddFrame.style.width = '1px'
      hiddFrame.style.height = '1px'
      hiddFrame.style.opacity = '0.01'
      const isSafari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent)
      if (isSafari) {
        // fallback in safari
        hiddFrame.onload = () => {
          try {
            hiddFrame.contentWindow.document.execCommand('print', false, null)
          } catch (e) {
            hiddFrame.contentWindow.print()
          }
        }
      }
      hiddFrame.src = doc.output('bloburl')
      document.body.appendChild(hiddFrame)
    },
    pri() {
      this.$pluginName.init()

      var hiprintTemplate = new this.$pluginName.PrintTemplate()
      var panel = hiprintTemplate.addPrintPanel({width: 100, height: 130, paperFooter: 340, paperHeader: 10})

      //文本
      panel.addPrintText({
        options: {width: 140, height: 15, top: 20, left: 20, title: 'hiprint插件手动添加text', textAlign: 'center'}
      })

      //Html
      panel.addPrintHtml({
        options: {width: 140, height: 35, top: 180, left: 20, content: `${document.getElementById('bar')}`}
      })

      //打印
      hiprintTemplate.print({})
    },
    print2() {
      this.isVisible = false
      this.$nextTick(() => window.print())
      setTimeout(() => (this.isVisible = true))
    },
    doPrint3() {
      var iframe = document.getElementById('print-iframe')
      if (!iframe) {
        var el = document.getElementById('printcontent')
        iframe = document.createElement('IFRAME')
        var doc = null
        iframe.setAttribute('id', 'print-iframe')
        iframe.setAttribute('style', 'width:0px;height:0px;border:none')
        document.body.appendChild(iframe)
        doc = iframe.contentWindow.document
        //这里可以自定义样式
        //doc.write("<LINK rel="stylesheet" type="text/css" href="css/print.css">");
        doc.write(`<div>${el.innerHTML}</div>`)
        doc.close()
        iframe.contentWindow.focus()
      }
      iframe.contentWindow.print()
      if (navigator.userAgent.indexOf('MSIE') > 0) {
        document.body.removeChild(iframe)
      }
      if (navigator.userAgent.indexOf('Safari') > 0) {
        setTimeout(() => document.body.removeChild(iframe), 300)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.barWrap {
  height: 400px;
  display: flex;
  justify-content: space-between;
}

.user {
  display: flex;
  justify-content: space-between;
}
</style>
