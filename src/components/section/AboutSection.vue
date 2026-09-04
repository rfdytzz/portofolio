<script setup>
import BlurText from '@/components/vuebits/BlurText.vue'
import LogoLoop from '@/components/vuebits/LogoLoop.vue'

const technologies = [
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        alt: 'Vue.js'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
        alt: 'Laravel'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        alt: 'JavaScript'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        alt: 'PHP'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        alt: 'Tailwind CSS'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        alt: 'MySQL'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        alt: 'Bootstrap'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        alt: 'Figma'
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        alt: 'Figma'
    }
]
</script>

<template>
    <section id="about" class="bg-[#030411] px-5 py-24 text-white sm:px-8 sm:py-32">
        <div class="mx-auto w-full max-w-5xl">

            <div class="mb-8 flex items-end justify-between">
                <div>

                    <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        About Me
                    </h2>
                </div>

            </div>

            <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">

                <div class="group relative min-h-[430px] overflow-hidden rounded-2xl
                           bg-[#292947] p-7 sm:col-span-2 sm:row-span-2 sm:p-9">
                    <div class="relative z-10 flex h-full flex-col justify-between">

                        <div>
                            <p class="text-xs uppercase tracking-[0.2em] text-white/35">
                                Who I am
                            </p>

                            <BlurText text="I build things for the web." :delay="80" :animate-by="'words'"
                                :direction="'top'" class="mt-16 max-w-xl text-4xl font-semibold
                                       leading-[1.05] tracking-tight sm:text-5xl" />
                        </div>

                        <div>
                            <p class="max-w-lg text-sm leading-7 text-[#94949a] sm:text-base">
                                I'm Rafka, a developer who enjoys creating
                                modern web applications. I work with both
                                frontend and backend technologies and learn
                                by building real projects.
                            </p>
                        </div>

                    </div>

                    <div class="absolute -bottom-32 -right-32 h-80 w-80 rounded-full
                               border border-white/[0.06] transition-transform
                               duration-700 group-hover:scale-110"></div>

                    <div class="absolute -bottom-20 -right-20 h-52 w-52 rounded-full
                               border border-white/[0.05]"></div>
                </div>

                <div class="relative flex min-h-[210px] flex-col justify-between
                           overflow-hidden rounded-2xl bg-[#202035] p-5">
                    <div>
                        <p class="text-xs uppercase tracking-[0.2em] text-white/35">
                            Focus
                        </p>

                        <p class="mt-6 text-2xl font-medium leading-tight">
                            learning what is not yet known
                        </p>
                    </div>

                    <a href="#contact" class="mt-6 inline-flex rounded-full bg-[#7137E8]
                                   px-5 py-3 text-xs font-medium text-white
                                   transition-transform duration-300
                                   group-hover:translate-x-1">
                        Check out my projects →
                    </a>
                </div>

                <div class="relative flex min-h-[210px] flex-col justify-between
                           overflow-hidden rounded-2xl bg-[#202035] p-7">
                    <div>
                        <p class="text-xs uppercase tracking-[0.2em] text-white/35">
                            Currently
                        </p>

                        <p class="mt-6 text-2xl font-medium leading-tight">
                            Life
                        </p>
                    </div>

                    <div class="flex items-center gap-2 text-sm text-[#9292A8]">
                        <span class="h-2 w-2 rounded-full bg-[#8B5CF6]"></span>
                        Available for new ideas
                    </div>
                </div>

                <div class="group relative flex min-h-[210px] flex-col
                           justify-between overflow-hidden rounded-2xl
                           bg-[#7137E8] p-7 sm:col-span-1">
                    <p class="text-xs uppercase tracking-[0.2em] text-white/60">
                        Let's work
                    </p>

                    <div>
                        <p class="max-w-xs text-2xl font-medium leading-tight">
                            Have something
                            in mind?
                        </p>

                        <a href="#contact" class="mt-6 inline-flex rounded-full bg-[#080810]
                                   px-5 py-3 text-xs font-medium text-white
                                   transition-transform duration-300
                                   group-hover:translate-x-1">
                            Let's Talk →
                        </a>
                    </div>
                </div>

                <div class="relative min-h-[210px] overflow-hidden rounded-2xl
                           bg-[#292947] p-7 sm:col-span-2">
                    <div class="relative z-10">
                        <p class="text-xs uppercase tracking-[0.2em] text-white/35">
                            Tech Stack
                        </p>

                        <p class="mt-3 max-w-sm text-sm leading-6 text-[#A7A7BB]">
                            Tools and technologies I use to turn ideas into
                            functional digital experiences.
                        </p>
                    </div>

                    <div class="absolute bottom-5 left-0 right-0">
                        <LogoLoop :logos="technologies" :speed="70" direction="left" :logo-height="38" :gap="55"
                            :pause-on-hover="true" :fade-out="false" />
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>