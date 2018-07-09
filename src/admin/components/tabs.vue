<template lang="pug">
  .tabs__wrap
    .tabs
      input(type="radio" name="tab" id="tab-1" checked).tabs__input
      label(for="tab-1").tabs__labels Tab-1
      input(type="radio" name="tab" id="tab-2").tabs__input
      label(for="tab-2").tabs__labels Tab 2
      input(type="radio" name="tab" id="tab-3").tabs__input
      label(for="tab-3").tabs__labels Tab-3

    .content
      .content__page.content__page-1
        .subtitle Страница обо мне
      .content__page.content__page-2
        .subtitle Страница обо мне
      .content__page.content__page-3
        .subtitle Страница обо мне
</template>
