<template>
    <nav class="nav" :class="{ color: scrollPosition > 0 }">
        <div class="container nav__content">
            <router-link to="/" href="" class="nav__logo">
                <img src="../assets/images/Logo.svg" alt="LOGO">
            </router-link>

            <ul class="nav__list">
                <li v-for="(link, i) in links" :key="i">
                    <router-link class="nav__list-link" :to="link.url">
                        {{ link.title }}
                    </router-link>
                </li>
            </ul>

        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";
const scrollPosition = ref(0);


const links = ref([
    { title: 'Главная', url: '/' },
    { title: 'Фильмы', url: '/movie' },
    { title: 'Сериалы', url: '/tv' },
]);

window.addEventListener('scroll', () => scrollPosition.value = window.scrollY);

console.log(scrollPosition.value);

</script>

<style lang="scss">
.nav {
    background: rgba(20, 20, 20, 0.50);
    padding: 25px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.50);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    transition: .3s;

    &.color {
        background: black;
    }

    &__logo {
        & img {
            transition: .3s;
        }

        & img:hover {
            transform: scale(.95);
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__list {
        display: flex;
        align-items: center;
        gap: 30px;

        &-link {
            color: rgba(255, 255, 255, 0.60);
            font-family: 'Raleway';
            font-size: 18px;
            font-weight: 700;
            transition: .5s;

            &::after {
                content: '';
                background: #149A03;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                bottom: -17px;
                transform: translate(-50%, 50%);
                transition: 1s;
                overflow: hidden;
                opacity: 0;
            }

            &.router-link-exact-active {
                color: white;
                position: relative;

                &::after {
                    opacity: 1;

                }
            }
        }
    }

}
</style>