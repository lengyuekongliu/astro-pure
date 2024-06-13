<script setup lang="ts">
import { ref } from 'vue'

const menuActive = ref(false)

function openMenu() {
    menuActive.value = !menuActive.value
}
</script>

<template>
    <header class="container">
        <div class="navigation">
            <a href="/" class="navigation-title">KongLiu's Blog</a>
            <nav class="menu flex flex-col" :class="{ 'active': menuActive }">
                <button class="menu-button self-end" @click="openMenu">
                    <i class="iconify text-3xl" :class="[menuActive ? 'mdi--close' : 'mdi--menu']"></i>
                </button>
                <ul :class="{ 'hidden': !menuActive }" class="gap-4 pt-4 text-center md:flex md:self-end md:pt-0">
                    <li>
                        <a href="/" class="hover:underline underline-offset-2">主页</a>
                    </li>
                    <li>
                        <a href="/archive" class="hover:underline underline-offset-2">归档</a>
                    </li>
                    <li>
                        <a href="/tags" class="hover:underline underline-offset-2">标签</a>
                    </li>
                    <li>
                        <a href="/about" class="hover:underline underline-offset-2">关于</a>
                    </li>
                    <li>
                        <a href="/rss.xml" target="_blank" class="hover:underline underline-offset-2">RSS</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>



<style scoped>
.navigation {
    @apply p-4 md:py-8;
}

.navigation .menu-button {
    @apply flex items-center md:hidden;
}

.navigation .menu {
    line-height: 30px;
}

.navigation .navigation-title {
    background: -webkit-linear-gradient(45deg, #e5b751, #1677b3, #cc5595 80%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.25rem;
    font-weight: bold;
    position: absolute;
    line-height: 30px;
}
</style>