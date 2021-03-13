<template>
  <footer class="relative w-full opacity-75">
    <div class="bg-navigation">
      <div
        class="sm:px-6 md:flex md:items-center md:justify-between lg:px-8 max-w-6xl px-4 py-6 mx-auto"
      >
        <div class="md:order-2 flex justify-center">
          <a
            href="https://twitter.com/zacann0n"
            rel="noopener noreferrer"
            target="_blank"
            title="Twitter"
            class="no-external-link text-primary--muted hover:text-primary mx-2 my-2"
          >
            <span class="sr-only">Twitter</span>
            <twitter class="w-6 h-6" />
          </a>
          <a
            href="https://github.com/brooksztb"
            rel="noopener noreferrer"
            target="_blank"
            title="Github"
            class="no-external-link text-primary--muted hover:text-primary mx-2 my-2"
          >
            <span class="sr-only">GitHub</span>
            <github class="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/zachary-brooks-3b8b5b84/"
            rel="noopener noreferrer"
            target="_blank"
            title="Linkedin"
            class="no-external-link text-primary--muted hover:text-primary lg:mr-0 mx-2 my-2"
          >
            <span class="sr-only">LinkedIn</span>
            <linked-in class="w-6 h-6" />
          </a>
        </div>
        <div class="md:mt-0 md:order-1 mt-8">
          <p class="text-primary-muted text-base leading-6 text-center">
            © {{ new Date().getFullYear() }} Zachary Brooks
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Twitter from '@/assets/images/icons/twitter.svg?inline'
import Github from '@/assets/images/icons/github.svg?inline'
import LinkedIn from '@/assets/images/icons/linked_in.svg?inline'

export default {
  components: {
    Twitter,
    Github,
    LinkedIn
  }
}
</script>

<style></style>
