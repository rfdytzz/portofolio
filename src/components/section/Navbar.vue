<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true
    }, 100)
})
</script>

<template>
    <nav class="fixed top-0 left-1/2 z-100 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2
               rounded-b-3xl border-x border-b border-white/10
               bg-black/50 px-3 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl
               transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" :class="isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-10 opacity-0'">
        <div class="flex items-center justify-between">
            <div class="hidden items-center gap-0.5 md:flex">
                <a href="#home" class="rounded-full px-4 py-2 text-xs font-medium text-white/60
                           transition-all duration-300 hover:bg-white/10 hover:text-white">
                    Home
                </a>

                <a href="#about" class="rounded-full px-4 py-2 text-xs font-medium text-white/60
                           transition-all duration-300 hover:bg-white/10 hover:text-white">
                    About
                </a>

                <a href="#projects" class="rounded-full px-4 py-2 text-xs font-medium text-white/60
                           transition-all duration-300 hover:bg-white/10 hover:text-white">
                    Projects
                </a>

                <a href="#contact" class="rounded-full px-4 py-2 text-xs font-medium text-white/60
                           transition-all duration-300 hover:bg-white/10 hover:text-white">
                    Contact
                </a>
            </div>

            <a href="#contact" class="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black
                       transition-all duration-300 hover:scale-105 hover:bg-white/90">
                Let's Talk
            </a>

        </div>
    </nav>
</template>