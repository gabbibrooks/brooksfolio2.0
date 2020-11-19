<template>
  <footer class="relative w-full opacity-75">
    <div class="bg-navigation">
      <div
        class="max-w-6xl px-4 py-6 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex justify-center md:order-2">
          <a
            href="https://twitter.com/zacann0n"
            rel="noreferrer"
            target="_blank"
            title="Twitter Profile"
            class="mx-2 my-2 nav-link text-primary--muted hover:text-primary"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
          </a>
          <a
            href="https://github.com/brooksztb"
            rel="noreferrer"
            target="_blank"
            title="Github Profile"
            class="mx-2 my-2 nav-link text-primary--muted hover:text-primary"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/zachary-brooks-3b8b5b84/"
            rel="noreferrer"
            target="_blank"
            title="Linkedin Profile"
            class="mx-2 my-2 nav-link text-primary--muted hover:text-primary lg:mr-0"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
          </a>
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <p class="text-base leading-6 text-center text-primary-muted">
            © {{ new Date().getFullYear() }} Zachary Brooks
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
