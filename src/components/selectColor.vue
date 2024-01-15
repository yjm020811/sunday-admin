<template>
  <el-dialog
    :title="$t('universal.title')"
    :model-value="modelValue"
    @close="close"
    width="22%"
  >
    <div class="content">
      <p>{{ $t('theme.themeColorChange') }}</p>
      <el-color-picker
        v-model="mColor"
        :predefine="predefineColors"
        @change="changeColor"
      ></el-color-picker>
    </div>
    <template #footer>
      <el-button @click="cancel">{{ $t('universal.cancel') }}</el-button>
      <el-button type="primary" @click="confirm">{{
        $t('universal.confirm')
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script setup>
import { defineProps, ref, defineEmits } from 'vue'
import { useCommonStore } from '@/store/modules/common'
const commonStore = useCommonStore()

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const close = () => {
  emits('update:modelValue', false)
}
const cancel = () => {}
const confirm = () => {
  close()
}

// 默认色值
const mColor = ref(commonStore.theme)
const changeColor = (val) => {
  mColor.value = val
  commonStore.theme = val
  commonStore.changeTheme(val)
  console.log('当前选中的颜色为：', val)
}

// 预定义色值
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
]
</script>
<style lang="scss" scoped>
.content {
  text-align: center;
  .title {
    margin-bottom: 12px;
  }
}
</style>
