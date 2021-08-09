<template>
  <div class="about">
    <content-area :contentHeading="contentHeading">
      <p>
        Hi, I'm Christian, 30 years old, technical assistant and aspiring Junior
        Web Developer
      </p>
      <p>
        I'm geek with diverse experiences in the IT. Technical assistant
        (software and Webdevelopment) and currently participating on a coding
        bootcamp.
      </p>
      <p>
        My experience in IT is very diverse. I started as a teenager with
        self-operated game servers for MMORPGs like Lineage2 or World of
        Warcraft. In the course of this, I have dealt with the backend of the
        servers, but also with the frontend of the websites, with the
        organisation of my team and the work with the community.
      </p>
      <p>
        I was able to gain my first official experience in the industry at the
        company "Safetec IT Systeme" in Bad Cannstatt. There I was responsible
        for the operation of the website of a charitable association
        (imaging4africa) and was allowed to accompany the company's own software
        during development.
      </p>
      <p>
        In my private life, I have never stopped designing web layouts and
        implementing some of them. After completing my basic military service, I
        worked in various industries to gain more diverse insights into the
        working world.
      </p>
      <p>
        After this phase, I completed my vocational baccalaureate at the
        it.schule Stuttgart and my training as a technical assistant in the
        field of software and web development with commendation. In the
        following years, I dealt with the emergence of the new cryptocurrencies
        until I was drawn back to the actual industry. Currently, I am taking
        part in an intensive Junior Web Developer training at Coding Bootcamps
        Europe to refine my existing skills and build new ones.
      </p>
    </content-area>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      contentHeading: "Profile",
    };
  },
};
</script>
