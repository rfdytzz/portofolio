<script setup>
import GoeyNav from '../shadcn/goeynav/GoeyNav.vue'

const items = [
    { label: 'Home', href: '#' },
    { label: 'Tanya AI', href: '#ask-ai' },
    { label: 'Projects', href: '#projects' },
]
</script>

<template>
    <nav class="fixed top-0 left-0 z-50 w-full md:px-10 px-5 py-5 bg-gray-900 md:bg-transparent">
        <div class="flex w-full items-center justify-between">
            <a href="#" class="text-3xl font-bold text-white">
                rfk<span class="text-emerald-400">dyt</span>p
            </a>

            <GoeyNav class="hidden md:block" :items="items" :particle-count="15" :particle-distances="[90, 10]"
                :particle-r="100" :initial-active-index="0" :animation-time="600" :time-variance="300"
                :colors="[1, 2, 3, 1, 2, 3, 1, 4]" />
        </div>
    </nav>
</template>

<style>
:root {
    --color-1: #ff6b6b;
    --color-2: #4ecdc4;
    --color-3: #45b7d1;
    --color-4: #f9ca24;
}
</style>
