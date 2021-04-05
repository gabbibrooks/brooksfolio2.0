<template>
  <footer class="[ footer ] [ bg-primary ]">
    <div class="[ footer-items ] [ wrapper ]">
      <div class="footer-links">
        <a
          href="https://twitter.com/zacann0n"
          rel="noopener noreferrer"
          target="_blank"
          title="Twitter"
          class="[ footer-link ] [ text-primary ]"
        >
          <span class="visually-hidden">Twitter</span>
          <twitter class="icn" />
        </a>
        <a
          href="https://github.com/brooksztb"
          rel="noopener noreferrer"
          target="_blank"
          title="Github"
          class="[ footer-link ] [ text-primary ]"
        >
          <span class="visually-hidden">GitHub</span>
          <github class="icn" />
        </a>
        <a
          href="https://www.linkedin.com/in/zachary-brooks-3b8b5b84/"
          rel="noopener noreferrer"
          target="_blank"
          title="Linkedin"
          class="[ footer-link ] [ text-primary ]"
        >
          <span class="visually-hidden">LinkedIn</span>
          <linked-in class="icn" />
        </a>
      </div>
      <div class="[ footer-copyright ] [ text-primary ]">
        <p>© {{ new Date().getFullYear() }} Zachary Brooks</p>
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
    LinkedIn,
  },
}
</script>

<style scoped>
.footer {
  position: relative;
  width: 100%;
  opacity: 0.75;
}

.footer-items {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  order: 2;
}

.footer-link {
  margin: 0.5rem;
}

.footer-link:hover {
  color: var(--color-primary);
}

.footer-link .icn {
  width: 2rem;
  height: 2rem;
}

.footer-copyright {
  margin-top: 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
}

.footer-copyright p {
}

@media screen and (min-width: 800px) {
  .footer-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-link .icn {
    width: 1.5rem;
    height: 1.5rem;
  }

  .footer-copyright {
    order: 1;
    margin-top: 0;
  }
}
</style>
