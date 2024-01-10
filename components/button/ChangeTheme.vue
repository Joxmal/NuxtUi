<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly>
    <UIcon 
      class=" hover:cursor-pointer"  
      size="30px"
      aria-label="Theme"
      @click="isDark = !isDark" variant="ghost" 
      :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'">
    </UIcon>
  </ClientOnly>
</template>