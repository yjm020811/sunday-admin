<template>
  <div class="header-search" :class="{ show: isShow }">
    <svgIcon
      class="search-icon"
      icon="search"
      @click.stop="onShowClick"
    ></svgIcon>
    <el-select
      class="header-search-select"
      ref="headerSearchSelectRef"
      v-model="search"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      placeholder="search"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.item.path"
        :label="option.item.title"
        :value="option.item"
      ></el-option>
    </el-select>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import fuleJson from '@/components/fuse.js'
import Fuse from 'fuse.js'
import { useRouter } from 'vue-router'
// 控制search展示
const isShow = ref(false)

// 搜索库相关
const fuse = new Fuse(fuleJson, {
  // 是否按优先级进行匹配
  shouldSort: true,
  // 匹配长度超过这个值的才会被认为是匹配的
  minMatchCharLength: 1,
  // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
  // name：搜索的键
  // weight：对应的权重
  keys: [
    {
      name: 'title',
      weight: 0.7
    },
    {
      name: 'path',
      weight: 0.3
    }
  ]
})

// search相关
const search = ref('')
const onShowClick = () => {
  isShow.value = !isShow.value
}

// 搜索方法
const searchOptions = ref([])
const querySearch = (query) => {
  if (query !== '') {
    searchOptions.value = fuse.search(query)
    console.log(searchOptions.value)
  } else {
    searchOptions.value = []
  }
}
// 选中的回调
const router = useRouter()
const onSelectChange = (val) => {
  console.log(val)
  router.push(val.path)
}

const headerSearchSelectRef = ref(null)
const onClose = () => {
  headerSearchSelectRef.value.blur()
  isShow.value = false
  searchOptions.value = []
}

watch(isShow, (val) => {
  if (val) {
    headerSearchSelectRef.value.focus() // 自动获取焦点
    document.body.addEventListener('click', onClose)
  } else {
    document.body.removeEventListener('click', onClose)
  }
})
</script>
<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
