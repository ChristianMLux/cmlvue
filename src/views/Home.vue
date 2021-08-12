<template>
  <div class="home">
    <content-area :contentHeading="contentHeading">
      <div class="p-wrapper">
        <md-home-icon />
        <p>
          I am <b>looking for permanent employment</b>. This page is intended to
          give you as broad an insight as possible into my previous work, so
          that you can decide whether I am the right person for your vacancy
          before you make initial contact.
        </p>
      </div>
      <div class="p-wrapper">
        <p>
          You can find out more about me and my person in the profiles section.
          A
          <b>detailed description of my career</b> to date is written down here.
        </p>
        <md-person-icon />
      </div>
      <div class="p-wrapper">
        <md-code-working-icon />
        <p>
          Since I have been designing layouts for websites and graphics for more
          than 15 years, but have also written some smaller programmes, the
          showroom will offer the possibility to view these
          <b>works of my past</b>.
        </p>
      </div>
      <div class="p-wrapper">
        <p>
          You can find my <b>detailed curriculum vitae</b> under the link "CV".
          If required, the CV can also be printed out.
        </p>
        <md-document-icon />
      </div>
      <div class="p-wrapper">
        <md-mail-open-icon />
        <p>
          If I have aroused your interest with this portfolio, you can find all
          the <b>necessary contact information</b> under the Contact tab. Thank
          you for your interest and have a wonderful day!
        </p>
      </div>
    </content-area>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      contentHeading: "Welcome! (W. I. P.)",
      welcomeMsg:
        "Hi there, i know we're living in modern times with vuetify, bootstrap and so on, but i wanted to show what i'm able to do without those frameworks. Hope you'll enjoy",
    };
  },
  created() {
    console.log(this.welcomeMsg);
  },
};
</script>

<style scoped>
.p-wrapper {
  margin: 2rem 1.5rem;
  padding-left: 0.5rem;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.p-wrapper > div {
  font-size: 2.5rem;
  margin: auto 0;
  width: 20%;
}

.p-wrapper > p {
  text-align: justify;
  width: 80%;
}
</style>
