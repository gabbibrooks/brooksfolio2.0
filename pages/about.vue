<template>
  <div class="main-content-container">
    <hero header="About Me" />
    <main id="content" class="[ main-content ] [ wrapper ]">
      <div class="content-layout">
        <div class="image-container">
          <div class="image">
            <cld-image
              :public-id="src"
              crop="scale"
              fetchFormat="auto"
              quality="80"
              loading="lazy"
              alt="Image of Zachary Brooks"
            >
              <cld-placeholder type="blur" />
            </cld-image>
          </div>
        </div>
        <article class="[ body-content ] [ prose ]">
          <nuxt-content :document="aboutpage" />
        </article>
      </div>
      <div class="personal-history">
        <div class="work-history">
          <h2 class="[ title ] [ text-primary ]">Work History</h2>
          <div class="history-list">
            <div
              class="history-item"
              v-for="work in aboutpage.work_history"
              :key="work.company_name"
            >
              <div class="icon"></div>
              <div class="details">
                <small class="[ date ] [ text-secondary ]"
                  >{{ work.start_date }} - {{ work.end_date }}</small
                >
                <h3 class="title">
                  {{ work.position_title }}
                </h3>
                <a
                  target="_blank"
                  rel="noopener nofollow"
                  :href="work.company_url"
                  ><h4 class="[ subtitle ] [ color-primary ]">
                    {{ work.company_name }}
                  </h4></a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="education">
          <h2 class="[ title ] [ text-primary ]">Education</h2>
          <div class="mt-4 history-list">
            <div
              class="flex history-item"
              v-for="education in aboutpage.education"
              :key="education.subtitle"
            >
              <div class="icon"></div>
              <div class="details">
                <small class="[ date ] [ text-secondary ]"
                  >{{ education.start_date }} - {{ education.end_date }}</small
                >
                <h3 class="title">
                  {{ education.title }}
                </h3>
                <h4 class="[ subtitle ] [ color-primary ]">
                  {{ education.subtitle }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { getCloudinaryId } from '~/utils/image'

export default {
  layout: 'content',
  async asyncData({ $content }) {
    const aboutpage = await $content('aboutpage').fetch()

    return {
      aboutpage,
    }
  },
  head() {
    return {
      title: 'About - Zachary Brooks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.aboutpage.description,
        },
      ],
    }
  },
  computed: {
    src() {
      return getCloudinaryId(this.aboutpage.main_image)
    },
  },
}
</script>

<style scope>
.content-layout {
  display: grid;
  grid-gap: 1rem;
  grid-template-areas: 'image' 'content';
  grid-template-columns: minmax(0, 1fr);
}
.image-container {
  grid-area: image;
}

.image-container .image {
  position: relative;
}

.image-container .image .cld-image {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  object-fit: cover;
}

.content-layout .body-content {
  grid-area: content;
}

.personal-history {
  display: grid;
  margin-top: 3rem;
  margin-bottom: 2rem;
  grid-template-columns: minmax(0, 1fr);
}

.personal-history .title {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.history-list {
  margin-top: 1rem;
}

.history-item {
  display: flex;
  margin: 2rem 0;
}

.history-item .icon {
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-primary);
  background-color: transparent;
  border-radius: 9999px;
}

.history-item .details {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

.history-item .details .date {
  font-size: 1rem;
}

.history-item .details .title {
  font-size: 1.5rem;
  line-height: 2rem;
}

.history-item .details .subtitle {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

@media screen and (min-width: 1024px) {
  .content-layout {
    grid-gap: 4rem;
    grid-template-areas: 'image content';
    grid-template-columns: 320px repeat(3, minmax(0, 1fr));
  }

  .image-container {
    grid-column: 1 / 2;
  }

  .image-container .image {
    margin-top: 4rem;
  }

  .image-container .image .cld-image {
    width: 20rem;
    height: 20rem;
  }

  .content-layout .body-content {
    margin-top: 0;
    grid-column: 2 / 5;
  }

  .personal-history {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
