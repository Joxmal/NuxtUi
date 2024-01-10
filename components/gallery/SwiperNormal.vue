<template>
  <div class="h-full w-full">
    <Swiper
    class="hover:cursor-pointer  h-full w-full"
    :style="{
        '--swiper-navigation-color': '#0074DD',
        '--swiper-pagination-color': '#18E118',
        '--swiper-pagination-bullet-inactive-color': '#29AAEF',
    }"
    :loop="true"
    :spaceBetween="0"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    :pagination="{ clickable: true }"
    :autoplay="{
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    }">
        <swiper-slide @click="seleccion(text.nombre)" class="h-full w-full" v-for="text in swiperTextBase" :key="text.description">
            <div class="relative h-full w-full">

                <img :src="text.img" class="absolute w-full h-full -z-40 bg-no-repeat blur-md object-cover"/>

                <img class="h-full md:object-cover w-full md:w-[50%] md:mx-auto" :src="text.img" alt="image">
                
                <div class="absolute  top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white z-40">
                    <div class="hover:cursor-alias bg-black/45 p-4 rounded-3xl hover:bg-gray-400/85 hover:text-black transition-colors duration-500">
                        <h3 class=" text-center uppercase font-bold ">Comprar</h3>
                    </div>
                </div>

                <div class="hidden md:block absolute top-[50%] left-[13%] -translate-x-1/2 -translate-y-1/2 text-white z-40 w-24 ">
                    <div class="hover:cursor-alias bg-black/45 p-4 rounded-3xl hover:bg-gray-400/85 hover:text-black transition-colors duration-500">
                        <img  src="/logo.png" class="h-full w-full rounded-full" />
                    </div>
                </div>

                <div class="hidden md:block absolute top-[50%] left-[88%] -translate-x-1/2 -translate-y-1/2 text-white z-40 w-24">
                    <div class="hover:cursor-alias bg-black/45 p-4 rounded-3xl hover:bg-gray-400/85 hover:text-black transition-colors duration-500">
                        <img  src="/logo.png" class="h-full w-full rounded-full" />
                    </div>
                </div>


            </div>
        </swiper-slide >
    </Swiper>
  </div>
</template>
<script setup>
import {Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation,Thumbs, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

defineComponent({
    Swiper,
    SwiperSlide
});

const emit = defineEmits(['seleccion'])


function seleccion(nombre){
emit('seleccion',nombre)
}


const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules =[Thumbs,Navigation,Autoplay,Pagination]
  const swiperTextBase = ref([
    {
      nombre: 'canonlbp6030',
      description: 'un loco genia pero loco',
      img: '/gorros/1.jpg'
    },
    {
      nombre: 'hp107',
      description: 'un loco genia pero loco',
      img: '/gorros/2.jpg'
    },
    {
      nombre: 'hp1102w',
      description: 'un loco genia pero loco',
      img: '/gorros/3.jpg'
    },
    {
      nombre: 'hp2014',
      description: 'un loco genia pero loco',
      img: '/gorros/4.jpg'
    },
    {
      nombre: 'laserjetmfp',
      description: 'un loco genia pero loco',
      img: '/gorros/5.jpg'
    },
    {
      nombre: 'laserjetmfp',
      description: 'un loco genia pero loco',
      img: '/gorros/6.jpg'
    },
    {
      nombre: 'laserjetmfp',
      description: 'un loco genia pero loco',
      img: '/gorros/7.jpg'
    },
    {
      nombre: 'laserjetmfp',
      description: 'un loco genia pero loco',
      img: '/gorros/8.jpg'
    },
    {
      nombre: 'laserjetmfp',
      description: 'un loco genia pero loco',
      img: '/gorros/9.jpg'
    },
  ]);


</script>