import BoxPicture from "@/components/BoxPicture";
import BoxResume from "@/components/BoxResume";
import ContainerRow from "@/components/ContainerRow";
import ContainerFeed from "@/components/ContainerFeed";
import ContainerIdentity from "@/components/ContainerIdentity";
import SectionTitle from "@/components/SectionTitle";
import BoxLinkedin from "@/components/BoxLinkedin";
import BoxGithub from "@/components/BoxGithub";
import BoxStacks from "@/components/BoxStacks";
import BoxProject from "@/components/BoxProject";

export default function Home() {
  const descriptionProjectOne = `Ce projet est mon test d'admission à La Plateforme, visant à créer le jeu "Motus" selon des directives spécifiques, avec la technologie de mon choix. Il démontre mes compétences en développement lo…`
  const descriptionProjectTwo = `Ce projet vise à développer une solution web complète pour la gestion efficace d'une bibliothèque municipale. En utilisant les framework Symfony et NextJS, cette plateforme offre un écosystème numé…`
  return (
    <ContainerRow>
      <ContainerIdentity>
        <BoxPicture />
        <BoxResume />
      </ContainerIdentity>
      <ContainerFeed>
        <SectionTitle title="Mes réseaux" />
        <ContainerRow>
          <BoxLinkedin />
          <BoxGithub />
        </ContainerRow>
        <SectionTitle title="Stacks technique" />
        <ContainerRow>
          <BoxStacks href="https://nextjs.org/" img={"/nextjs.svg"} title={"NextJS Framework"} />
          <BoxStacks href="https://spring.io/" img={"/spring.png"} title={"Spring Boot Framework"} />
          <BoxStacks href="https://nestjs.com/" img={"/nestjs.png"} title={"NestJS Framework"} />
          <BoxStacks href="https://symfony.com/" img={"/symfony.png"} title={"Symfony Framework"} />
        </ContainerRow>
        <SectionTitle title="Quelques réalisations" />
        <ContainerRow>
          <BoxProject title="LaPlateforme_Molus" img={"/LaPlateforme_Molus.png"} href={"https://motus.arecode.fr"} resumeRight={descriptionProjectOne} />
        </ContainerRow>
        <ContainerRow>
          <BoxProject title="Library" img={"/library.svg"} href={"https://library.arecode.fr"} resumeLeft={descriptionProjectTwo} />
        </ContainerRow>
      </ContainerFeed>
    </ContainerRow>
  );
}
