<template>
  <ContentContainer>
    <header class="header">
      <div class="burger" @click="isActive = !isActive" :class="{ active: isActive }">
      </div>
      <nav class="nav" :class="{ active: isActive }">
        <ul class="nav__list">
          <li class="nav__item">
            <img class="nav__item-icon" src="@shared/assets/icons/profile-icon.svg" alt="btn icon">
            Profile
          </li>
          <li class="nav__item">
            <img class="nav__item-icon" src="@shared/assets/icons/like-icon.svg" alt="btn icon">
            Liked Songs
          </li>
          <li class="nav__item">
            <img class="nav__item-icon" src="@shared/assets/icons/language-icon.svg" alt="btn icon">
            Language
          </li>
          <li class="nav__item">
            <img class="nav__item-icon" src="@shared/assets/icons/message-icon.svg" alt="btn icon">
            Contact us
          </li>
          <li class="nav__item">
            <img class="nav__item-icon" src="@shared/assets/icons/setting-icon.svg" alt="btn icon">
            Settings
          </li>
        </ul>
      </nav>
      <button class="header__btn">
        <svg width="20" height="20" viewBox="0 0 19.7071 19.7071" fill="none">
          <path
            d="M19 19L13.85 13.85M1 8.71C1 4.45 4.45 1 8.71 1C12.97 1 16.42 4.45 16.42 8.71C16.42 12.97 12.97 16.42 8.71 16.42C4.45 16.42 1 12.97 1 8.71Z"
            stroke="#091127" stroke-opacity="1.000000" stroke-width="2.000000" />
        </svg>
      </button>
    </header>
  </ContentContainer>
</template>

<script setup lang="ts">
import './style.scss';
import { ContentContainer } from '@shared/ui/index';
import { ref } from 'vue';

const isActive = ref<boolean>(false);
</script>