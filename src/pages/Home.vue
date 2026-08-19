<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import BlurText from '@/components/shadcn/text/BlurText/BlurText.vue'

const cursorX = ref(0)
const cursorY = ref(0)

const targetX = ref(0)
const targetY = ref(0)

const spotlightX = ref(50)
const spotlightY = ref(50)

const buttonX = ref(0)
const buttonY = ref(0)

let animationFrame = null

const handleMouseMove = (event) => {
    targetX.value = event.clientX
    targetY.value = event.clientY

    spotlightX.value = (event.clientX / window.innerWidth) * 100
    spotlightY.value = (event.clientY / window.innerHeight) * 100
}

const handleButtonMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    const x = event.clientX - (rect.left + rect.width / 2)
    const y = event.clientY - (rect.top + rect.height / 2)

    buttonX.value = x * 0.15
    buttonY.value = y * 0.15
}

const resetButton = () => {
    buttonX.value = 0
    buttonY.value = 0
}

const animateCursor = () => {
    cursorX.value += (targetX.value - cursorX.value) * 0.12
    cursorY.value += (targetY.value - cursorY.value) * 0.12

    animationFrame = requestAnimationFrame(animateCursor)
}

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
    animationFrame = requestAnimationFrame(animateCursor)
})

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)

    if (animationFrame) {
        cancelAnimationFrame(animationFrame)
    }
})
</script>

