<svelte:head>
  <title>Satan's Playbook - About</title>
</svelte:head>

<script lang="ts">
  // Import components
  import Header from '$lib/components/Header.svelte';
  import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';

  // Import images
  import derek from '$lib/images/derek.jpg';
  import jeff from '$lib/images/jeff.jpg';
  import adam from '$lib/images/adam.jpg';
</script>

<!-- Display Header: Emphasis on "About" link -->
<Header selectedPage="about" />

<!-- Main Content -->
<main class="container mx-auto mt-10">
  <!-- Our Goal -->
  <section class="mt-8 mb-14 text-center">
    <h1 class="h1 text-5xl font-bold mb-5 text-white text-center">What's our goal with this project?</h1>
    <p>Professors Parkin and Hansen came up with the idea for Satan's Playbook while teaching an Honors class at BYU on how to avoid deception. They recognized a need for a list of spiritual fallacies similar to the Cognitive Biases and Logical Fallacies that social scientists have developed. Their goal is to help people identify these tactics used by Satan in their daily lives so they can protect themselves against them. They hired a group of students who had taken the class to help create this website and generate the cards.</p>
  </section>

  <!-- The Team -->
  <section>
    <h1 class="h1 text-5xl font-bold mb-5 text-white text-center">Who are we?</h1>
    <div class="flex justify-between gap-6">
      <TeamMemberCard
        imgSrc={derek}
        name="Derek Hansen"
        role="BYU Professor"
        description="I'm a professor at BYU in the IT & Cybersecurity program. I teach classes in human-computer interaction, computing ethics, web development, cybersecurity, databases, social network analysis, mixed reality (e.g., VR, AR), and interdisciplinary innovation design. My research focuses on the intersection of people, social technologies, and game design. I'm an avid Ultimate Frisbee player, JV Cross Country coach at Timpview High School, and love basically any racquet sport."
      />
      <TeamMemberCard
        imgSrc={jeff}
        name="Jeff Parkin"
        role="BYU Professor"
        description="I’m a filmmaker and BYU professor in the department of Theatre & Media Arts, where I teach classes in screenwriting, directing, producing, New Media, and other forms of storytelling. I’m head of the fiction production area and executive producer of two of the four advanced films we make every year. Before coming to BYU, I produced, directed and/or written award-winning feature films, TV shows, documentaries, short films, web series, games, etc. I enjoy landscaping and garden design and I love stories of all genres that challenge, thrill, inspire and move."
      />
      <TeamMemberCard
        imgSrc={adam}
        name="Adam Bonny"
        role="BYU Student"
        description="I'm a filmmaker and software developer from Geneva, Switzerland. I started BYU as a Software Engineering Major and recently switched to Media Arts with a focus on Post Production Technology & Editing. For the past 3 years, I've been working for Powell Industries Inc. as their IT Manager where I've rebuilt their entire IT infrastructure and custom-built apps for almost all internal operations. I'm also a table tennis aficionado."
      />
    </div>
  </section>
</main>

