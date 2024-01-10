<template>
<div class="relative rounded-none bg-cover flex flex-wrap  w-full justify-center md:justify-center p-2 bg-[url('/fondoViolet.jpg')]">
  
  <div class="">
    <img  src="/logo.png" class="h-24 w-24  rounded-full" />
  </div>
  <div
    class="left-4 top-4 min-[855px]:flex absolute min-[855px]:left-32 " >
    <ButtonChangeTheme/>
  </div>


  <div class="flex-grow hidden min-[855px]:w-auto text-black min-[855px]:flex justify-center items-center [&>ul>li]:p-1 [&>ul>li]:text-white [&>ul>li]:border-transparent [&>ul>li]:border-b-8 ">
    <ul class="font-medium flex [&>li>a]:px-8  md:p-0" >
      <li class="hover">
        <a class="" href="#" aria-current="page">INICIO</a>
      </li>
      <li class="hover">
        <a class="" href="# "  >TIENDA</a>
      </li>
      <li class="hover">
        <a class="" href="#"  >CONTACTO</a>
      </li>
      <li class="hover">
        <a class="" href="#"  >INFORMACION</a>
      </li>
    </ul>
  </div>


  <!-- <span class="hidden min-[855px]:flex w-16 min-[855px]:justify-center items-center relative">
    <div class="absolute flex justify-center items-center right-0  bg-fuchsia-300 rounded-full w-16 h-16">
      <UIcon size="40px" class="text-black"  name="i-guidance-shop"></UIcon>
    </div>
  </span> -->

  <span class=" flex w-11 absolute top-4 right-4 ">
    <div class="absolute bg-fuchsia-300 flex justify-center items-center right-0 rounded-full w-10 h-10">
      <UIcon size="30px" class="text-black"  name="i-guidance-shop"></UIcon>
    </div>
  </span>

</div>




  <NuxtPage/>



</template>
  

<style scoped>

.hover{
  @apply relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-fuchsia-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center
}

</style>