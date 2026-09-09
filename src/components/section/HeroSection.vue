<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './Navbar.vue'

import sky from '@/assets/sky.jpg'
import mountain3 from '@/assets/mountain-3.png'
import mountain2 from '@/assets/mountain-2.png'
import mountain1 from '@/assets/mountain-1.png'

const scrollY = ref(0)

const currentText = ref(0)

const texts = [
    'Lifelong Learner',
    'Full Stack Web Developer',
    'Problem Solver',
    'Tech Enthusiast'
]

let textInterval

const handleScroll = () => {
    scrollY.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    textInterval = setInterval(() => {
        currentText.value = (currentText.value + 1) % texts.length
    }, 2500)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    clearInterval(textInterval)
})
</script>

<template>
    <Navbar />

    <section class="relative h-screen overflow-hidden">
        <div class="absolute inset-0 z-0 h-full w-full bg-cover bg-bottom" :style="{
            backgroundImage: `url(${sky})`
        }"></div>

        <div class="absolute inset-0 z-10 h-full w-full bg-cover bg-bottom" :style="{
            backgroundImage: `url(${mountain3})`,
            transform: `translateY(${scrollY * 0}px)`
        }"></div>

        <div class="absolute inset-0 z-20 h-full w-full bg-cover bg-bottom" :style="{
            backgroundImage: `url(${mountain2})`,
            transform: `translateY(${scrollY * 0.10}px)`
        }"></div>

        <div class="absolute inset-0 z-30 h-full w-full bg-cover bg-bottom" :style="{
            backgroundImage: `url(${mountain1})`,
            transform: `translateY(${scrollY * 0.2}px)`
        }"></div>

        <div class="absolute inset-0 z-40 bg-black/40"></div>

        <div class="absolute bottom-0 left-0 right-0 z-40 h-40"
            style="background: linear-gradient(to bottom, transparent, #000);"></div>

        <div class="absolute inset-0 z-50 flex items-center justify-center px-6 text-center" :style="{
            transform: `translateY(${scrollY * 0.15}px)`
        }">
            <div class="text-white">
                <p
                    class="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white/70 animate-[fadeIn_1s_ease-out]">
                    Hi, I'm Rafka
                </p>

                <h1 class="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                    <span class="block">I'm a</span>

                    <span :key="currentText" class="mt-2 block text-white animate-[fadeUp_0.6s_ease-out]">
                        {{ texts[currentText] }}
                    </span>
                </h1>
            </div>
        </div>
    </section>
</template>

<style>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(15px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>