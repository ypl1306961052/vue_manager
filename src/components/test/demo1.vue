<template>
  <!--<div > &#45;&#45;&#45;&#45;{{msg}}-->
  <!--</div>-->
  <div v-on:mouseover="divMouseover">
    <div v-text="msg"></div>
    <!--v-bind等价于 :-->
    <!--v-on:用户绑定事件的-->
    <input :title="title" type="button" v-bind:value="value+'123'" v-on:click="inputClick"/>
    <input :title="title" type="button" v-bind:value="value+'123'" @click="inputClick"/>
    <input v-bind:value="inputValue"/>
    <input :value="inputValue" :hint="typeofValue"/>
    <!--事件修饰符-->
    <!--.stop 表示组织冒泡-->
    <!--.prevent表示组织默认事件-->

    <div class="divInner" @click="btnInput">
      <input type="button" value="按钮" @click.stop="btnInput"/>
    </div>
    <a href="http://www.baidu.com" @click.prevent="btnInput">跳转百度</a>
    <!--.capture添加事件监听器是使用捕获模式-->
    <div class="divInner" @click.capture="btnInput('捕获')">
      <input type="button" value="按钮" @click="btnInput"/>
    </div>
    <div class="el-divider"></div>
    <!--.self 只用自己出发的事件才执行该事件-->
    <div class="divInner" @click.capture="btnInput('执行自己的事件')">
      <input type="button" value="按钮" @click="btnInput"/>
    </div>
    <!--once该市事件执行一次-->
    <div class="divInner" @click.capture="btnInput('执行自己的事件')">
      <input type="button" value="按钮" @click.once="btnInput"/>
    </div>
    <div>
      <input v-model="dataObject.id"/>
      <input v-model="dataObject.name"/>
      <el-button type="primary" @click="addDataObjectAction">主要按钮</el-button>
      <el-button type="danger" icon="el-icon-delete" circle @click="deleteDataObjectAction"></el-button>
    </div>
    <div>
      <p v-for="(item) in List" v-bind:key="item.id">
        {{item.id}}--{{item.name}}
      </p>
    </div>
    <div :class="{ div1: isActive }">00000000000000</div>
    <el-button type="primary" @click="isActive=!isActive">切换</el-button>
    <div :class="[div2,div3]">00000000000000</div>
    <div :class="[List.length===1?div3:'']">00000000000000</div>
  </div>

</template>

<script>export default {
  name: 'demo1.vue',
  data () {
    return {
      msgHtml: '<h1>我怕很好</h1>',
      msg: '我很好',
      title: '插入',
      value: '按钮',
      inputValue: '',
      typeofValue: '点击显示数据',
      List: this.getList(),
      dataObject: {id: '', name: ''},
      isActive: false,
      div2: 'div2',
      div3: 'div3'
    }
  },
  methods: {
    divMouseover: function () {
      // this.message({message: '移入div', type: 'error'})
    },
    addDataObjectAction: function () {
      console.log(this.dataObject)
      this.List.push({id: this.dataObject.id, name: this.dataObject.name})
    },
    deleteDataObjectAction: function () {
      if (this.dataObject.id != null) {
        this.List.forEach((value, index) => {
          if (value.id === this.dataObject.id) {
            console.log(value)
          }
        })
      }
    },
    btnInput: function (v) {
      // this.message({message: '移入div', type: 'error'})
      console.log('1' + v)
    },
    getList: function () {
      var l = []
      for (let i = 0; i < 1; i++) {
        console.log(i)
        l.push({id: i, name: '杨沛霖' + i})
      }
      return l
    },
    inputClick: function () {
      this.inputValue = '你好'
      this.message.success('点击了按钮')
    }
  }
}
</script>

<style scoped>
  .divInner {
    width: 200px;
    height: 100px;
    background-color: #eee;
  }

  .divInner2 {
    width: 200px;
    height: 100px;
    background-color: #eee;
  }

  .div1 {
    height: 200px;
    width: 200px;
    background-color: #9a6e3a;
    box-sizing: border-box;
  }

  .div2 {
    height: 200px;
    width: 200px;

  }

  .div3 {
    background-color: #e7e1cd;
    box-sizing: border-box;
  }

  [v-cloak] {
    /*display: none;*/
  }
</style>