<template>
    <div class="min-h-screen bg-gray-900">

        <AppNavbar />

        <div class="pointer-events-none fixed inset-0 z-0" :style="{
            background: `radial-gradient(
                    600px circle at ${spotlightX}% ${spotlightY}%,
                    rgba(52, 211, 153, 0.07),
                    transparent 70%
                )`
        }"></div>

        <div class="pointer-events-none fixed left-0 top-0 z-9999 hidden h-6 w-6 rounded-full border border-emerald-400/70 md:block"
            :style="{
                transform: `translate3d(
                    ${cursorX - 12}px,
                    ${cursorY - 12}px,
                    0
                )`,
                willChange: 'transform'
            }"></div>

        <div class="pointer-events-none fixed left-0 top-0 z-10000 hidden h-1.5 w-1.5 rounded-full bg-emerald-400 md:block"
            :style="{
                transform: `translate3d(
                    ${targetX - 3}px,
                    ${targetY - 3}px,
                    0
                )`,
                willChange: 'transform'
            }"></div>

        <main class="relative z-10">

            <section class="relative flex min-h-screen items-center overflow-hidden">
                <div class="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
                    <div class="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_320px]">

                        <div class="min-w-0">
                            <div class="mb-7 flex items-center gap-3">
                                <p class="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                                    FullStack Developer
                                </p>
                            </div>
                            <div class="flex max-w-4xl items-end">
                                <BlurText text="Hello, I'm a Lifelong Learner." :delay="120" :animate-by="'words'"
                                    direction="top" :threshold="0.1"
                                    class="text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-gray-100 sm:text-6xl md:text-7xl lg:text-8xl" />
                                <span class="mb-1 ml-3 inline-block h-[0.78em] w-0.75 shrink-0 bg-emerald-400 md:mb-2"
                                    style="animation: blink 1s step-end infinite"></span>
                            </div>
                            <p class="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                                I'm Rafka, a developer who enjoys turning ideas
                                into simple, functional, and thoughtful interfaces.
                            </p>
                            <div class="mt-10 flex items-center gap-7">

                                <a href="#projects"
                                    class="group flex items-center gap-3 text-sm font-medium text-gray-200 transition-transform duration-200"
                                    :style="{
                                        transform: `translate3d(
                                            ${buttonX}px,
                                            ${buttonY}px,
                                            0
                                        )`
                                    }" @mousemove="handleButtonMove" @mouseleave="resetButton">

                                    <span
                                        class="border-b border-emerald-400 pb-1 transition-colors group-hover:text-emerald-400">
                                        View my work
                                    </span>

                                    <span
                                        class="text-lg text-emerald-400 transition-transform duration-300 group-hover:translate-x-2">
                                        →
                                    </span>
                                </a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                                    class="text-sm font-medium text-gray-500 transition-colors hover:text-gray-200">
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div class="hidden lg:block">
                            <div
                                class="relative aspect-square overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/70 p-6">
                                <div class="pointer-events-none absolute inset-0 opacity-[0.08]" style="
                                        background-image:
                                            linear-gradient(
                                                #34d399 1px,
                                                transparent 1px
                                            ),
                                            linear-gradient(
                                                90deg,
                                                #34d399 1px,
                                                transparent 1px
                                            );
                                        background-size: 32px 32px;
                                    "></div>
                                <div class="relative z-10 font-mono text-sm leading-7">
                                    <div class="text-gray-600">
                                        // currently learning
                                    </div>
                                    <div class="mt-4">
                                        <span class="text-purple-400">
                                            const
                                        </span>
                                        <span class="text-gray-300">
                                            developer
                                        </span>
                                        <span class="text-gray-600">
                                            =
                                        </span>
                                    </div>
                                    <div class="pl-4 text-gray-400">
                                        {
                                    </div>
                                    <div class="pl-8">
                                        <span class="text-gray-500">
                                            name:
                                        </span>
                                        <span class="text-emerald-400">
                                            'Rafka',
                                        </span>
                                    </div>
                                    <div class="pl-8">
                                        <span class="text-gray-500">
                                            age:
                                        </span>
                                        <span class="text-emerald-400">
                                            null,
                                        </span>
                                    </div>
                                    <div class="pl-8">
                                        <span class="text-gray-500">
                                            status:
                                        </span>
                                        <span class="text-emerald-400">
                                            'learning',
                                        </span>
                                    </div>
                                    <div class="pl-8">
                                        <span class="text-gray-500">
                                            main_stack:
                                        </span>
                                        <span class="text-emerald-400">
                                            'Vue.js, Laravel',
                                        </span>
                                    </div>
                                    <div class="pl-8">
                                        <span class="text-gray-500">
                                            language:
                                        </span>
                                        <span class="text-emerald-400">
                                            'JavaScript, PHP',
                                        </span>
                                    </div>
                                    <div class="pl-4 text-gray-400">
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute -bottom-52 -right-52 h-125 w-125 rounded-full border border-emerald-400/[0.07]">
                </div>
                <div
                    class="pointer-events-none absolute -bottom-36 -right-36 h-90 w-90 rounded-full border border-emerald-400/5">
                </div>
            </section>

            <section id="ask-ai" class="flex min-h-screen items-center px-6 py-24 lg:px-8">
                <div class="mx-auto w-full max-w-5xl">
                    <div class="mb-8 text-center">
                        <p class="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                            Ask AI
                        </p>
                        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                            Punya pertanyaan?
                        </h2>
                        <p class="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-400">
                            Tanya seputar pengalaman, skill, atau project yang pernah saya kerjakan.
                        </p>
                    </div>

                    <div class="overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/70 shadow-2xl shadow-emerald-950/20 backdrop-blur">
                        <div class="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                            <div class="flex items-center gap-3">
                                <span class="relative flex h-3 w-3">
                                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50"></span>
                                    <span class="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
                                </span>
                                <div>
                                    <p class="text-sm font-medium text-gray-100">Dyta AI</p>
                                    <p class="text-xs text-gray-500">Online · Portfolio assistant</p>
                                </div>
                            </div>
                            <span class="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">Beta</span>
                        </div>

                        <div class="space-y-6 px-5 py-8 sm:px-8">
                            <div class="flex gap-3">
                                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400 font-mono text-xs font-bold text-gray-950">AI</div>
                                <div class="max-w-2xl rounded-2xl rounded-tl-sm border border-gray-800 bg-gray-900 px-4 py-3 text-sm leading-6 text-gray-300">
                                    Halo! Saya bisa membantu menjawab pertanyaan tentang Rafka, teknologi yang digunakan, dan project yang ada di portfolio ini.
                                </div>
                            </div>

                            <div class="flex flex-wrap gap-2 pl-11">
                                <button type="button" class="rounded-full border border-gray-700 px-3 py-1.5 text-xs text-gray-400 transition hover:border-emerald-400/50 hover:text-emerald-300">Tech stack apa yang digunakan?</button>
                                <button type="button" class="rounded-full border border-gray-700 px-3 py-1.5 text-xs text-gray-400 transition hover:border-emerald-400/50 hover:text-emerald-300">Project terbaru apa?</button>
                                <button type="button" class="rounded-full border border-gray-700 px-3 py-1.5 text-xs text-gray-400 transition hover:border-emerald-400/50 hover:text-emerald-300">Bagaimana cara menghubungi?</button>
                            </div>
                        </div>

                        <form class="border-t border-gray-800 p-4 sm:p-5" @submit.prevent>
                            <div class="flex items-end gap-3 rounded-xl border border-gray-700 bg-gray-900/80 p-2 transition focus-within:border-emerald-400/60 focus-within:ring-1 focus-within:ring-emerald-400/30">
                                <textarea rows="1" aria-label="Pertanyaan untuk Rafka AI" placeholder="Tulis pertanyaanmu di sini..." class="min-h-11 flex-1 resize-none bg-transparent px-3 py-2 text-sm text-gray-200 outline-none placeholder:text-gray-600"></textarea>
                                <button type="submit" aria-label="Kirim pertanyaan" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400 text-lg font-semibold text-gray-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300">↑</button>
                            </div>
                            <p class="mt-3 text-center text-xs text-gray-600">AI dapat membuat kesalahan. Untuk pertanyaan penting, hubungi saya langsung.</p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>

@keyframes blink {

    0%,
    45% {
        opacity: 1;
    }

    46%,
    100% {
        opacity: 0;
    }
}
</style>
