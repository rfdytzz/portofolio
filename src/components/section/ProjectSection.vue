<script setup>
import BlurText from '@/components/vuebits/BlurText.vue'

const projects = [
    {
        title: 'SMK Maarif NU 1 Ajibarang Website',
        description: 'Integrated digital platform for school information and services',
        technologies: ['Laravel', 'Vue.js', 'React.js', 'Tailwind CSS', 'MySQL'],
        link: 'https://github.com/rfdytzz/manusa',
    },
    {
        title: 'Unknowns',
        description: 'A platform for sending anonymous messages that can also be used to gather suggestions',
        technologies: ['Laravel', 'Vue.js', 'MySQL'],
        link: 'https://github.com/rfdytzz/unknowns-messages',
    },
    {
        title: 'One Piece Explorer',
        description: 'A One Piece explorer project (characters, etc.) that fetches data from a public API.',
        technologies: ['Laravel', 'Vue.js'],
        link: 'https://github.com/rfdytzz/one-piece-character-api',
    },
]
</script>

<template>
    <section id="projects" class="bg-[#030411] px-5 py-24 text-white sm:px-8 sm:py-32">
        <div class="mx-auto w-full max-w-5xl">

            <div class="mb-10">
                <BlurText text="My Selected Projects" :delay="80" :animate-by="'words'" :direction="'top'"
                    class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl" />
            </div>

            <div class="border-t border-white/[0.08]">
                <article v-for="(project, index) in projects" :key="project.title"
                    class="group grid grid-cols-1 gap-5 border-b border-white/[0.08] py-8 transition-colors duration-300 sm:grid-cols-[1fr_auto] sm:items-center sm:py-9">
                    <div>
                        <div class="flex items-center gap-4">
                            <h3
                                class="text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-white sm:text-xl">
                                {{ project.title }}
                            </h3>
                        </div>

                        <p class="mt-2 max-w-xl text-sm leading-6 text-white/35">
                            {{ project.description }}
                        </p>

                        <div class="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                            <span v-for="technology in project.technologies" :key="technology"
                                class="text-xs text-[#7137E8]">
                                {{ technology }}
                            </span>
                        </div>
                    </div>

                    <a :href="project.link"
                        class="w-fit pl-9 text-sm text-white/45 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:pl-0">
                        View Project →
                    </a>
                </article>
            </div>

        </div>
    </section>
</template>